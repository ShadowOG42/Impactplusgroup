"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  useEffect(() => setIsVisible(true), []);

  const branches = [
    {
      country: "Australia",
      address: "Norman Gardens, QLD",
      email: "info@impactplusgroup.com",
      phone: "+61 41 977 5400",
    },
    {
      country: "South Africa",
      address: "Parkrand Extension, Boksburg",
      email: "info@impactplusgroup.com",
      phone: "+27 719092687",
    },
    {
      country: "Zimbabwe",
      address: "Bristol Road, Gweru",
      email: "info@impactplusgroup.com",
      phone: "+263 772 264 3055",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.message
    ) {
      setFormStatus("⚠️ Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("⚠️ Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setFormStatus("⏳ Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setFormStatus("✅ Thank you! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        setFormStatus(
          `❌ Failed to send message: ${data.error || "Unknown error"}`
        );
      }
    } catch (err: unknown) {
      let errorMessage = "❌ Error sending message. Please try again.";
      if (err instanceof Error)
        errorMessage = `❌ Error sending message: ${err.message}`;
      setFormStatus(errorMessage);
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className={`min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 py-20 px-6 md:px-16 lg:px-32 transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${montserrat.className}`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <ShieldCheck className="w-12 h-12 text-[#293c83] mx-auto mb-4" />
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
        >
          Contact Us
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Take the first step in transforming your business safety culture and
          speak with one of our solutions experts today.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg mb-20 border border-gray-100">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {["name", "email", "phone", "country"].map((field, idx) => (
            <div key={idx}>
              <label
                className="block mb-2 font-semibold"
                style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}:*
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:border-[#293c83] focus:ring-2 focus:ring-[#293c83]/30 outline-none py-2 px-3 rounded-md text-gray-900 placeholder-gray-500 transition-all"
                placeholder={`Enter your ${field}`}
                disabled={loading}
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label
              className="block mb-2 font-semibold"
              style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
            >
              Message:*
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 focus:border-[#293c83] focus:ring-2 focus:ring-[#293c83]/30 outline-none p-3 rounded-md text-gray-900 placeholder-gray-500 transition-all"
              placeholder="Type your message here..."
              disabled={loading}
            ></textarea>
          </div>

          <div className="md:col-span-2 relative">
            <button
              type="submit"
              className="w-full bg-[#293c83] hover:bg-blue-900 text-white font-bold py-3 rounded-full transition-all flex justify-center items-center shadow-md"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Sending..." : "SUBMIT"}
            </button>
            {formStatus && (
              <p
                className="mt-4 text-center font-medium"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#293c83" }}
              >
                {formStatus}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Branches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {branches.map((b, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl p-8 border border-[#293c83]/20 shadow-md hover:shadow-xl transition-all duration-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
            >
              {b.country}
            </h2>
            <p
              className="flex items-center text-gray-700 mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <MapPin className="w-5 h-5 text-[#293c83] mr-2" /> {b.address}
            </p>
            <p
              className="flex items-center text-gray-700 mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <Mail className="w-5 h-5 text-[#293c83] mr-2" /> {b.email}
            </p>
            <p
              className="flex items-center text-gray-700"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <Phone className="w-5 h-5 text-[#293c83] mr-2" /> {b.phone}
            </p>
          </div>
        ))}
      </div>

      {/* Logos Section */}
      <div className="text-center mb-20">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
        >
          Our Identity
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="relative w-40 h-20">
            <Image
              src="/Certificates/Logo.jpg"
              alt="Impact Plus Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
