export interface Job {
  title: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface JobCardProps {
  job: {
    title: string;
    description: string;
    responsibilities: string[];
    skills: string[];
  };
}
