// Blog.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Ways to Optimize Your Supply Chain",
    excerpt:
      "Discover key strategies to streamline your logistics and improve efficiency...",
    content:
      "In today's fast-paced global market, optimizing your supply chain is crucial for staying competitive. Here are five strategies to consider:\n\n1. Implement advanced tracking systems\n2. Utilize data analytics for demand forecasting\n3. Embrace automation in warehousing\n4. Develop strong supplier relationships\n5. Invest in employee training and development\n\nBy focusing on these areas, you can significantly improve your supply chain efficiency and reduce costs.",
    date: "2024-07-01",
    category: "Supply Chain",
    image: "/image4.jpg",
    author: "Jane Doe, Logistics Specialist",
  },
  // Add more blog posts here
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <h1 className="text-4xl font-bold pt-10 text-center mb-8">
        Shipping Insights
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button
                  onClick={() => openModal(post)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 pt-10 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              <div className="relative h-64 mb-4">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>{selectedPost.author}</span>
                <span>{selectedPost.date}</span>
              </div>
              <div className="prose max-w-none">
                {selectedPost.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
