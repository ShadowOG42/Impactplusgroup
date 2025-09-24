'use client';
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

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
    { country: "Australia", address: "Norman Gardens, QLD", email: "info@impactplusgroup.com", phone: "+61 41 977 5400" },
    { country: "South Africa", address: "Parkrand Extension, Boksburg", email: "info@impactplusgroup.com", phone: "+27 719092687" },
    { country: "Zimbabwe", address: "Bristol Road, Gweru", email: "info@impactplusgroup.com", phone: "+263 772 264 3055" },
  ];

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.message) {
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setFormStatus("⏳ Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setFormStatus("✅ Thank you! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", country: "", message: "" });
      } else {
        setFormStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err: unknown) {
      let errorMessage = "❌ Error sending message. Please try again.";
      if (err instanceof Error) errorMessage = `❌ Error sending message: ${err.message}`;
      setFormStatus(errorMessage);
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className={`min-h-screen bg-white py-20 px-6 md:px-16 lg:px-32 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Take the first step in transforming your business safety culture and speak with one of our solutions experts today.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {["name","email","phone","country"].map((field, idx) => (
            <div key={idx}>
              <label className="block text-gray-700 mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}:*
              </label>
              <input
                type={field==="email"?"email":"text"}
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2"
                disabled={loading}
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Message:*</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-400 focus:border-blue-500 outline-none p-3 rounded-lg"
              disabled={loading}
            ></textarea>
          </div>

          <div className="md:col-span-2 relative">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full transition-all flex justify-center items-center"
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
              <p className="mt-4 text-center text-green-600">{formStatus}</p>
            )}
          </div>
        </form>
      </div>

      {/* Branches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {branches.map((b, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              {b.country}
            </h2>
            <p className="flex items-center text-gray-700 mb-2">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" /> {b.address}
            </p>
            <p className="flex items-center text-gray-700 mb-2">
              <Mail className="w-5 h-5 text-blue-600 mr-2" /> {b.email}
            </p>
            <p className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 text-blue-600 mr-2" /> {b.phone}
            </p>
          </div>
        ))}
      </div>

      {/* Logos Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Identity</h2>
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

      {/* Partners Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">Our Partners</h2>

        {/* Global Partners */}
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">
          Global Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
          <div className="relative w-40 h-20 hover:scale-110 transition-transform">
            <Image
              src="/partners/global1.png"
              alt="Global Partner 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-20 hover:scale-110 transition-transform">
            <Image
              src="/partners/global2.png"
              alt="Global Partner 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Potential Partners */}
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">
          Potential Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative w-32 h-16 hover:scale-110 transition-transform"
            >
              <Image
                src={`/partners/potential${i}.png`}
                alt={`Potential Partner ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Closing Quote */}
      <div className="text-center">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg blur opacity-30" />
          <div className="relative bg-white rounded-lg p-8 border border-blue-100 shadow-md">
            <p className="text-xl md:text-2xl font-medium text-blue-700 italic">
              “Transformative Consulting. Real Results.”
            </p>
            <p className="mt-4 text-gray-600">
              Globally benchmarked, locally grounded solutions • Cross-sector
              expertise • Trusted delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
