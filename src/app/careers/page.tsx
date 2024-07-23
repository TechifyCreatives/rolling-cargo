import React from "react";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
  department: string;
  type: string;
  workMode: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Logistics Coordinator",
    department: "Operations",
    type: "Full-time",
    workMode: "Onsite",
  },
  {
    id: 2,
    title: "Freight Forwarder",
    department: "Shipping",
    type: "Full-time",
    workMode: "Onsite",
  },
  {
    id: 3,
    title: "Supply Chain Analyst",
    department: "Analytics",
    type: "Contract",
    workMode: "Remote",
  },
  {
    id: 4,
    title: "Customs Compliance Specialist",
    department: "Legal",
    type: "Full-time",
    workMode: "Hybrid",
  },
  {
    id: 5,
    title: "Fleet Manager",
    department: "Operations",
    type: "Full-time",
    workMode: "Onsite",
  },
  {
    id: 6,
    title: "International Shipping Coordinator",
    department: "Shipping",
    type: "Full-time",
    workMode: "Remote",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Join Our Shipping Team
        </h1>

        <p className="text-lg text-center mb-12">
          We are looking for talented individuals to help us revolutionize the
          shipping industry. Explore our open positions below and become part of
          our global logistics network.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-red-600 mb-2">{job.department}</p>
              <p className="text-gray-600 mb-4">
                {job.type} • {job.workMode}
              </p>
              <Link
                href="/apply"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
