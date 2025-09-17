'use client';
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  return (
    <section
      id="contacts"
      className={`min-h-screen bg-gradient-to-r from-white via-blue-50 to-blue-100 py-20 px-6 md:px-16 lg:px-32
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Contact Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          With strategic hubs in <span className="font-semibold text-blue-900">Australia, South Africa, and Zimbabwe</span>, Impact Plus brings international reach and local depth to every engagement.
        </p>
      </div>

      {/* Branches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {branches.map((b, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-500
              transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{b.country}</h2>
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
          {/* Company Logo */}
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

      {/* Closing Quote */}
      <div className="text-center">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg blur opacity-30" />
          <div className="relative bg-white rounded-lg p-8 border border-blue-100 shadow-md">
            <p className="text-xl md:text-2xl font-medium text-blue-700 italic">
              “Transformative Consulting. Real Results.”
            </p>
            <p className="mt-4 text-gray-600">
              Globally benchmarked, locally grounded solutions • Cross-sector expertise • Trusted delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

