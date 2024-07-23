import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="container mx-auto px-20 py-16">
      {/* Quote Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-2xl italic text-gray-600">
            Our commitment to excellence in shipping sets us apart. We do not
            just deliver packages; we deliver peace of mind
          </p>
        </div>
        <div className="w-px h-20 bg-gray-300 hidden md:block"></div>
        <div className="w-full md:w-1/2 text-right">
          <p className="text-xl font-semibold">John Doe</p>
          <p className="text-gray-600">CEO, Global Shipping Solutions</p>
        </div>
      </div>

      {/* About Us Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Your Shipping Partner</h2>
        <hr className="border-t-2 border-gray-300 mb-6" />
        <p className="text-lg text-gray-700 leading-relaxed">
          Rolling Cargo is an established international air and sea freight
          forwarder with over 15 successful years of trusted and verified
          expertise. With the backing of 200 experienced and professionally
          trained staff and the excellent relationship with carriers, customs,
          terminals, and other local authorities, We will be your best choice on
          the extension of your business. We offer a wide range of air and sea
          freight services to Kenya, with a primary focus on reliability and
          communication that our customers can depend upon. In a world where air
          freight services are a vital link to today’s global logistic market,
          efficiency and versatility are paramount. With our international
          connections and hundreds of flights leaving daily, we have the unique
          ability to rapidly and reliably manage the fast flow of your products
          or goods via import or export. Whether you are shipping B2B or B2C,
          rest assured your consignments will be handled with the utmost care
          and attention. Choose Rolling Cargo and allow our Experts to eliminate
          the pain and effort of dealing with external carriers, customs
          clearance, compliance, and any separately required paperwork, ensuring
          high quality throughout the supply chain. Air cargo Sea Cargo Online
          Shopping As one of the leading freight forwarders, you can always rely
          on Rolling Cargo first class shipping services at very competitive
          rates to ensure the most efficient connection of your shipments by Air
          or Sea from UK, China, Turkey, Netherlands, India and Dubai to Kenya
          and beyond. Make the most of our International Courier License for
          smaller items such as parcels, packages and cartons. For more urgent
          consignments, air freight is an excellent option. Our rates are
          reasonable, especially in comparison to airline excess luggage prices!
          Air freight is competitive for medium-size cargo if you can be
          flexible on delivery and cut off times Want to keep your freight costs
          to a minimum? Please contact our friendly Contact Center +254 709 286
          286 to see how we can assist with your logistical requirements. Custom
          clearance Courier Services
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
