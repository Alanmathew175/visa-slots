"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "OUR SERVICES", href: "/services" },
    { label: "HOW TO START", href: "/how-to-start" },
    { label: "REVIEWS", href: "/reviews" },
    { label: "DOCUMENTS", href: "/documents" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 lg:my-4 ">
          <div className="flex items-center justify-between bg-white lg:bg-transparent rounded-3xl mt-7 lg:mt-4 w-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 ">
              <div className="flex items-center bg-white h-12 rounded-full px-6 py-2.5 ">
                <Image
                  src="/images/img_union.svg"
                  alt="Visaslots logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  priority
                />
                <span className="ml-2 font-sen text-xl font-bold text-green-800">
                  Visaslots
                </span>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 py-4 bg-white px-7 rounded-full ">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-sen text-xs tracking-widest uppercase font-normal text-[#0B2E13] hover:text-[#165c26] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Desktop CTA Button */}
            <div className="hidden lg:block ">
              <Button
                asChild
                className="bg-[#F66F4D]  hover:bg-[#e0683f] text-white pl-6 pr-2 py-2 h-12 rounded-full font-sen font-semibold text-sm uppercase flex items-center gap-3"
              >
                <Link href="/try-visaslots">
                  Try Visabot
                  <span className="flex items-center justify-center w-7 h-7  border border-white rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </Button>
            </div>
            {/* Mobile Layout */}
            <div className="flex items-center space-x-4 lg:hidden">
              <Button
                className="bg-[#F66F4D] hover:bg-orange-500 text-white px-4 py-2 rounded-full font-medium text-sm uppercase"
                asChild
              >
                <Link href="/try-visaslots"> Try Visabot</Link>
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium text-[#0B2E13] hover:text-[#165c26] transition-colors px-6"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
