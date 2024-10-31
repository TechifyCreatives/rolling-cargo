// TermsPage.tsx
import React from 'react';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Alert Component
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "relative w-full rounded-lg border border-gray-200 bg-white p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-600",
      className
    )}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-600 [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

// Card Component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// AlertCircle Icon Component
const AlertCircle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// Terms Section Component
const TermsSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
    <div className="text-gray-600 space-y-2">
      {children}
    </div>
  </div>
);

// Main Terms Page Component
const Terms = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
            Terms and Conditions of Carriage
          </h1>
          <p className="text-lg text-gray-600">
            Rolling Cargo Limited
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                By ordering services from ROLLING CARGO LIMITED, you, as the "Shipper," agree on behalf of yourself, 
                the consignee of the shipment ("Consignee"), and anyone else with an interest in the shipment, 
                that these Terms and Conditions will apply.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-12 bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8">
          <TermsSection title="Definitions">
            <ul className="list-disc pl-5 space-y-2">
              <li>"Shipment" refers to all cargoes or parcels transported under a single waybill, which may be carried by air, sea, or any other method chosen by ROLLING CARGO LIMITED.</li>
              <li>"Waybill" includes any shipment identifier or document issued by ROLLING CARGO LIMITED or the Shipper's automated systems.</li>
              <li>"ROLLING CARGO LIMITED" refers to any member of the ROLLING CARGO LIMITED Network.</li>
            </ul>
          </TermsSection>

          <TermsSection title="Customs Clearance and Regulatory Compliance">
            <p>ROLLING CARGO LIMITED may perform the following on behalf of the Shipper or Consignee:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Complete any necessary documents, amend product or service codes, and advance any duties, taxes, or other charges required by law.</li>
              <li>Act as the Shipper's or Consignee's lawful agent or designate a customs broker for export control and customs clearance.</li>
              <li>Redirect the shipment to the Consignee's customs broker or another address as reasonably requested.</li>
            </ul>
          </TermsSection>

          <TermsSection title="Unacceptable Shipments">
            <p>A shipment is considered unacceptable if:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>It contains firearms, ammunition, explosives, counterfeit goods, cash, bullion, live animals, prohibited animal parts, human remains, loose precious stones, shisha, alcohol, cannabis, or illegal goods.</li>
              <li>It is classified as hazardous material, dangerous goods, or restricted articles under relevant regulations.</li>
              <li>The address is incorrect, not properly marked, or the packaging is inadequate.</li>
            </ul>
          </TermsSection>

          <TermsSection title="Deliveries and Undeliverable Shipments">
            <ul className="list-disc pl-5 space-y-2">
              <li>Shipments cannot be delivered to P.O. boxes or postal codes.</li>
              <li>Delivery will be made to the address provided by the Shipper, not necessarily to the named Consignee.</li>
              <li>ROLLING CARGO LIMITED may notify the Consignee of an upcoming or missed delivery, offering alternative delivery options.</li>
            </ul>
          </TermsSection>

          <TermsSection title="Claims">
            <ul className="list-disc pl-5 space-y-2">
              <li>All claims must be submitted in writing within thirty-five (35) days from the date ROLLING CARGO LIMITED accepted the shipment for sea cargo, and within ten (10) days for air cargo.</li>
              <li>Claims are limited to one item per shipment, with settlement considered final for all associated losses or damages.</li>
              <li>Damage must be reported within 24 hours.</li>
            </ul>
          </TermsSection>

          <TermsSection title="Shipment Insurance">
            <p className="mb-2">
              ROLLING CARGO LIMITED may arrange insurance for loss or damage to the shipment if instructed in writing by the Shipper, 
              provided the applicable premium is paid.
            </p>
            <p>
              Customers are advised to seek their own insurance for their goods if the goods exceed USD 1,500. This insurance does not 
              cover indirect loss or damage, or loss or damage caused by delays.
            </p>
          </TermsSection>

          <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>For further information, please visit the ROLLING CARGO LIMITED website at{' '}
              <a href="https://www.rollingcargo.co.ke" className="text-blue-600 hover:text-blue-700">
                www.rollingcargo.co.ke
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;