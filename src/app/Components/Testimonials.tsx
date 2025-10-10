'use client';
import React, { useEffect, useState } from 'react';
import { Quote, Award, X } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Shaun Petersen",
      role: "Gladstone Area Manager, UGL Fuels & Energy Group",
      quote: `I had the privilege of working with Dr. Posani Maveza
 over several years in Gladstone, before his transition
 into consulting. 
Now, leading Impact Plus, he applies the same
 exceptional technical expertise, strategic thinking,
 and culture-shaping leadership that delivered
 operational reform, improved quality, safety, and
 delivery performance in our organisation. 
He engages effectively with stakeholders at all levels,
 fostering collaboration and solutions-focused
 outcomes. I have no hesitation in recommending
 Impact Plus to organisations seeking meaningful,
 sustainable improvement.`,
      image: "/shaun.jpg",
    },
    {
      name: "Earnest Banhwa",
      role: "Principal Surveyor, Precise Positioning Solutions",
      quote: `I have engaged Impact Plus on consultancy survey
 projects where accuracy, complexity, and client
 relationships are paramount. 
Their work is consistently of the highest standard,
 with clients often remarking that surveys are
 executed to perfection. 
Combining exceptional technical skill with a
 personable, professional approach, Impact Plus
 connects equally well with site teams,
 management, and labourers — making complex
 tasks straightforward. They remain my first choice
 for projects requiring precision, complexity
 management, and absolute client confidence.`,
      image: "/earnest.jpg",
    },
  ];

   
  return (
    <section
      id="insights"
      className={`min-h-screen bg-gradient-to-r from-white via-blue-50 to-blue-100 py-20 px-6 md:px-16 lg:px-32
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Client Testimonials
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          What our partners and clients say about <span className="font-semibold text-blue-900">Impact Plus</span>.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-500
              transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <p className="text-gray-700 leading-relaxed italic mb-6">
              “{t.quote}”
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-blue-200">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-blue-800 font-semibold">{t.name}</p>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate / Award Section */}
      <div className="mt-20 text-center">
        <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-blue-700">Our Certifications</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Globally benchmarked, locally grounded, and internationally certified.  
        </p>

        <div className="flex justify-center">
          <div
            className="relative w-72 h-52 border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/Certificates/Certification.jpg"
              alt="Certificate or Award"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
 

      {/* Quotes Highlight */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Our clients’ trust is built on results, collaboration, and long-term impact — we believe shared experiences inspire shared success.
        </p>
        <div className="flex flex-col items-center">
          <Quote className="w-10 h-10 text-blue-600 mb-4" />
          <p className="text-md text-gray-500 italic">
            “Knowledge shared is power multiplied.”
          </p>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-6 right-6 text-white z-50"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center">
            <Image
              src="/Certificates/Certification.jpg"
              alt="Certificate Full View"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
