import heroStudents from "@/assets/hero-students.jpg";
import trapezoidLogo from "@/assets/trapezoid-blue.png";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* Main Hero Content - Full background image with overlays */}
      <div className="relative flex-1 min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <img
          src={heroStudents}
          alt="Two young people collaborating on a laptop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Top-right blue triangle */}
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-primary z-10"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        {/* White area - extends from top to bottom on left side */}
        <div
          className="absolute inset-0 bg-background z-10"
          style={{
            clipPath: "polygon(0 0, 42% 0, 57% 100%, 0 100%)",
          }}
        />

        {/* Green accent line */}
        <div
          className="absolute inset-0 bg-secondary z-10"
          style={{
            clipPath: "polygon(42% 0, 44% 0, 57% 100%, 55% 100%)",
          }}
        />

        {/* Top-left banner - centered on white area */}
        <div className="absolute top-8 left-0 z-20 w-[50%]">
          <div className="flex justify-center">
            <div className="bg-primary px-6 py-4 md:px-10 md:py-5 max-w-md md:max-w-lg">
              <p className="text-primary-foreground text-xs md:text-sm font-bold tracking-[0.15em] uppercase leading-relaxed">
                <span className="">UNLOCKING THE FUTURE:</span>{" "}
                EMPOWERING YOUNG TALENT FOR THE DIGITAL AGE
              </p>
            </div>
          </div>
        </div>

        {/* Trapezoid logo - positioned so sharp point overlaps the green line */}
<div className="absolute bottom-[28%] left-0 z-20 w-[75%] max-w-[820px]">
  <img
    src={trapezoidLogo}
    alt="Life Choices Academy Logo"
    className="w-full h-auto"
  />
</div>

{/* Welcome text - positioned on white area below the logo */}
<div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 lg:left-16 max-w-xs md:max-w-md z-20">
  <p className="text-foreground text-sm md:text-base leading-relaxed">
    Welcome to Life Choices Academy, we are committed to empowering the youth with the skills, knowledge, and opportunities they need to thrive in the digital era
  </p>
</div>


        {/* Right arrow button */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20">
          <a
            href="#introduction"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground/60 flex items-center justify-center hover:bg-foreground/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-background" />
          </a>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="w-full bg-primary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <a
            href="#introduction"
            className="text-primary-foreground text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 border-r border-primary-foreground/30"
          >
            INTRODUCTION
          </a>
          <a
            href="#coding-academy"
            className="text-primary-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 border-r border-primary-foreground/30 bg-[hsl(222,40%,65%)]"
          >
            <span className="font-bold">OUR YOUTH</span>CODE PROGRAM
          </a>
          <a
            href="#youthforce"
            className="text-primary-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 border-r border-primary-foreground/30"
          >
            <span className="font-bold">YOUTHFORCE</span> PROJECT
          </a>
          <a
            href="#solaryouth"
            className="text-primary-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 bg-[hsl(222,40%,65%)]"
          >
            SOLAR YOUTH PROJECT
          </a>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;
