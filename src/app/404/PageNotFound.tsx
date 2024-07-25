"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-2">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Oops! The page you are looking for doesn ot exist or has been moved.
        </p>

        <div className="mb-8">
          <Image
            src="/404-illustration.svg"
            alt="404 Illustration"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-base"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
