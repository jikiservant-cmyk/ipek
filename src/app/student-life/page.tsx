'use client';

import React from "react";
import { Play, ArrowRight, Clock, Calendar, Users, BrainCircuit, Palmtree, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { BlurFocusText } from "@/components/BlurFocusText";
import { ImageReveal } from "@/components/ImageReveal";

const activities = [
  {
    icon: BrainCircuit,
    title: "Debate Club",
    description: "Sharpen your public speaking and critical thinking skills in a lively, supportive environment. Tackle interesting topics and learn the art of persuasion.",
    category: "Academic",
    image: "/images/500844448_1240279234558030_4427405816133751754_n.jpg"
  },
  {
    icon: Users,
    title: "Student Council",
    description: "Develop leadership skills and make a real impact on school life. Represent your peers and help organize events and initiatives.",
    category: "Leadership",
    image: "/images/536273638_1310557530863533_3505997153391998666_n.jpg"
  },
  {
    icon: Mic,
    title: "School Choir & Band",
    description: "Join our talented musical groups to perform at school events and competitions. A perfect place for students passionate about voice or instruments.",
    category: "Arts",
    image: "/images/540376961_1310557400863546_3654499630922540646_n.jpg"
  },
  {
    icon: Palmtree,
    title: "Environmental Club",
    description: "Passionate about protecting our planet? Join us for projects on recycling, conservation, and promoting sustainability within our school community.",
    category: "Community",
    image: "/images/559452582_1348782660374353_1719964045368134275_n.jpg"
  }
];

export default function StudentLifePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1A1A1A] pb-16">
      {/* 1. Featured Program Hero */}
      <section className="relative w-full lg:h-[85vh] flex flex-col lg:flex-row border-b border-white/5">
        {/* Left: Cover Art */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-12 md:p-24 bg-[#141414]">
          <BlurFocusText className="relative aspect-square w-full max-w-md">
             <div className="absolute inset-0 bg-[#FFB800]/20 blur-3xl rounded-full scale-110 opacity-30 animate-pulse" />
             <ImageReveal 
              src="/images/560020689_1348782107041075_5027888620366757027_n.jpg" 
              alt="Featured Program Cover" 
              className="w-full h-full shadow-2xl rounded-sm"
            />
          </BlurFocusText>
        </div>

        {/* Right: Content Block */}
        <div className="w-full lg:w-1/2 bg-[#6A040F] flex flex-col justify-center p-12 md:p-24 text-white">
          <div className="space-y-4 mb-8">
            <span className="text-[#FFB800] font-headline font-bold text-sm tracking-[0.4em] block uppercase">
              Featured Program
            </span>
             <KineticHeadline 
              lines={["ROBOTICS", "CLUB"]} 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase font-headline leading-[0.85] mb-12"
            />
          </div>

          <InkFlowText className="text-white/80 text-lg md:text-xl font-body leading-relaxed max-w-md mb-12">
            Dive into the world of engineering and programming. Our Robotics Club competes in national competitions, building and programming robots from scratch.
          </InkFlowText>

          <div className="flex items-center space-x-8">
            <MagneticButton strength={30}>
              <Button className="bg-[#FFB800] text-[#6A040F] h-20 px-10 rounded-full flex items-center justify-center shadow-lg group hover:scale-110 transition-all font-black text-xl">
                LEARN MORE <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. Activities List */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-16">
            <KineticHeadline 
              lines={["EXTRACURRICULAR", "ACTIVITIES"]} 
              className="text-white text-4xl md:text-6xl font-black font-headline mb-4"
            />
            <div className="h-1 w-24 bg-[#FFB800]" />
          </div>

          <div className="space-y-0">
            {activities.map((act, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row items-center py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-xl"
              >
                {/* Icon */}
                <div className="w-24 h-24 shrink-0 mb-6 md:mb-0 md:mr-12 flex items-center justify-center bg-white/5 rounded-full border-2 border-white/10 group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800] transition-all">
                  <act.icon className="h-10 w-10 text-[#FFB800] group-hover:scale-110 transition-transform" />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-3 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-1">
                    <span className="text-[#FFB800] font-bold text-sm tracking-widest uppercase">{act.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-headline group-hover:text-[#FFB800] transition-colors">
                    {act.title}
                  </h3>
                  <InkFlowText className="text-white/60 font-body text-sm md:text-base max-w-2xl">
                    {act.description}
                  </InkFlowText>
                </div>

                {/* Button */}
                <div className="mt-8 md:mt-0 md:ml-12 flex flex-col items-center">
                  <MagneticButton>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-[#FFB800] hover:text-[#6A040F] hover:border-[#FFB800] font-black rounded-full px-8 group">
                      JOIN <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
