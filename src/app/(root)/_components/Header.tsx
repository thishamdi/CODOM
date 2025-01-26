"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-10">
      <div
        className="flex items-center lg:justify-between justify-center 
        bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative">
          <div
            className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-3  ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
          >
            <Image
              src="/code-dom-logo.svg"
              alt="Logo"
              width={28}
              height={28}
              className="transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="block text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
            CODOM
          </div>
        </Link>

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-auto flex items-center justify-center w-10 h-10  bg-gray-800/50 hover:bg-gray-700"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-3" >
          <ThemeSelector />
          <LanguageSelector />
          <RunButton />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden my-4 bg-[#0a0a0f]/80 backdrop-blur-xl p-6">
          <div className="flex items-center gap-3 flex-wrap">
            <ThemeSelector />
            <LanguageSelector />
            <RunButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
