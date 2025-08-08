"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rocket, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [goingTo, setGoingTo] = useState("");
  const [visaType, setVisaType] = useState("");
  const [application, setApplication] = useState("");
  const [applicationCity, setApplicationCity] = useState("");

  return (
    <section className="relative bg-[#FAF8ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1  space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFE4D2] text-[#E65525] px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered • Instant Results</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl  font-bold text-[#0B3D2E] leading-tight">
                Book a Schengen Visa
                <br />
                Appointment in <span className="text-[#F15A29]">1 week</span>
              </h1>
              <p className=" text-sm lg:text-lg text-gray-600 max-w-lg">
                Your Trusted Visa Bot for Instant Notifications and
                Auto-Booking.
              </p>
            </div>

            {/* Form */}
            <div className="rounded-2xl  lg:p-6  space-y-4">
              <div className="flex gap-4 w-full">
                <Select value={goingTo} onValueChange={setGoingTo}>
                  <SelectTrigger className="h-12 rounded-full bg-white px-6 py-8 border-none shadow-none w-2/3">
                    <SelectValue placeholder="Going to" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="netherlands">Netherlands</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="italy">Italy</SelectItem>
                    <SelectItem value="spain">Spain</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={visaType} onValueChange={setVisaType}>
                  <SelectTrigger className="h-12 rounded-full bg-white px-6 py-8 border-none shadow-none w-1/3">
                    <SelectValue placeholder="Visa type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tourism">Tourism</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="family">Family Visit</SelectItem>
                    <SelectItem value="study">Study</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select value={application} onValueChange={setApplication}>
                  <SelectTrigger className="h-12 rounded-full bg-white px-6 py-8 border-none shadow-none w-full">
                    <SelectValue placeholder="Select an application" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Application</SelectItem>
                    <SelectItem value="renewal">Renewal</SelectItem>
                    <SelectItem value="extension">Extension</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={applicationCity}
                  onValueChange={setApplicationCity}
                >
                  <SelectTrigger className="h-12 rounded-full bg-white px-6 py-8 border-none shadow-none w-full">
                    <SelectValue placeholder="Select application city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="manchester">Manchester</SelectItem>
                    <SelectItem value="birmingham">Birmingham</SelectItem>
                    <SelectItem value="edinburgh">Edinburgh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full h-12 bg-[#F66F4D] hover:bg-[#e14f20] text-white rounded-full text-lg font-semibold  px-6 py-8">
                Find Appointments
              </Button>
            </div>
          </div>

          {/* Right Content - Desktop */}
          <div className="order-1 lg:order-2 relative p-3 lg:p-0 ">
            <div className="relative">
              {/* Main couple image */}
              <div className="relative w-full h-[500px] rounded-3xl ">
                <Image
                  src="/images/img_image.png"
                  alt="Happy couple planning their trip"
                  fill
                  className="object-scale-down"
                />
              </div>

              {/* Floating notification */}
              <Card className="hidden absolute bottom-14 left-10 p-4 bg-white shadow-none max-w-[16rem] border-none">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#F15A29] rounded-full flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-600">
                      London - Netherlands - Tourism:
                      <br />
                      Earliest Available Slot: 01-09-2023.
                      <br />
                      Link to visa center site
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="absolute bottom-24 md:bottom-18 -left-3 md:left-4 p-4 bg-white shadow-sm  !min-w-[17rem] md:min-w-[19rem] border-none rounded-2xl">
                <div className="flex items-start gap-1 md:gap-2 relative ">
                  <div className="flex flex-col relative mr-2">
                    <Image
                      src="/images/img_union.svg"
                      alt="Visaslots logo"
                      width={32}
                      height={32}
                      className="w-7 h-7 lg:w-8 lg:h-8 "
                      priority
                    />
                    <Image
                      src="/telegram.png"
                      alt="Telegram logo"
                      width={18}
                      height={18}
                      className="w-4 h-4 mt-1 absolute -bottom-1 right-0"
                      priority
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs md:text-sm text-[#034833]">
                        Visaslots
                      </span>
                      <Image
                        src="/images/img_material_symbol.svg"
                        alt="Verified"
                        width={16}
                        height={16}
                        className="w-3 h-3"
                        priority
                      />
                    </div>
                    <p className="text-[11px] md:text-xs text-[#034833] ">
                      London - Netherlands - Tourism:
                      <br />
                      Earliest Available Slot: 01-09-2023.
                      <br />
                      Link to visa center site
                    </p>
                  </div>

                  <span className="text-xs text-gray-500 absolute right-0 ">
                    Now
                  </span>
                </div>
              </Card>

              {/* VISA badge */}
              <Card className="absolute bottom-4 md:bottom-0 right-5 md:right-8 p-2 lg:p-4  bg-white shadow-lg">
                <div className="flex items-center gap-3">
                  {/* <div className="text-blue-500 font-bold text-2xl">VISA</div> */}
                  <Image
                    src="/images/img_logos_visa.svg"
                    alt="Happy couple planning their trip"
                    width={55}
                    height={40}
                    className="w-10 h-10 md:w-14 md:h-14"
                  />

                  <div>
                    <div className="text-[#2AABEE] font-bold text-xl lg:text-2xl">
                      5000+
                    </div>
                    <p className="text-gray-600 text-[10px] md:text-xs mt-[-6px]">
                      Approvals
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
