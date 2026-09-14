
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
    title: "DAYCARE & BABY CLASS",
    description: "Our Daycare and Baby Class program (Ages 6 months - 2.5 years) provides loving care, sensory discovery, and motor skill development in a safe, hygienic, and supportive setting.",
    image: "/images/612005087_1418673150051970_3731473655120438810_n.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "NURSERY & KINDERGARTEN",
    description: "In our Pre-Primary Kindergarten (Middle & Top Class, Ages 3-5), children develop phonics, early numeracy, social skills, and creative confidence through interactive, guided play.",
    image: "/images/612502260_1418673063385312_5608933433895877060_n.jpg",
    bgColor: "bg-[#6A040F]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#6A040F]"
  },
  {
    title: "LOWER PRIMARY (P1 - P3)",
    description: "Our Lower Primary curriculum establishes strong foundations in reading, writing, mathematics, science, and social studies in a structured and encouraging classroom environment.",
    image: "/images/612813247_1418673233385295_6130852871671298719_n.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "UPPER PRIMARY (P4 - P7)",
    description: "Upper Primary learners are guided through comprehensive syllabus mastery, critical thinking, leadership, and rigorous preparation for national primary school leaving assessments.",
    image: "/images/613165978_1418673280051957_8232470868673263088_n.jpg",
    bgColor: "bg-[#6A040F]",
    textColor: "text-white",
    btnClass: "border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#6A040F]"
  },
  {
    title: "CREATIVE ARTS & MUSIC",
    description: "Every child explores self-expression through music, singing, visual crafts, and drama, nurturing imagination and cultural appreciation.",
    image: "/images/613176575_1418673436718608_3409238698708772371_n.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-white",
    btnClass: "bg-[#FFB800] text-[#3E3E4E] hover:bg-[#FFB800]/90"
  },
  {
    title: "SPORTS & PHYSICAL DEVELOPMENT",
    description: "Active physical play, structured athletics, and teamwork activities ensure healthy motor growth, discipline, and joyful peer collaboration.",
    image: "/images/621786925_1433194978599787_4334043272897827589_n.jpg",
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
              backgroundImage: `url(/images/492060854_1210449664207654_2349882474470258698_n.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <KineticHeadline 
              lines={["ACADEMICS"]} 
              className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800]"
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
