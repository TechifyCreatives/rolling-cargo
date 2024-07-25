"use client";
import { useState, FormEvent } from "react";

interface FeedbackItem {
  id: number;
  name: string;
  shipmentId: string;
  rating: number;
  message: string;
}

export default function ShippingFeedbackSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shipmentId, setShipmentId] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([
    {
      id: 1,
      name: "John Doe",
      shipmentId: "SH12345",
      rating: 5,
      message: "Excellent service! Package arrived earlier than expected.",
    },
    {
      id: 2,
      name: "Jane Smith",
      shipmentId: "SH67890",
      rating: 4,
      message: "Good overall, but packaging could be improved.",
    },
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFeedback: FeedbackItem = {
      id: Date.now(),
      name,
      shipmentId,
      rating,
      message,
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    // Reset form fields
    setName("");
    setEmail("");
    setShipmentId("");
    setRating(5);
    setMessage("");
  };

  return (
    <section className="bg-[#640e0e] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Shipping Feedback
        </h2>

        {/* Feedback Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mb-12 bg-white p-6 rounded-lg shadow"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="shipmentId" className="block mb-2 font-medium">
              Shipment ID
            </label>
            <input
              type="text"
              id="shipmentId"
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block mb-2 font-medium">
              Rating
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value} Star{value !== 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Comments
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0f1031] text-white py-2 px-4 rounded-md hover:bg-[#640e0e] transition-colors"
          >
            Submit Feedback
          </button>
        </form>

        {/* Feedback Cards */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Recent Feedback
          </h3>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">{feedback.name}</p>
                {/* Shipment ID is now hidden */}
              </div>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= feedback.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{feedback.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
