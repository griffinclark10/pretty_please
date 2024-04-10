import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <ul className="text-xs">
              <li className="mb-1"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="/services" className="hover:underline">Services</a></li>
              <li className="mb-1"><a href="/blog" className="hover:underline">Blog</a></li>
              <li className="mb-1"><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Legal</h3>
            <ul className="text-xs">
              <li className="mb-1"><a href="/terms" className="hover:underline">Terms of Use</a></li>
              <li className="mb-1"><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Contact</h3>
            <ul className="text-xs">
              <li className="mb-1">123 Business Rd.</li>
              <li className="mb-1">Business City, BC 54321</li>
              <li className="mb-1">(555) 555-5555</li>
              <li className="mb-1"><a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Subscribe to our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Enter your email" className="px-3 py-2 text-gray-800" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-xs font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-xs">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
