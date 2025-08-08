"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  Bandage,
  Bell,
  Calendar,
  Clock,
  Moon,
  Smile,
  Star,
  UserPlus,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Content - Testimonials */}
          <div className="lg:col-span-5 lg:space-y-8 flex flex-col justify-between lg:pr-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#034833] mb-6">
                Our Services
              </h2>
              <p className="text-[#034833] leading-relaxed text-sm ">
                "It is really hard to find a slot on VFS global. With VisaBot I
                have found the slot in 2 days. Thank you so much for such a good
                job!!!"
              </p>
            </div>

            {/* Trustpilot Review */}
            <div className="hidden lg:block  p-6">
              <div className="  gap-4">
                <Image
                  src="/icon.png"
                  alt="Visaslots logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  priority
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-[#034833]">
                      Best on the market
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="bg-[#219653] ">
                        <Star className="w-3 h-3 fill-white text-white m-1" />
                      </div>
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      2 days ago
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    It is really hard to find a slot on VFS global. With VisaBot
                    I have found the slot in 2 days. Thank you so much for such
                    a good job
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Christy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {/* Notifications Card */}
            <Card className=" border-[#034833] rounded-3xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">
                      Notifications
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#034833]">
                        $99
                      </span>
                      <span className="text-gray-500">/monthly</span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Best for families and travelers on a budget
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#CADED8] rounded-full flex items-center justify-center flex-shrink-0">
                        <Bandage
                          className="w-4 h-4 text-[#CADED8]"
                          fill="#034833"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        3-4 times cheaper than Schengen Visa agencies
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#CADED8] rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar
                          className="w-4 h-4 text-[#CADED8]"
                          fill="#034833"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        You can book an appointment on the next week
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#CADED8] rounded-full flex items-center justify-center flex-shrink-0">
                        <Users
                          className="w-4 h-4 text-green-600"
                          fill="#034833"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        1 subscription for all travellers
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#CADED8] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock
                          className="w-4 h-4 text-[#CADED8]"
                          fill="#034833"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        1 week - average time for booking an appointment
                      </p>
                    </div>
                  </div>

                  <Button className="flex items-center justify-between w-full bg-[#F46A44] hover:bg-[#e45f3c] text-white rounded-full h-14 text-center font-semibold pl-6 pr-2">
                    <p className="text-center mx-auto"> TRY AUTO BOOKING</p>
                    <span className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Auto Booking Card */}
            <Card className="border-[#034833] rounded-3xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">
                      Auto Booking
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-orange-500">
                        $100
                      </span>
                      <span className="text-gray-500">/per applicant</span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Best for families and travelers on a budget
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bell
                          className="w-4 h-4 text-orange-500"
                          fill="#FF9000"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        Suitable if you can't respond right away to
                        notifications
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Moon
                          className="w-4 h-4 text-orange-500"
                          fill="#FF9000"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        We book a slot for you, even when you sleep
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Smile className="w-4 h-4 text-white" fill="#FF9000" />
                      </div>
                      <p className="text-sm text-gray-700">
                        You won't have to think about booking, we'll do
                        everything for you
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserPlus
                          className="w-4 h-4 text-orange-500"
                          fill="#FF9000"
                        />
                      </div>
                      <p className="text-sm text-gray-700">
                        Can Book a slot even for the next day
                      </p>
                    </div>
                  </div>

                  <Button className="flex items-center justify-between w-full bg-[#F46A44] hover:bg-[#e45f3c] text-white rounded-full h-14 text-center font-semibold pl-6 pr-2">
                    <p className="text-center text-lg mx-auto">
                      {" "}
                      TRY AUTO BOOKING
                    </p>
                    <span className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className=" lg:hidden  px-6 py-4">
            <div className="  gap-4">
              <Image
                src="/icon.png"
                alt="Visaslots logo"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-[#034833]">
                    Best on the market
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-3 text-[#034833] ">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#219653] ">
                      <Star className="w-3 h-3 fill-white text-white m-1" />
                    </div>
                  ))}
                  <span className="text-sm  ml-2">2 days ago</span>
                </div>
                <p className=" text-sm mb-2 leading-relaxed">
                  It is really hard to find a slot on VFS global. With VisaBot I
                  have found the slot in 2 days. Thank you so much for such a
                  good job
                </p>
                <p className="font-semibold text-sm">Christy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
