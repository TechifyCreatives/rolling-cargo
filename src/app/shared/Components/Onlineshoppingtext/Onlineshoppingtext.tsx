import React from "react";

const Onlineshoppingtext = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-light-blue-100 px-2">
      <div className="w-full bg-white p-8">
        {/* <h1 className="text-4xl font-bold mb-4 text-center">Online Shopping</h1> */}
        {/* <hr className="border-t-4 border-[#640e0e] rounded-full w-1/2 mx-auto mb-6" /> */}
        <h1 className="text-4xl font-bold mb-4 text-center">
        We Can Shop On Your Behalf.
        </h1>
        <hr className="border-t-4 border-[#640e0e] rounded-full w-1/2 mx-auto mb-6" />
        <p className="text-gray-700 text-center">
        From thousands of stores, we can ship your online purchases directly to your doorstep in Kenya. Our dedicated sales team guides you through the online shopping process, handling shipments from the UK, Netherlands, Italy, UAE, China, Turkey, and South Africa. You can conveniently pay for shipping upon arrival at our Kenyan offices. 
        </p>
      </div>
    </div>
  );
};

export default Onlineshoppingtext;
