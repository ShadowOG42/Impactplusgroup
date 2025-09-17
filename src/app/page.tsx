'use client'; // Make it a client component since it uses Link

import Link from "next/link"; // ✅ Import Link

export default function HomePage() {
  return (
    <main>
      {/* Navigation Bar */}
      <nav className="flex gap-6 p-4 bg-gray-100 shadow-md">
        <Link href="/Home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>

      {/* No page content here; only navbar */}
    </main>
  );
}
