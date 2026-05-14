# Rolling Cargo

Welcome to Rolling Cargo — a modern logistics and cargo management platform built with [Next.js](https://nextjs.org/). This project powers a real-world freight, shipping, and cargo company with advanced tracking, customer engagement, and logistics automation features.

---

## Table of Contents

- [Features](#features)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [Legal & Privacy](#legal--privacy)
- [Learn More](#learn-more)

---

## Features

- **Real-Time Cargo Tracking:**  
  Track your shipments using waybill numbers with instant updates from integrated logistics APIs.

- **Comprehensive Logistics Coverage:**  
  - Air cargo, sea cargo, road freight, and cross-border solutions (e.g., UK, Turkey, Netherlands, UAE, South Africa).
  - Door-to-door delivery, warehouse management, customs clearance, and specialized handling for perishable and high-value goods.

- **Client Communication:**  
  - Integrated contact forms that send notifications via email with auto-replies.
  - Office locator and dynamic contact info for global branches.

- **News, Guides, and Updates:**  
  - In-depth blog and shipping guides for major routes and processes (Amazon UAE, UK shops, Dutch imports, etc.).
  - Announcements (e.g., branch operating hours, new routes).

- **Media Gallery:**  
  - Rich media gallery for showcasing operations: images, drone videos, timelapses, and automation demos.

- **Responsive & Accessible UI:**  
  - Optimized for all device types.
  - Modern look, interactive animations, and accessibility best practices.

- **Privacy & Security:**  
  - GDPR-compliant privacy policy, data protection, and rate-limiting on forms.

---

## System Architecture

- **Frontend:** Next.js 13+ (React/TypeScript)
- **API Routes:** Next.js API (for contact, tracking)
- **Email:** Nodemailer + Outlook SMTP (configurable)
- **Data Sources:**  
  - Static: `/src/data/data.ts` (blog, gallery, config)
  - Dynamic: External tracking APIs, form submissions

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- (Optional) Vercel CLI

### Installation

```bash
git clone https://github.com/olingomaxwell1999/rolling-cargo.git
cd rolling-cargo

npm install
# or: yarn install | pnpm install | bun install
```

### Configuration

1. **Copy environment variables:**
    ```bash
    cp .env.example .env.local
    ```
    Fill in SMTP/email and any other required secrets.

2. **Run the development server:**
    ```bash
    npm run dev
    # or: yarn dev | pnpm dev | bun dev
    ```
    Visit [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file in the root:

```
OUTLOOK_EMAIL=your-email@domain.com
OUTLOOK_PASSWORD=your-app-password
# Add any external API keys as needed
```

---

## Project Structure

```
rolling-cargo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts      # Contact form backend logic
│   │   │   └── tracking/route.ts     # Shipment tracking API
│   │   ├── shared/Components/        # UI components (Tracking, Contact, Gallery, etc.)
│   │   └── privacy/page.tsx          # Privacy policy page
│   ├── data/data.ts                  # Static data (blog, offices, gallery)
│   └── hooks/                        # Custom React hooks
├── public/                           # Static assets (images, videos)
├── package.json
└── README.md
```

---

## Deployment

The fastest way is [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).  
Or use your own infrastructure (Node.js server, Docker, etc.).

See [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## Contributing

1. Fork this repo
2. Create your branch (`git checkout -b feature/something`)
3. Commit and push (`git commit -m 'Add amazing feature' && git push`)
4. Open a Pull Request

---

## Contact

- **Sales & Support:** sales@rollingcargo.co.ke
- **Phone:** +254 709 286 286
- [Website](https://rollingcargo.co.ke/)

---

## Legal & Privacy

- See [Privacy Policy](src/app/privacy/page.tsx) for details on data collection and handling.
- All trademarks and brands are property of their respective owners.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
