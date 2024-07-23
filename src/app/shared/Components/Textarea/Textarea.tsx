import React from "react";

const Textarea = () => {
  return (
    <div className="flex flex-col my-15 items-center justify-center h-[400px] bg-light-blue-100 px-2">
      <div className="w-full bg-white p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Solutions</h1>
        <hr className="border-t-4 border-gray-300 rounded-full w-1/2 mx-auto mb-6" />
        <p className="text-gray-700 text-center">
          As well as being a global leader in container shipping, our worldwide
          teams of industry specific experts mean we can offer our customers
          round-the-clock personalised service. This ensures we deliver fast and
          reliable transit times, and that we provide the best solutions for
          your needs. We have extensive and well-established partnerships with
          different industry players. This enables us to offer better and most
          competitive rates. We deliver using the shortest possible transit time
          with optimum routings that are cost efficient.
        </p>
      </div>
    </div>
  );
};

export default Textarea;
