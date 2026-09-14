'use client';

import Image from "next/image"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { BlurFocusText } from "@/components/BlurFocusText"
import { Separator } from "@/components/ui/separator"
import { ImageReveal } from "@/components/ImageReveal"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

const team = [
  {
    name: "Mubiru Florence",
    role: "Head of School",
    bio: "Visionary leader dedicated to fostering academic and personal growth.",
    image: PlaceHolderImages.find(img => img.id === 'pastor-florence')?.imageUrl || "/images/586171317_1380437347208884_1992856856938756084_n.jpg"
  },
  {
    name: "Kembabazi Rose",
    role: "Director of Admissions",
    bio: "Passionate about connecting families with our vibrant school community.",
    image: PlaceHolderImages.find(img => img.id === 'director-rose')?.imageUrl || "/images/595073746_1394167455835873_8744553215477993611_n.jpg"
  },
  {
    name: "Sebalamu Geoffrey",
    role: "Head of Arts & Music",
    bio: "Inspiring creativity and artistic expression in every student.",
    image: PlaceHolderImages.find(img => img.id === 'creative-geoffrey')?.imageUrl || "/images/595114440_1394167532502532_5661739246197434066_n.jpg"
  }
]

export default function AboutPage() {
  const historyImg = PlaceHolderImages.find(img => img.id === 'about-history')?.imageUrl || "/images/595121085_1394167489169203_1099132399639901259_n.jpg";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Parallax) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.4]"
            style={{
              backgroundImage: `url(/images/560020689_1348782107041075_5027888620366757027_n.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <KineticHeadline 
              lines={["OUR", "HISTORY"]} 
              className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800]"
              staggerDelay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section (High Contrast Red) */}
      <section className="py-32 bg-[#6A040F] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <BlurFocusText>
              <h2 className="text-[#FFB800] text-3xl md:text-5xl font-black uppercase font-serif tracking-tight">
                Our Philosophy
              </h2>
            </BlurFocusText>
            
            <div className="space-y-8">
              <InkFlowText delay={0.8} className="text-xl md:text-2xl font-body leading-relaxed text-white/90">
                At Ipek Kindergarten And Daycare, we believe in holistic early child development and strong foundational education. Our focus is on nurturing each child&apos;s natural curiosity, confidence, creativity, and good character in a supportive, secure, and stimulating atmosphere.
              </InkFlowText>
            </div>
            
            <div className="pt-8">
              <div className="h-1 w-20 bg-[#FFB800] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Story Section (White/Charcoal) */}
      <section className="py-24 bg-white text-[#2D2B44]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <KineticHeadline 
                lines={["OUR EDUCATIONAL", "JOURNEY"]} 
                className="text-4xl md:text-6xl font-black uppercase font-headline tracking-tighter text-[#2D2B44]"
              />
              <Separator className="bg-[#2D2B44]/10 w-32 h-[2px]" />
              <InkFlowText className="text-muted-foreground text-lg leading-relaxed font-body">
                Ipek Kindergarten And Daycare is a recognized private pre-primary and primary learning institution situated in Nansana East Ward, Nansana Division, Wakiso District, Uganda. Officially listed in the UBOS educational dissemination portal, we offer baby classes, daycare, nursery, and structured primary education with dedicated teachers and caring staff.
              </InkFlowText>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageReveal 
                src={historyImg} 
                alt="School History" 
                width={800}
                height={600}
                className="w-full h-full transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section (Grid) */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <KineticHeadline 
              lines={["OUR TEAM"]} 
              className="text-4xl font-black uppercase font-headline text-[#2D2B44] mb-4"
            />
            <InkFlowText className="text-muted-foreground max-w-xl mx-auto">
              Meet the dedicated educators and caregivers who make Ipek Kindergarten And Daycare a special and loving place to learn and grow.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col space-y-6 fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                  <ImageReveal 
                    src={member.image} 
                    alt={member.name} 
                    width={400}
                    height={500}
                    className="w-full h-full brightness-95 transition-all duration-700"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">{member.name}</h3>
                  <p className="text-[#FFB800] font-bold uppercase tracking-widest text-xs">{member.role}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-[#2D2B44] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["INTERESTED IN", "JOINING US?"]} 
            className="text-4xl md:text-6xl font-black uppercase font-headline mb-8"
          />
          <MagneticButton>
            <Button className="bg-[#FFB800] text-[#2D2B44] hover:bg-[#FFB800]/90 font-black h-16 px-10 rounded-full text-xl group">
              CAREERS <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
