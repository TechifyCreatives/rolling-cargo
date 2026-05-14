"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../shared/Components/Banner/Banner";
import { availableJobs, careersBannerContent } from "@/data/data";
// import JobCard from "../shared/Components/Cards/JobCard";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Banner content={careersBannerContent} imageSrc="/RC Jan-72.jpg" />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Positions Available
        </h1>

        <p className="text-xl text-center text-gray-600 mb-12">
          Thank you for taking an interest in employment opportunities at
          Rolling Cargo.
        </p>

        {/* <div className="space-y-12">
          {availableJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div> */}

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800">
            Please send your resume to{" "}
            <Link
              href="mailto:careers@rollingcargo.co.ke"
              className="text-blue-600 hover:underline"
            >
              careers@rollingcargo.co.ke
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
