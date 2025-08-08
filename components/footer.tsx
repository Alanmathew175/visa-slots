"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Visaslots", href: "/visaslots" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Contact us", href: "/contact" },
        { label: "For Visa Agencies", href: "/agencies" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms and Conditions", href: "/terms" },
        { label: "Cookie Settings", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/visaslots",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/visaslots",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://twitter.com/visaslots", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#034833] text-white mt-24">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10">
          {/* Logo & Description */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/LOGO.png"
                alt="Visaslots"
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">Visaslots</span>
            </div>
            <p className="text-[#D8EAD7] text-sm leading-relaxed max-w-xs">
              Travelo is Southeast Asia’s travel and lifestyle app, we provide
              you with access to discover and purchase different type of travel
              needs.
            </p>
          </div>
          <div className="lg:flex justify-around lg:col-span-2">
            {/* Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold text-base mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-[#D8EAD7] hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0E6C4F]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0E6C4F] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-[#D8EAD7] text-sm mt-4 sm:mt-0">
            © 2025 Visaslots
          </div>
        </div>
      </div>
    </footer>
  );
}
