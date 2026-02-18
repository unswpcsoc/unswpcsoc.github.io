'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gray-500 rounded-lg p-2">
              <img
                src="/img/pcsoc_web.svg"
                alt="UNSW PCSoc"
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide text-sm"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide text-sm"
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide text-sm"
            >
              Events
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide text-sm"
            >
              Team
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide"
              >
                About
              </Link>
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide"
              >
                Events
              </Link>
              <Link
                href="/team"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide"
              >
                Team
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide"
              >
                Gallery
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium uppercase tracking-wide"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
