import React from 'react';
import { Phone, Mail, MapPin, Truck, Globe, ShieldCheck } from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen mt-16 bg-gray-100">
      {/* Header */}
      <header className="bg-[#0f1031] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Rolling Cargo LTD</h1>
          <p className="mt-2 text-xl">Your Shipping Partner</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            We provide comprehensive services for your Air and Sea freight cargo from CHINA, ITALY, UK, TURKEY, SOUTH AFRICA, & DUBAI to KENYA. Our services include Local and International Courier Services, Cargo Consolidation, Clearing & Forwarding, Imports & Exports, Air & Sea Freight (FCL & LCL), Warehousing, and E-Commerce solutions.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Air Freight', 'Sea Freight', 'Cargo Consolidation', 'E-commerce', 'Import/Exports', 'Courier Services'].map((service) => (
              <div key={service} className="bg-white p-4 rounded-lg shadow-md">
                <Truck className="text-[#0f1031] mb-2" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Tailored solutions for your business needs.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Efficiency', 'Customer Focus', 'Teamwork', 'Integrity', 'Safety & Security', 'Professionalism'].map((value) => (
              <div key={value} className="bg-white p-4 rounded-lg shadow-md">
                <ShieldCheck className="text-[#0f1031] mb-2" />
                <h3 className="text-xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="text-[#0f1031] mr-2" />
              <p>10 Funzi Road, Off Enterprise Road, Industrial Area, Nairobi, Kenya</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-[#0f1031] mr-2" />
              <p>+254 709 286 286</p>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="text-[#0f1031] mr-2" />
              <p>info@rollingcargo.co.ke</p>
            </div>
            <div className="flex items-center">
              <Globe className="text-[#0f1031] mr-2" />
              <p>www.rollingcargo.co.ke</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;