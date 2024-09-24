// components/AppPromoSection.tsx

import Image from "next/image";
import Link from "next/link";

const Appdownload: React.FC = () => {
  return (
    <section className="bg-[#0f1031] text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ship Smarter with Our Mobile App
            </h2>
            <p className="text-lg mb-6">
              Track shipments, get real-time updates, and manage your deliveries
              on the go with our easy-to-use mobile app.
            </p>
            <ul className="list-disc list-inside mb-8">
              <li>Real-time shipment tracking</li>
              <li>Instant notifications</li>
              <li>Easy booking and management</li>
              <li>24/7 customer support</li>
            </ul>
            
          </div>
          <div className="md:w-1/2 flex justify-center">
          <Link
              href="https://play.google.com/store/apps/details?id=com.yourcompany.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full inline-flex items-center hover:bg-blue-100 transition duration-300"
            >
              <Image
                src="/playstore.png"
                alt="Google Play"
                width={24}
                height={24}
                className="mr-2"
              />
              Download on Google Play
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appdownload;
