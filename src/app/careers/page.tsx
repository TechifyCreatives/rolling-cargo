import React from "react";
import Head from "next/head";
import Bannercontactus from "../shared/Components/Bannercareers/Bannercareers";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "New York",
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco",
  },
  { id: 4, title: "UX Designer", department: "Design", location: "London" },
];

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Careers | Our Company</title>
        <meta name="description" content="Join our team and make an impact" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <Bannercontactus />
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>

        <p className="text-lg text-center mb-12">
          We are always looking for talented individuals to join our mission.
          Check out our open positions below.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.department}</p>
              <p className="text-gray-600 mb-4">{job.location}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
