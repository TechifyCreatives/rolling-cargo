import Link from "next/link";
import Image from "next/image";

const Bannercustomclearence = () => {
  return (
    <div className="relative mb-10 mt-16 w-full h-64 md:h-80 lg:h-96">
      <Image
        src="/CustomsClearancePage.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Custom Clearence
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                href="/custom-clearence"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Custom Clearence
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Bannercustomclearence;
