"use client"
import React, { useState } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Icons ──────────────────────────────────────────────────────────────────
const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const PackageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const GlassIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8l1 7H7L8 2z" />
    <path d="M7 9c0 5 2 8 5 10 3-2 5-5 5-10" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="9" y1="22" x2="15" y2="22" />
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ── Types ──────────────────────────────────────────────────────────────────
type SectionData = {
  id: string;
  title: string;
  icon: React.ReactNode;
  tag?: string;
  items?: string[];
  paragraphs?: string[];
};

// ── Accordion Section ──────────────────────────────────────────────────────
const AccordionSection = ({
  section,
  index,
}: {
  section: SectionData;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "border border-stone-200 rounded-xl overflow-hidden transition-all duration-300",
        open ? "shadow-md" : "shadow-sm hover:shadow-md"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-stone-50 transition-colors duration-200 group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700">
            {section.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-stone-400 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.tag && (
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                  {section.tag}
                </span>
              )}
            </div>
            <h2 className="text-base font-semibold text-stone-800 leading-snug mt-0.5">
              {section.title}
            </h2>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 pt-2 bg-stone-50 border-t border-stone-100">
          <div className="pl-14 text-stone-600 text-sm leading-relaxed space-y-3">
            {section.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.items && (
              <ul className="space-y-2.5 mt-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Section Group ──────────────────────────────────────────────────────────
const SectionGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400">
        {label}
      </span>
      <div className="flex-1 h-px bg-stone-200" />
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
const Terms = () => {
  const carriageSections: SectionData[] = [
    {
      id: "definitions",
      title: "Definitions",
      icon: <FileTextIcon className="w-5 h-5" />,
      items: [
        '"Shipment" refers to all cargoes or parcels transported under a single waybill, which may be carried by air, sea, or any other method chosen by ROLLING CARGO LIMITED.',
        '"Waybill" includes any shipment identifier or document issued by ROLLING CARGO LIMITED or the Shipper\'s automated systems.',
        '"ROLLING CARGO LIMITED" refers to any member of the ROLLING CARGO LIMITED Network.',
      ],
    },
    {
      id: "customs",
      title: "Customs Clearance & Regulatory Compliance",
      icon: <GlobeIcon className="w-5 h-5" />,
      paragraphs: ["ROLLING CARGO LIMITED may perform the following on behalf of the Shipper or Consignee:"],
      items: [
        "Complete any necessary documents, amend product or service codes, and advance any duties, taxes, or other charges required by law.",
        "Act as the Shipper's or Consignee's lawful agent or designate a customs broker for export control and customs clearance.",
        "Redirect the shipment to the Consignee's customs broker or another address as reasonably requested.",
      ],
    },
    {
      id: "unacceptable",
      title: "Unacceptable Shipments",
      icon: <AlertTriangleIcon className="w-5 h-5" />,
      tag: "Important",
      paragraphs: ["A shipment is considered unacceptable if:"],
      items: [
        "It contains firearms, ammunition, explosives, counterfeit goods, cash, bullion, live animals, prohibited animal parts, human remains, loose precious stones, shisha, alcohol, cannabis, or illegal goods.",
        "It is classified as hazardous material, dangerous goods, or restricted articles under relevant regulations.",
        "The address is incorrect, not properly marked, or the packaging is inadequate.",
      ],
    },
    {
      id: "deliveries",
      title: "Deliveries & Undeliverable Shipments",
      icon: <TruckIcon className="w-5 h-5" />,
      items: [
        "Shipments cannot be delivered to P.O. boxes or postal codes.",
        "Delivery will be made to the address provided by the Shipper, not necessarily to the named Consignee.",
        "ROLLING CARGO LIMITED may notify the Consignee of an upcoming or missed delivery, offering alternative delivery options.",
      ],
    },
    {
      id: "claims",
      title: "Claims",
      icon: <FileTextIcon className="w-5 h-5" />,
      items: [
        "All claims must be submitted in writing within thirty-five (35) days from the date ROLLING CARGO LIMITED accepted the shipment for sea cargo, and within ten (10) days for air cargo.",
        "Claims are limited to one item per shipment, with settlement considered final for all associated losses or damages.",
        "Damage must be reported within 24 hours.",
      ],
    },
    {
      id: "insurance",
      title: "Shipment Insurance",
      icon: <ShieldCheck className="w-5 h-5" />,
      paragraphs: [
        "ROLLING CARGO LIMITED may arrange insurance for loss or damage to the shipment if instructed in writing by the Shipper, provided the applicable premium is paid.",
        "Customers are advised to seek their own insurance for their goods if the goods exceed USD 1,500. This insurance does not cover indirect loss or damage, or loss or damage caused by delays.",
      ],
    },
    {
      id: "force-majeure",
      title: "Circumstances Beyond Our Control",
      icon: <AlertTriangleIcon className="w-5 h-5" />,
      paragraphs: [
        "ROLLING CARGO LIMITED is not liable for loss or damage resulting from circumstances beyond its control, including but not limited to electrical or magnetic damage to electronic or photographic images, data, or recordings; defects related to the shipment's nature; acts or omissions by third parties; cyber-attacks; or force majeure events such as natural disasters, war, or civil unrest.",
      ],
    },
    {
      id: "indemnities",
      title: "Shipper's Representations, Warranties & Indemnities",
      icon: <ShieldCheck className="w-5 h-5" />,
      paragraphs: ["The Shipper shall indemnify and hold ROLLING CARGO LIMITED harmless from liabilities, losses, and damages arising from:"],
      items: [
        "Compliance with the unacceptable shipments policy.",
        "Secure preparation and storage of the shipment.",
        "Adherence to export control, sanctions, customs laws, and other regulations.",
        "Full and accurate declaration of goods subject to government authorizations.",
        "Provision of complete and accurate information, permits, licenses, and documents.",
        "Compliance with legal obligations regarding the processing and sharing of personal data.",
      ],
    },
    {
      id: "routing",
      title: "Routing",
      icon: <TruckIcon className="w-5 h-5" />,
      paragraphs: [
        "The Shipper agrees to all routing and diversion, including the possibility of intermediate stops.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: <GlobeIcon className="w-5 h-5" />,
      paragraphs: [
        "Disputes arising under these Terms and Conditions will be governed by the law of the shipment's country of origin and subject to the non-exclusive jurisdiction of its courts unless otherwise required by law.",
      ],
    },
    {
      id: "severability",
      title: "Severability",
      icon: <FileTextIcon className="w-5 h-5" />,
      paragraphs: [
        "If any provision of these Terms and Conditions is found to be invalid or unenforceable, it will not affect the validity or enforceability of the remaining provisions.",
      ],
    },
  ];

  const collectionSections: SectionData[] = [
    {
      id: "final-collection",
      title: "Collection Policy",
      icon: <PackageIcon className="w-5 h-5" />,
      tag: "Important",
      paragraphs: [
        "Once goods have been collected and removed from the warehouse, they cannot be returned or exchanged.",
        "Rolling Cargo operates on a First In, First Out (FIFO) basis, ensuring that all client cargo is handled and released in the strict order it is received.",
      ],
    },
    {
      id: "damage-claims",
      title: "Damage Claims",
      icon: <AlertTriangleIcon className="w-5 h-5" />,
      tag: "Important",
      paragraphs: [
        "Any claims regarding damaged goods must be reported and verified before the goods leave the warehouse premises.",
      ],
    },
    {
      id: "carton-verification",
      title: "Carton Quantity Verification",
      icon: <PackageIcon className="w-5 h-5" />,
      paragraphs: [
        "All carton quantities must be checked at the point of collection. Discrepancies in carton count will only be addressed prior to dispatch from the warehouse.",
      ],
    },
    {
      id: "quantity-disputes",
      title: "Volume or Quantity Disputes",
      icon: <FileTextIcon className="w-5 h-5" />,
      paragraphs: [
        "Any discrepancies related to volume or quantity will not be considered once the goods have been collected.",
      ],
    },
    {
      id: "responsibility-collection",
      title: "Responsibility Upon Collection",
      icon: <ShieldCheck className="w-5 h-5" />,
      paragraphs: [
        "The individual collecting the goods assumes full responsibility for the condition and handling of the goods once they leave the warehouse.",
      ],
    },
    {
      id: "transfer-ownership",
      title: "Transfer of Ownership",
      icon: <ShieldCheck className="w-5 h-5" />,
      paragraphs: [
        "The person collecting the goods is regarded as the authorized owner or representative of the owner of the goods at the time of collection.",
      ],
    },
  ];

  const fragileSections: SectionData[] = [
    {
      id: "fragile-timeline",
      title: "Collection Timeline",
      icon: <GlassIcon className="w-5 h-5" />,
      tag: "24hr",
      paragraphs: [
        "Fragile goods must be collected within 24 hours of notification to ensure their safety and proper handling.",
      ],
    },
    {
      id: "fragile-communication",
      title: "Timely Communication",
      icon: <FileTextIcon className="w-5 h-5" />,
      paragraphs: [
        "Clients are required to maintain clear and timely communication regarding the collection and handling of fragile goods.",
      ],
    },
    {
      id: "fragile-responsibility",
      title: "Liability & Responsibility",
      icon: <AlertTriangleIcon className="w-5 h-5" />,
      tag: "Important",
      paragraphs: [
        "Failure to collect fragile goods within the specified timeframe may result in the company not being held liable for any damage or storage-related risks.",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #fafaf8 0%, #f5f0e8 50%, #fafaf8 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Decorative top bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 z-50" />

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal Document
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-3"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-lg text-stone-500 mb-2" style={{ fontFamily: "system-ui, sans-serif" }}>
            Rolling Cargo Limited
          </p>
          <p
            className="text-sm text-stone-400 italic"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Effective upon engagement of our services
          </p>
        </header>

        {/* Notice Banner */}
        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
            <AlertTriangleIcon className="w-5 h-5" />
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif" }}>
            <p className="text-sm font-semibold text-amber-900 mb-1">Agreement Notice</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              By ordering services from Rolling Cargo Limited, you, as the "Shipper," agree on behalf of yourself, the consignee of the shipment ("Consignee"), and anyone else with an interest in the shipment, that these Terms and Conditions will apply.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div style={{ fontFamily: "system-ui, sans-serif" }}>
          <SectionGroup label="Conditions of Carriage">
            {carriageSections.map((section, i) => (
              <AccordionSection key={section.id} section={section} index={i} />
            ))}
          </SectionGroup>

          <SectionGroup label="Goods Collection Terms">
            {collectionSections.map((section, i) => (
              <AccordionSection key={section.id} section={section} index={i} />
            ))}
          </SectionGroup>

          <SectionGroup label="Fragile Goods Collection Policy">
            {fragileSections.map((section, i) => (
              <AccordionSection key={section.id} section={section} index={i} />
            ))}
          </SectionGroup>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-stone-200 text-center">
          <p className="text-sm text-stone-500" style={{ fontFamily: "system-ui, sans-serif" }}>
            For further information, visit{" "}
            <a
              href="https://www.rollingcargo.co.ke"
              className="text-amber-700 hover:text-amber-900 underline underline-offset-2 font-medium transition-colors"
            >
              www.rollingcargo.co.ke
            </a>
          </p>
          <p className="text-xs text-stone-400 mt-3" style={{ fontFamily: "system-ui, sans-serif" }}>
            © Rolling Cargo Limited · All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Terms;
