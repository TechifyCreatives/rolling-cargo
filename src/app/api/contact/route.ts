// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];

  // Clean old requests
  const recentRequests = userRequests.filter(
    (timestamp: number) => now - timestamp < RATE_LIMIT_WINDOW
  );

  rateLimitStore.set(ip, recentRequests);

  return recentRequests.length >= RATE_LIMIT_MAX_REQUESTS;
}

function addRateLimitEntry(ip: string): void {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];
  userRequests.push(now);
  rateLimitStore.set(ip, userRequests);
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 5000); // Limit length
}

// Validation function
function validateContactForm(data: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (
    !data.name ||
    typeof data.name !== "string" ||
    data.name.trim().length < 2
  ) {
    errors.push("Name must be at least 2 characters long");
  }

  if (
    !data.email ||
    typeof data.email !== "string" ||
    !emailRegex.test(data.email)
  ) {
    errors.push("Valid email address is required");
  }

  if (
    !data.subject ||
    typeof data.subject !== "string" ||
    data.subject.trim().length < 3
  ) {
    errors.push("Subject must be at least 3 characters long");
  }

  if (
    !data.message ||
    typeof data.message !== "string" ||
    data.message.trim().length < 10
  ) {
    errors.push("Message must be at least 10 characters long");
  }

  if (data.phone && typeof data.phone === "string" && data.phone.length > 0) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push("Invalid phone number format");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Create email transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.OUTLOOK_EMAIL, // Your Outlook email
      pass: process.env.OUTLOOK_PASSWORD, // Your Outlook password or app password
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });
}

// Generate HTML email template
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 2rem; text-align: center; }
        .header h1 { margin: 0; font-size: 1.5rem; }
        .content { padding: 2rem; }
        .field { margin-bottom: 1.5rem; }
        .label { font-weight: 600; color: #374151; margin-bottom: 0.5rem; display: block; }
        .value { background: #f1f5f9; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
        .message-box { background: #f8fafc; padding: 1.5rem; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 1rem; }
        .footer { background: #1e293b; color: #94a3b8; padding: 1.5rem; text-align: center; font-size: 0.875rem; }
        .timestamp { color: #64748b; font-size: 0.875rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚚 New Contact Form Submission</h1>
          <p>Rolling Cargo Website</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">👤 Name:</span>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <span class="label">📧 Email:</span>
            <div class="value"><a href="mailto:${data.email}">${
    data.email
  }</a></div>
          </div>
          
          ${
            data.phone
              ? `
          <div class="field">
            <span class="label">📱 Phone:</span>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          `
              : ""
          }
          
          ${
            data.company
              ? `
          <div class="field">
            <span class="label">🏢 Company:</span>
            <div class="value">${data.company}</div>
          </div>
          `
              : ""
          }
          
          <div class="field">
            <span class="label">📋 Subject:</span>
            <div class="value">${data.subject}</div>
          </div>
          
          <div class="field">
            <span class="label">💬 Message:</span>
            <div class="message-box">${data.message.replace(
              /\n/g,
              "<br>"
            )}</div>
          </div>
          
          <div class="timestamp">
            📅 Received: ${new Date().toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            })}
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the Rolling Cargo contact form.</p>
          <p>Please respond to the customer's email address above.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate plain text version
function generateEmailText(data: ContactFormData): string {
  return `
New Contact Form Submission - Rolling Cargo

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.company ? `Company: ${data.company}` : ""}
Subject: ${data.subject}

Message:
${data.message}

---
Received: ${new Date().toISOString()}
This message was sent from the Rolling Cargo contact form.
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.OUTLOOK_EMAIL || !process.env.OUTLOOK_PASSWORD) {
      console.error("Missing email configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email.toLowerCase()),
      phone: body.phone ? sanitizeInput(body.phone) : undefined,
      company: body.company ? sanitizeInput(body.company) : undefined,
      subject: sanitizeInput(body.subject),
      message: sanitizeInput(body.message),
    };

    // Add to rate limit
    addRateLimitEntry(clientIP);

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: `"Rolling Cargo Website" <${process.env.OUTLOOK_EMAIL}>`,
      to: "sales@rollingcargo.co.ke",
      replyTo: sanitizedData.email,
      subject: `New Contact: ${sanitizedData.subject}`,
      text: generateEmailText(sanitizedData),
      html: generateEmailHTML(sanitizedData),
      headers: {
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        "X-Mailer": "Rolling Cargo Contact Form",
      },
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: `"Rolling Cargo" <${process.env.OUTLOOK_EMAIL}>`,
      to: sanitizedData.email,
      subject: "Thank you for contacting Rolling Cargo",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Rolling Cargo</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; }
            .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 2rem; text-align: center; }
            .content { padding: 2rem; }
            .highlight { background: #dbeafe; padding: 1rem; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 1rem 0; }
            .footer { background: #1e293b; color: #94a3b8; padding: 1.5rem; text-align: center; font-size: 0.875rem; }
            .cta { background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 1rem 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚚 Thank You!</h1>
              <p>Your message has been received</p>
            </div>
            
            <div class="content">
              <p>Dear ${sanitizedData.name},</p>
              
              <p>Thank you for reaching out to Rolling Cargo! We have successfully received your message and our team will review it promptly.</p>
              
              <div class="highlight">
                <strong>What happens next?</strong><br>
                • Our team will review your inquiry within 24 hours<br>
                • You'll receive a personalized response from our logistics experts<br>
                • We'll provide tailored solutions for your cargo needs
              </div>
              
              <p>In the meantime, feel free to explore our services or contact us directly:</p>
              
              <p>
                📧 Email: <a href="mailto:sales@rollingcargo.co.ke">sales@rollingcargo.co.ke</a><br>
                📱 Phone: +254 700 123 456
              </p>
              
              <p>We appreciate your interest in Rolling Cargo and look forward to serving you!</p>
              
              <p>Best regards,<br>
              <strong>The Rolling Cargo Team</strong></p>
            </div>
            
            <div class="footer">
              <p>This is an automated response. Please do not reply to this email.</p>
              <p>© ${new Date().getFullYear()} Rolling Cargo. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${sanitizedData.name},

Thank you for reaching out to Rolling Cargo! We have successfully received your message and our team will review it promptly.

What happens next?
• Our team will review your inquiry within 24 hours
• You'll receive a personalized response from our logistics experts
• We'll provide tailored solutions for your cargo needs

In the meantime, feel free to contact us directly:
📧 Email: sales@rollingcargo.co.ke
📱 Phone: +254 700 123 456

We appreciate your interest in Rolling Cargo and look forward to serving you!

Best regards,
The Rolling Cargo Team

---
This is an automated response. Please do not reply to this email.
© ${new Date().getFullYear()} Rolling Cargo. All rights reserved.
      `.trim(),
    };

    // Send auto-reply (don't fail the main request if this fails)
    try {
      await transporter.sendMail(autoReplyOptions);
      console.log("Auto-reply sent successfully");
    } catch (autoReplyError) {
      console.error("Auto-reply failed:", autoReplyError);
      // Continue execution - auto-reply failure shouldn't fail the main request
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Return appropriate error message
    if (error instanceof Error) {
      if (
        error.message.includes("authentication") ||
        error.message.includes("login")
      ) {
        return NextResponse.json(
          { error: "Email service authentication failed" },
          { status: 500 }
        );
      }

      if (
        error.message.includes("network") ||
        error.message.includes("connection")
      ) {
        return NextResponse.json(
          { error: "Network error. Please try again later." },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
