'use client';
import React, { useEffect, useState } from 'react';
import { Quote, Award, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Shaun Petersen",
      role: "Gladstone Area Manager, UGL Fuels & Energy Group",
      quote: `I had the privilege of working with Dr. Posani Maveza over several years in Gladstone, before his transition into consulting. Now, leading Impact Plus, he applies the same exceptional technical expertise, strategic thinking, and culture-shaping leadership that delivered operational reform, improved quality, safety, and delivery performance in our organisation.`,
      image: "/shaun.jpg",
    },
    {
      name: "Earnest Banhwa",
      role: "Principal Surveyor, Precise Positioning Solutions",
      quote: `I have engaged Impact Plus on consultancy survey projects where accuracy, complexity, and client relationships are paramount. Their work is consistently of the highest standard, combining exceptional technical skill with a personable, professional approach.`,
      image: "/earnest.jpg",
    },
  ];

  return (
    <main className="bg-white font-[Montserrat,sans-serif]">
      <section
        id="testimonials"
        className={`min-h-screen py-20 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-white via-blue-50 to-[#e6ecff] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-[#293c83] mx-auto mb-4" />
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Georgia, serif', color: '#293c83' }}
          >
            Client Testimonials
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            What our partners and clients say about{" "}
            <span className="font-semibold text-[#293c83]">Impact Plus</span>.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-8 border border-[#d7dbf5] shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="text-gray-700 leading-relaxed italic mb-6">“{t.quote}”</p>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#cfd4f5] shadow-sm">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#293c83] font-semibold">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <Award className="w-12 h-12 text-[#293c83] mx-auto mb-4" />
          <h2
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: 'Georgia, serif', color: '#293c83' }}
          >
            Our Certifications
          </h2>
          <p className="text-gray-600 mb-8">
            Globally benchmarked, locally grounded, and internationally certified.
          </p>

          {/* Certificate Preview */}
          <div className="flex justify-center">
            <motion.div
              layoutId="cert-preview"
              className="relative w-72 h-52 border-2 border-[#cfd4f5] rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer transition-transform duration-500 hover:scale-105"
              onClick={() => setPreviewOpen(true)}
            >
              <Image
                src="/Certificates/Certification.jpg"
                alt="Certificate"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>

          {/* Half-screen Popup */}
          <AnimatePresence>
            {previewOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPreviewOpen(false)}
              >
                <motion.div
                  layoutId="cert-preview"
                  className="relative w-1/2 h-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden"
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.7 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setPreviewOpen(false)}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-500 z-10"
                  >
                    <X size={28} />
                  </button>
                  <Image
                    src="/Certificates/Certification.jpg"
                    alt="Certificate Preview"
                    fill
                    className="object-contain p-4"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Closing Quote */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Our clients’ trust is built on results, collaboration, and long-term impact — we believe shared experiences inspire shared success.
          </p>
          <div className="flex flex-col items-center">
            <Quote className="w-10 h-10 text-[#293c83] mb-3" />
            <p className="text-md text-gray-500 italic">
              “Knowledge shared is power multiplied.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
