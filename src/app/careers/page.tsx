import React, { ReactNode } from 'react';
import Bannercareers from '../shared/Components/Bannercareers/Bannercareers';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">
    {children}
  </div>
);

interface CardTitleProps {
  children: ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-800">
    {children}
  </h2>
);

interface CardDescriptionProps {
  children: ReactNode;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => (
  <p className="mt-2 text-gray-600">
    {children}
  </p>
);

interface CardContentProps {
  children: ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <div className="px-6 py-4">
    {children}
  </div>
);

interface Job {
  title: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const page: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Marketing Executive",
      description: "The Marketing Executive is responsible for planning, developing, and implementing marketing campaigns to promote the company's products and services. This role involves a mix of creative and analytical skills, including content creation, market research, creating awareness and data analysis.",
      responsibilities: [
        "Develop and implement marketing campaigns across various channels, including digital, print, and social media.",
        "Conduct market research to identify target audiences, market trends, and competitor activities.",
        "Create and manage content for the company's website, blog, social media, and other marketing materials.",
        "Monitor and analyze the performance of marketing campaigns, adjusting strategies as needed to achieve desired results.",
        "Collaborate with the sales team to ensure alignment of marketing efforts with sales objectives.",
        "Coordinate and manage events, trade shows, and promotional activities.",
        "Prepare and present regular reports on marketing activities and outcomes to the Sales & Marketing Manager.",
        "Stay up-to-date with the latest marketing trends and technologies."
      ],
      skills: [
        "Creative thinking and problem-solving abilities.",
        "Strong organizational and project management skills.",
        "Ability to analyze data and derive actionable insights.",
        "High level of attention to detail.",
        "Adaptability and ability to work in a fast-paced environment"
      ]
    },
    {
      title: "Sales Executive",
      description: "The Sales Executive is responsible for driving sales and revenue growth by identifying potential clients, generating leads, and closing sales. This role requires a proactive individual with strong communication skills, excellent customer service, and a results-driven mindset.",
      responsibilities: [
        "Identify and develop new business opportunities through networking, cold calling, and prospecting.",
        "Build and maintain strong relationships with existing and potential clients.",
        "Conduct sales presentations and product demonstrations to prospective clients.",
        "Negotiate and close sales deals, ensuring customer satisfaction and retention.",
        "Meet and exceed sales targets and KPIs set by the company.",
        "Stay up-to-date with industry trends, market conditions, and competitor activities.",
        "Collaborate with the sales team and other departments to ensure seamless delivery of products and services.",
        "Prepare and submit regular sales reports and forecasts to the Sales & Marketing Manager."
      ],
      skills: [
        "Strong organizational and time management skills.",
        "Ability to build and maintain relationships with clients.",
        "High level of motivation and drive to achieve sales targets.",
        "Problem-solving skills and ability to think strategically.",
        "Adaptability and resilience in a fast-paced sales environment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Bannercareers/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Positions Available</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Thank you for taking an interest in employment opportunities at Rolling Cargo.
        </p>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Key Responsibilities:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700">{resp}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-4">Skills:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {job.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800">
            Please send your resume to{' '}
            <a href="mailto:careers@rollingcargo.co.ke" className="text-blue-600 hover:underline">
              careers@rollingcargo.co.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;