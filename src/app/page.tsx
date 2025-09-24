'use client';
import React from "react";
 
import Page2 from "./Components/page2";

export default function HomePage() {
  return (
    <main className="w-full h-full overflow-x-hidden">
      {/* First Section */}
      <section className="min-h-screen flex items-center justify-center">
        <Page2 />
      </section>

       
    </main>
  );
}
