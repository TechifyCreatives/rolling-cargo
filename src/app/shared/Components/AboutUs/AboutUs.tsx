// components/AboutUs.tsx

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/image4.jpg"
              alt="Rolling Cargo operations"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 mb-6">
              Rolling Cargo is an established international air and sea freight
              forwarder with over 15 successful years of trusted and verified
              expertise. With the backing of 200 experienced and professionally
              trained staff and excellent relationships with carriers, customs,
              terminals, and other local authorities, we will be your best
              choice for extending your business.
            </p>
            <p className="text-gray-700 mb-6">
              We offer a wide range of air and sea freight services to Kenya,
              with a primary focus on reliability and communication that our
              customers can depend upon. Whether you are shipping B2B or B2C,
              rest assured your consignments will be handled with the utmost
              care and attention.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Air Cargo</li>
              <li>Sea Cargo</li>
              <li>Online Shopping</li>
              <li>Custom Clearance</li>
              <li>Courier Services</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To provide efficient and versatile air and sea freight services,
              connecting businesses globally with reliability and excellence.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be the leading freight forwarder, known for our first-class
              shipping services, competitive rates, and commitment to customer
              satisfaction.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Priorities</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Customer-centric approach</li>
              <li>Efficient and reliable service</li>
              <li>Competitive pricing</li>
              <li>Streamlined customs clearance</li>
              <li>Sustainable shipping practices</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Choose Rolling Cargo and allow our experts to eliminate the pain
              and effort of dealing with external carriers, customs clearance,
              compliance, and any separately required paperwork, ensuring high
              quality throughout the supply chain.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
