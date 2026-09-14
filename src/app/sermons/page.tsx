
'use client';

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { ImageReveal } from "@/components/ImageReveal"
import { cn } from "@/lib/utils"

const academicPrograms = [
  {
    title: "EARLY YEARS PROGRAM",
    description: "Our Early Years program (Ages 3-5) focuses on play-based learning and social development in a safe, nurturing environment, building a strong foundation for future success.",
    image: "/images/484688063_1181339383785349_6300749383438108902_n.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "LOWER PRIMARY",
    description: "In Lower Primary (Ages 6-8), we focus on core subjects like literacy and numeracy, fostering curiosity and critical thinking through interactive lessons and collaborative projects.",
    image: "/images/486353896_1187679929817961_4724554373967953301_n.jpg",
    bgColor: "bg-[#6A040F]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#6A040F]"
  },
  {
    title: "UPPER PRIMARY",
    description: "Our Upper Primary curriculum (Ages 9-12) challenges students with advanced topics, promoting leadership, independent research, and preparation for secondary education.",
    image: "/images/486460421_1187679879817966_8937100076930363422_n.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "ARTS & MUSIC",
    description: "The Arts & Music program encourages creative expression through visual arts, drama, and music, allowing students to discover and develop their unique artistic talents.",
    image: "/images/486466805_1187679933151294_7895560268502234535_n.jpg",
    bgColor: "bg-[#6A040F]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#6A040F]"
  },
  {
    title: "ATHLETICS",
    description: "Our athletics program promotes physical fitness, teamwork, and sportsmanship. We offer a variety of sports to encourage a healthy and active lifestyle.",
    image: "/images/486505257_1187679883151299_6568489799441534202_n.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "TECHNOLOGY & CODING",
    description: "We equip students for the digital age with programs in coding, robotics, and digital literacy, fostering problem-solving skills and innovation.",
    image: "/images/486546213_1187673866485234_8327242758086334742_n.jpg",
    bgColor: "bg-[#6A040F]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#6A040F]"
  },
]

export default function AcademicsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.4]"
            style={{
              backgroundImage: `url(/images/images.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <KineticHeadline 
              lines={["ACADEMICS"]} 
              className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800]"
              staggerDelay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 2. Z-Pattern Content Rows */}
      {academicPrograms.map((prog, i) => (
        <section key={i} className="relative w-full">
          <div className={cn(
            "flex flex-col lg:flex-row min-h-[600px]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            {/* Image Block */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
              <ImageReveal 
                src={prog.image} 
                alt={prog.title} 
                className="w-full h-full transition-all duration-1000"
                maskColor={prog.bgColor === "bg-[#3E3E4E]" ? "bg-[#3E3E4E]" : "bg-[#6A040F]"}
              />
            </div>

            {/* Text Block */}
            <div className={cn(
              "w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24",
              prog.bgColor,
              prog.textColor
            )}>
              <div className="max-w-md space-y-8">
                <KineticHeadline 
                  lines={[prog.title]} 
                  className="text-3xl md:text-5xl font-bold font-serif text-[#FFB800]"
                />
                <InkFlowText delay={0.8} className="text-lg md:text-xl font-body leading-relaxed opacity-90">
                  {prog.description}
                </InkFlowText>
                <div className="pt-4">
                  <MagneticButton>
                    <Button className={cn("h-14 px-10 rounded-full font-black text-lg group", prog.btnClass)}>
                      LEARN MORE <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Footer CTA Section */}
      <section className="py-32 bg-[#6A040F] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["SCHEDULE A TOUR"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-12"
          />
          <MagneticButton>
            <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#6A040F] font-black h-20 px-12 rounded-full text-2xl group transition-all duration-500">
              CONTACT ADMISSIONS <ArrowRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
