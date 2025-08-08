"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function AppointmentSection() {
  const stats = [
    { number: "1,500+", label: "Routes", color: "bg-white" },
    { number: "50+", label: "Cities", color: "bg-white" },
    { number: "50+", label: "Premium Airlines", color: "bg-white" },
    { number: "12k+", label: "Happy Customer", color: "bg-white" },
  ];

  return (
    <section
      className="bg-global-1 bg-cover bg-center  py-16 lg:py-24 relative overflow-hidden bg-[#034833]"
      style={{ backgroundImage: "url('/images/img_backgroundk.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Phone Mockup */}

          <div className="lg:col-span-5">
            <Image
              src="/Mockup.png"
              alt="phone mockup"
              className="w-full h-full"
              width={400}
              height={600}
              priority
            />
          </div>
          {/* Right Content - Text and Stats */}
          <div className="text-white space-y-8 lg:col-span-7">
            <div className="space-y-5">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Get your appointment
              </h2>
              <p className=" lg:text-xl text-green-100 leading-relaxed max-w-[40rem]">
                Get instant email or push notifications when new appointments
                open up or get a slot auto - booked for you
              </p>
              <Button className="bg-[#F66F4D]  hover:bg-[#e0683f] text-white pl-6 pr-2 py-2 h-11 rounded-full font-sen font-semibold text-sm uppercase flex items-center ">
                <Link href="" className="flex gap-3 items-center">
                  Try Visabot
                  <span className="flex items-center justify-center h-7 w-7 lg:w-8 lg:h-8 border border-white rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-[#FAF8ED] backdrop-blur border-0 rounded-3xl"
                >
                  <CardContent className="lg:p-6 text-center">
                    <div className="text-3xl font-bold text-[#034833] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
