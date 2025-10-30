'use client';

import React, { useEffect, useRef } from "react";
import { LinkedinIcon, MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";

const Page2 = () => {
  const welcomeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    const timers: number[] = [];

    const startTyping = () => {
      if (!welcomeRef.current || !isMounted) return;

      const textLines = [
        {
          text: [
            ...'WELCOME TO'.split('').map(c => ({
              char: c, color: '#ffffff', font: '"Poppins", sans-serif', weight: '700'
            }))
          ],
        },
        {
          text: [
            ...'IMPACT '.split('').map(c => ({
              char: c, color: '#1e7dba', font: '"Voltaire Frangela", serif', weight: '800'
            })),
            ...'PLUS'.split('').map(c => ({
              char: c, color: '#293c83', font: 'Georgia, serif', weight: '700'
            }))
          ],
        },
      ];

      welcomeRef.current.innerHTML = '';
      let lineIndex = 0, charIndex = 0;

      const typeChar = () => {
        if (!welcomeRef.current || !isMounted) return;

        if (lineIndex < textLines.length) {
          const line = textLines[lineIndex];
          if (charIndex < line.text.length) {
            const span = document.createElement('span');
            const charData = line.text[charIndex];
            span.textContent = charData.char === ' ' ? '\u00A0' : charData.char;
            span.style.fontFamily = charData.font;
            span.style.fontWeight = charData.weight;
            span.style.color = charData.color;
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(10px)';
            span.style.opacity = '0';
            span.style.transition = 'all 0.3s ease';
            welcomeRef.current.appendChild(span);

            const t1 = window.setTimeout(() => {
              span.style.transform = 'translateY(0)';
              span.style.opacity = '1';
            }, 50);
            timers.push(t1);

            charIndex++;
            const t2 = window.setTimeout(typeChar, 100);
            timers.push(t2);
          } else {
            const br = document.createElement('br');
            welcomeRef.current.appendChild(br);
            lineIndex++;
            charIndex = 0;
            const t3 = window.setTimeout(typeChar, 150);
            timers.push(t3);
          }
        }
      };
      typeChar();
    };

    const timer = window.setTimeout(startTyping, 300);
    timers.push(timer);
    return () => {
      isMounted = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-24">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/159678-819389843.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-6 md:px-16 max-w-4xl space-y-6">
        <div
           ref={welcomeRef}
           className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-xl leading-tight tracking-wide text-center"
        />


        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Strategic Performance Consulting. Purpose-Driven Innovation. Smarter Products.
        </p>
        <p className="text-md md:text-lg text-gray-300">
          At Impact Plus, we help organisations worldwide achieve safer, smarter, and more sustainable outcomes.
          We design and deliver integrated systems and products that drive continuous improvement,
          strengthen compliance, and accelerate success.
        </p>

        <Link
          href="/about"
          className="inline-block mt-6 px-8 py-3 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          → Learn More About Us
        </Link>

        <div className="flex justify-center gap-5 pt-6">
          <a href="https://www.linkedin.com/company/impact-plus-pty-ltd/" target="_blank" rel="noopener noreferrer" className="p-3 border border-blue-700 rounded-full bg-white/10 hover:bg-blue-700/40 hover:scale-110 transition-all">
            <LinkedinIcon className="w-6 h-6 text-blue-300" />
          </a>
          <a href="mailto:info@impactplusgroup.com" className="p-3 border border-blue-700 rounded-full bg-white/10 hover:bg-blue-700/40 hover:scale-110 transition-all">
            <MailIcon className="w-6 h-6 text-gray-200" />
          </a>
          <a href="tel:+61419775400" className="p-3 border border-blue-700 rounded-full bg-white/10 hover:bg-blue-700/40 hover:scale-110 transition-all">
            <PhoneIcon className="w-6 h-6 text-green-300" />
          </a>
          <a href="https://impactplusgroup.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-blue-700 rounded-full bg-white/10 hover:bg-blue-700/40 hover:scale-110 transition-all">
            <GlobeIcon className="w-6 h-6 text-purple-300" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Page2;
