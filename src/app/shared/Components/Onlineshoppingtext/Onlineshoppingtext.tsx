import React from "react";

const Onlineshoppingtext = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-light-blue-100 px-2">
      <div className="w-full bg-white p-8">
        {/* <h1 className="text-4xl font-bold mb-4 text-center">Online Shopping</h1> */}
        {/* <hr className="border-t-4 border-[#640e0e] rounded-full w-1/2 mx-auto mb-6" /> */}
        <h1 className="text-4xl font-bold mb-4 text-center">
        Best & Efficient Logistics Services
        </h1>
        <hr className="border-t-4 border-[#640e0e] rounded-full w-1/2 mx-auto mb-6" />
        <ul className="py-4">
          <li>1. Sea freight</li>
          <li>2. Online Shopping</li>
          <li>3. Custom clearance</li>
          <li>4. Cargo Consolidation</li>
          <li>5. Import/Exports</li>
        </ul>
        <p className="text-gray-700">
          Rolling Cargo assists you to shop online and ship goods to Kenya from
          the USA, UK, Dubai, China, India, Turkey and Netherlands, right to
          your door step. We facilitate the purchasing, shipping and delivery to
          your destination. <br /> <br /> You can pay with the local currency, Mpesa, Visa or
          Master card. Once you pay for goods, you can always pay the shipping
          cost once your goods land in our Nairobi office. Send us your shopping
          details and product links and we will send you a detailed quotation
          and cost estimate.
        </p>
      </div>
    </div>
  );
};

export default Onlineshoppingtext;
