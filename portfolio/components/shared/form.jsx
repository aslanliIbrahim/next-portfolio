"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    detail: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMessage("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", detail: "" }); // Clear form after success
      } else {
        setResponseMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("❌ Error sending message. Please check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-16" id="form">
      <div className="bg-[#F9F9F9] p-8 max-w-4xl mx-auto rounded shadow-sm">
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-2 leading-7">
            Looking for help with design
          </h3>
          <p className="font-light text-gray-400 leading-7">Send me details</p>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="detail" className="block mb-2 text-gray-700">Detail</label>
          <textarea
            id="detail"
            placeholder="Enter your message"
            rows="4"
            value={formData.detail}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="text-gray-700 underline underline-offset-1 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>

        {responseMessage && (
          <p className="text-center mt-4 text-sm text-gray-600">{responseMessage}</p>
        )}
      </div>
    </form>
  );
}
