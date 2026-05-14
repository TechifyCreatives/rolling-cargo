"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/types/blog.types";
import { blogPosts } from "@/data/data";

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Shipping Insights
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-56">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-[#0f1031] text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                {post.category}
              </span>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.author}</span>
                <button
                  onClick={() => openModal(post)}
                  className="bg-[#0f1031] hover:bg-[#640e0e] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  {selectedPost.title}
                </h2>
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span className="font-medium">{selectedPost.author}</span>
                </div>
                <div className="prose max-w-none">
                  {selectedPost.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {section.title}
                      </h3>
                      {section.content.map((paragraph, pIndex) => (
                        <div key={pIndex} className="mb-2">
                          {section.content.length > 1 ? (
                            <ul>
                              <li className="text-gray-700">{paragraph}</li>
                            </ul>
                          ) : (
                            <p className="text-gray-700">{paragraph}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <button
                  onClick={closeModal}
                  className="mt-8 bg-[#0f1031] hover:bg-[#640e0e] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
