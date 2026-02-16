import heroStudents from "@/assets/hero-students.jpg";
import trapezoidLogo from "@/assets/trapezoid-blue.png";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* MOBILE LAYOUT (< lg) */}
      <div className="flex flex-col lg:hidden flex-1">
        {/* Image area */}
        <div className="relative w-full h-[45vh] min-h-[280px]">
          <img
            src={heroStudents}
            alt="Two young people collaborating on a laptop"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Top-right blue triangle */}
          <div
            className="absolute top-0 right-0 w-20 h-20 bg-primary z-10"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          />
          {/* Right arrow button */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <a
              href="#introduction"
              className="w-10 h-10 rounded-full bg-foreground/60 flex items-center justify-center hover:bg-foreground/80 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-background" />
            </a>
          </div>
        </div>

        {/* Content area */}
        <div className="bg-background px-6 py-6 flex flex-col items-center gap-5 flex-1">
          {/* Blue banner */}
          <div className="bg-primary px-5 py-3 w-full max-w-sm">
            <p className="text-primary-foreground text-xs font-bold tracking-[0.12em] uppercase leading-relaxed text-center">
              UNLOCKING THE FUTURE: EMPOWERING YOUNG TALENT FOR THE DIGITAL AGE
            </p>
          </div>

          {/* Logo */}
          <img
            src={trapezoidLogo}
            alt="Life Choices Academy Logo"
            className="w-full max-w-xs h-auto"
          />

          {/* Welcome text */}
          <p className="text-foreground text-sm leading-relaxed text-center max-w-sm">
            Welcome to Life Choices Academy, we are committed to empowering the youth with the skills, knowledge, and opportunities they need to thrive in the digital era
          </p>
        </div>
      </div>

      {/* DESKTOP LAYOUT (>= lg) */}
      <div className="relative flex-1 min-h-[600px] hidden lg:block">
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

        {/* White area */}
        <div
          className="absolute inset-0 bg-background z-10"
          style={{ clipPath: "polygon(0 0, 42% 0, 57% 100%, 0 100%)" }}
        />

        {/* Green accent line */}
        <div
          className="absolute inset-0 bg-secondary z-10"
          style={{ clipPath: "polygon(42% 0, 44% 0, 57% 100%, 55% 100%)" }}
        />

        {/* Top-left banner */}
        <div className="absolute top-8 left-0 z-20 w-[50%]">
          <div className="flex justify-center">
            <div className="bg-primary px-10 py-5 max-w-lg">
              <p className="text-primary-foreground text-sm font-bold tracking-[0.15em] uppercase leading-relaxed">
                UNLOCKING THE FUTURE: EMPOWERING YOUNG TALENT FOR THE DIGITAL AGE
              </p>
            </div>
          </div>
        </div>

        {/* Trapezoid logo */}
        <div className="absolute bottom-[28%] left-0 z-20 w-[75%] max-w-[820px]">
          <img
            src={trapezoidLogo}
            alt="Life Choices Academy Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Welcome text */}
        <div className="absolute bottom-16 left-16 max-w-md z-20">
          <p className="text-foreground text-base leading-relaxed">
            Welcome to Life Choices Academy, we are committed to empowering the youth with the skills, knowledge, and opportunities they need to thrive in the digital era
          </p>
        </div>

        {/* Right arrow button */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20">
          <a
            href="#introduction"
            className="w-14 h-14 rounded-full bg-foreground/60 flex items-center justify-center hover:bg-foreground/80 transition-colors"
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
            className="text-primary-foreground text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 border-r border-primary-foreground/30"
          >
            INTRODUCTION
          </a>
          <a
            href="#coding-academy"
            className="text-primary-foreground text-[10px] sm:text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 border-r border-primary-foreground/30 bg-[hsl(222,40%,65%)]"
          >
            <span className="font-bold">OUR YOUTH</span>CODE PROJECT
          </a>
          <a
            href="#youthforce"
            className="text-primary-foreground text-[10px] sm:text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 border-r border-primary-foreground/30"
          >
            <span className="font-bold">YOUTHFORCE</span> PROJECT
          </a>
          <a
            href="#solaryouth"
            className="text-primary-foreground text-[10px] sm:text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity text-center py-3 md:py-4 bg-[hsl(222,40%,65%)]"
          >
            SOLAR YOUTH PROJECT
          </a>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;
