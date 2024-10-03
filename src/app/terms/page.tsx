"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Section {
  title: string;
  content: string;
}

const page: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections: Section[] = [
    {
      title: 'Important Notice',
      content: 'By ordering services from ROLLING CARGO LIMITED, you, as the "Shipper," agree on behalf of yourself, the consignee of the shipment ("Consignee"), and anyone else with an interest in the shipment, that these Terms and Conditions will apply.'
    },
    {
      title: 'Definitions',
      content: '"Shipment" refers to all cargoes or parcels transported under a single waybill. "Waybill" includes any shipment identifier or document issued by ROLLING CARGO LIMITED. "ROLLING CARGO LIMITED" refers to any member of the ROLLING CARGO LIMITED Network.'
    },
    {
      title: 'Customs Clearance and Regulatory Compliance',
      content: 'ROLLING CARGO LIMITED may perform the following on behalf of the Shipper or Consignee to provide services: Complete any necessary documents, amend product or service codes, and advance any duties, taxes, or other charges required by law ("Customs Duties"). Act as the Shipper\'s or Consignee\'s lawful agent or designate a customs broker for export control and customs clearance. Redirect the shipment to the Consignee\'s customs broker or another address as reasonably requested.'
    },
    {
      title: 'Unacceptable Shipments',
      content: 'A shipment is considered unacceptable if: It contains firearms, ammunition, explosives, counterfeit goods, cash, bullion, live animals, prohibited animal parts, human remains, loose precious stones, shisha, alcohol, cannabis, or illegal goods such as narcotics. It is classified as hazardous material, dangerous goods, or restricted articles under relevant regulations. It contains any other item that cannot be safely or legally transported by ROLLING CARGO LIMITED.'
    },
    {
      title: 'Deliveries and Undeliverable Shipments',
      content: 'Shipments cannot be delivered to P.O. boxes or postal codes. Delivery will be made to the address provided by the Shipper, not necessarily to the named Consignee. ROLLING CARGO LIMITED may notify the Consignee of an upcoming or missed delivery, offering alternative delivery options. If a shipment is deemed unacceptable, undervalued for customs, or if the Consignee refuses delivery or fails to pay Customs Duties or other charges, ROLLING CARGO LIMITED will attempt to return the shipment at the Shipper\'s cost.'
    },
    {
      title: 'Inspection',
      content: 'ROLLING CARGO LIMITED reserves the right to open and inspect any shipment without notice for safety, security, customs, or other regulatory reasons.'
    },
    {
      title: 'Shipment Charges, Duties, and Fees',
      content: 'Shipment charges are based on the higher actual or volumetric weight for air cargo and cubic meters (CBM) for sea cargo. ROLLING CARGO LIMITED may re-weigh or re-measure any piece to confirm calculations. Payment of Customs Duties and other charges may be required from the Consignee before delivery. If the Consignee fails to pay, the Shipper must reimburse ROLLING CARGO LIMITED for all related charges.'
    },
    {
      title: 'ROLLING CARGO LIMITED\'s Liability',
      content: 'ROLLING CARGO LIMITED\'s liability is strictly limited to direct loss or damage to a shipment only and does not cover indirect losses such as lost profits, income, or future business. Delivery schedules are not binding, and ROLLING CARGO LIMITED is not liable for damages or losses caused by delays.'
    },
    {
      title: 'Claims',
      content: 'All claims must be submitted in writing within thirty-five (35) days from the date ROLLING CARGO LIMITED accepted the shipment for sea cargo, and within ten (10) days for air cargo. Failure to do so results in no liability. Claims are limited to one item per shipment, with settlement considered final for all associated losses or damages.'
    },
    {
      title: 'Shipment Insurance',
      content: 'ROLLING CARGO LIMITED may arrange insurance for loss or damage to the shipment if instructed in writing by the Shipper, provided the applicable premium is paid. Customers are advised to seek their own insurance for their goods if the goods exceed USD 1,500. This insurance does not cover indirect loss or damage, or loss or damage caused by delays.'
    },
    {
      title: 'Circumstances Beyond ROLLING CARGO LIMITED\'s Control',
      content: 'ROLLING CARGO LIMITED is not liable for loss or damage resulting from circumstances beyond its control, including but not limited to electrical or magnetic damage to electronic or photographic images, data, or recordings; defects related to the shipment\'s nature; acts or omissions by third parties; cyber-attacks; or force majeure events such as natural disasters, war, or civil unrest.'
    },
    {
      title: 'Shipper\'s Representations, Warranties, and Indemnities',
      content: 'The Shipper shall indemnify and hold ROLLING CARGO LIMITED harmless from liabilities, losses, and damages arising from: Compliance with the unacceptable shipments policy. Secure preparation and storage of the shipment. Adherence to export control, sanctions, customs laws, and other regulations. Full and accurate declaration of goods subject to government authorizations. Provision of complete and accurate information, permits, licenses, and documents. Compliance with legal obligations regarding the processing and sharing of personal data.'
    },
    {
      title: 'Routing',
      content: 'The Shipper agrees to all routing and diversion, including the possibility of intermediate stops.'
    },
    {
      title: 'Governing Law',
      content: 'Disputes arising under these Terms and Conditions will be governed by the law of the shipment\'s country of origin and subject to the non-exclusive jurisdiction of its courts unless otherwise required by law.'
    },
    {
      title: 'Severability',
      content: 'If any provision of these Terms and Conditions is found to be invalid or unenforceable, it will not affect the validity or enforceability of the remaining provisions.'
    }
  ];

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Terms and Conditions
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => toggleSection(index)}
                  >
                    <span>{section.title}</span>
                    {openSection === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-500" />
                    )}
                  </button>
                  {openSection === index && (
                    <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          For further information, please visit our website at{' '}
          <a
            href="https://www.rollingcargo.co.ke"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            https://www.rollingcargo.co.ke
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;