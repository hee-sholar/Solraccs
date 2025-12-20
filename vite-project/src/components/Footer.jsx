'use client';

import { Twitter, MessageCircle } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo and Disclaimer */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/solraccs.jpg"
              alt="Solraccs Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Disclaimer */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-sm text-gray-400 leading-relaxed">
              Solraccs is an experimental Web3 project. Features are in beta and subject to change. This is not financial advice. Only interact with what you understand.
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/Solraccs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>

          <a
            href="https://t.me/Solraccs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </a>

          <a
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
          >
            <FaDiscord className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Solraccs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
