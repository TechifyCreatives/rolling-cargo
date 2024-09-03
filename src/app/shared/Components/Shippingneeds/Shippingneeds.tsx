import React from "react";

const Shippingneeds = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-blue-100">
      <div className="max-w-2xl w-full bg-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Your Shipping Needs Met
        </h1>
        <hr className="border-t-4 border-[#640e0e] rounded-full mx-auto mb-6" />
        <p className="text-gray-700">
          At Rolling Cargo we pride ourselves on being a global container
          shipping company that delivers tailored solutions designed to meet the
          specific needs of each of our customers. Regardless of your cargo
          type, or final destination, we offer versatile solutions that cover
          air, land, and sea. <br />
          Thanks to the extensive capacity of our container fleet, Rolling Cargo
          is the trusted transportation partner and shipping company for
          numerous companies the world over. Combining this with our global port
          coverage and extensive equipment availability means, we are able to
          deliver a professional, efficient shipping service, tailored to the
          specific needs of your business.
        </p>
      </div>
    </div>
  );
};

export default Shippingneeds;
