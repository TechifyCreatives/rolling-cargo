"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BannerContent } from "@/types/banner.types";

interface BannerProps {
  content: BannerContent;
  imageSrc: string;
}

const Banner: React.FC<BannerProps> = ({ content, imageSrc }) => {
  return (
    <div className="relative mt-16 w-full h-[20rem] md:h-[28rem] lg:h-[32rem] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={`${content.title} Banner`}
        fill
        sizes="100vw"
        quality={85}
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {content.title}
        </h1>

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-sm md:text-base"
        >
          {content.breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              <Link
                href={crumb.href}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {crumb.label}
              </Link>
              {index < content.breadcrumbs.length - 1 && (
                <span aria-hidden="true">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;
