'use client';

import { KineticHeadline } from "@/components/KineticHeadline";
import { ImageReveal } from "@/components/ImageReveal";
import { InkFlowText } from "@/components/InkFlowText";
import { Camera } from "lucide-react";

const galleryImages = [
    { src: "/images/484688063_1181339383785349_6300749383438108902_n.jpg", alt: "Students in assembly", title: "Morning Assembly", width: 500, height: 700 },
    { src: "/images/486353896_1187679929817961_4724554373967953301_n.jpg", alt: "Parent-teacher meeting", title: "Parent-Teacher Conference", width: 600, height: 400 },
    { src: "/images/486460421_1187679879817966_8937100076930363422_n.jpg", alt: "Students in the library", title: "A Love for Reading", width: 500, height: 500 },
    { src: "/images/486466805_1187679933151294_7895560268502234535_n.jpg", alt: "Students on sports day", title: "Annual Sports Day", width: 600, height: 800 },
    { src: "/images/486505257_1187679883151299_6568489799441534202_n.jpg", alt: "Student art exhibition", title: "Creative Expressions", width: 700, height: 500 },
    { src: "/images/559452582_1348782660374353_1719964045368134275_n.jpg", alt: "School building exterior", title: "Our Campus", width: 500, height: 400 },
    { src: "/images/560020689_1348782107041075_5027888620366757027_n.jpg", alt: "Students in a classroom", title: "Engaged Learning", width: 600, height: 400 },
    { src: "/images/586171317_1380437347208884_1992856856938756084_n.jpg", alt: "Portrait of Head of School", title: "Leadership", width: 500, height: 750 },
    { src: "/images/595073746_1394167455835873_8744553215477993611_n.jpg", alt: "Director of Admissions", title: "Welcoming Faces", width: 500, height: 650 },
    { src: "/images/595114440_1394167532502532_5661739246197434066_n.jpg", alt: "Head of Arts & Music", title: "Nurturing Talent", width: 500, height: 500 },
    { src: "/images/608902824_1415677727018179_2868253638662345757_n.jpg", alt: "Students during a lesson", title: "In the Classroom", width: 700, height: 500 },
    { src: "/images/612005087_1418673150051970_3731473655120438810_n.jpg", alt: "Young students learning", title: "Early Years", width: 600, height: 400 },
    { src: "/images/612502260_1418673063385312_5608933433895877060_n.jpg", alt: "Students collaborating", title: "Teamwork", width: 500, height: 600 },
    { src: "/images/613176575_1418673436718608_3409238698708772371_n.jpg", alt: "Athletics day", title: "Go for Gold", width: 600, height: 400 },
    { src: "/images/621786925_1433194978599787_4334043272897827589_n.jpg", alt: "Students with technology", title: "Future Ready", width: 500, height: 400 },
    { src: "/images/images.jpg", alt: "School event", title: "Community Spirit", width: 700, height: 500 },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F8F8F8]">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-[#6A040F]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.3]"
            style={{
              backgroundImage: `url(/images/536273638_1310557530863533_3505997153391998666_n.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["OUR", "GALLERY"]} 
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20 space-y-6">
                <div className="flex justify-center items-center gap-4">
                  <Camera className="h-10 w-10 text-[#FFB800]" />
                  <KineticHeadline 
                  lines={["MOMENTS IN TIME"]} 
                  className="text-4xl md:text-5xl font-black text-[#2D2B44] uppercase font-headline"
                  />
                </div>
                <InkFlowText className="text-muted-foreground text-xl font-body max-w-2xl mx-auto leading-relaxed">
                  A glimpse into the vibrant life at Skyways Junior School, capturing the memories we make.
                </InkFlowText>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8">
                {galleryImages.map((image, index) => (
                <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer">
                    <ImageReveal 
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <h3 className="text-xl font-bold font-headline drop-shadow-md">{image.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
