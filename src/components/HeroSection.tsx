import heroStudents from "@/assets/hero-students.jpg";
import lifechoicesLogo from "@/assets/lifechoices-logo-hero.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-primary py-4 px-6">
        <p className="text-primary-foreground text-sm md:text-base font-medium tracking-[0.2em] uppercase">
          UNLOCKING THE FUTURE: EMPOWERING YOUNG TALENT FOR THE DIGITAL AGE
        </p>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">
        {/* Left Side - White background with blue diagonal */}
        <div className="relative w-full lg:w-[60%] min-h-[400px] lg:min-h-[600px] bg-background">
          {/* Blue Diagonal Shape */}
          <div 
            className="absolute inset-0 bg-primary"
            style={{
              clipPath: "polygon(0 12%, 85% 12%, 100% 100%, 0 100%)",
            }}
          />
          
          {/* Green Accent Line */}
          <div 
            className="absolute inset-0 bg-secondary z-10"
            style={{
              clipPath: "polygon(85% 12%, 87% 12%, 102% 100%, 100% 100%)",
            }}
          />

          {/* Logo Container */}
          <div className="relative z-20 pt-24 md:pt-32 lg:pt-40 pl-8 md:pl-12 lg:pl-16">
          <img
              src={lifechoicesLogo}
              alt="Life Choices Academy Logo"
              className="w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full lg:w-[40%] min-h-[300px] lg:min-h-[600px]">
          {/* Green accent continuation on image side */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-4 bg-secondary z-10 hidden lg:block"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
          <img
            src={heroStudents}
            alt="Two young people collaborating on a laptop"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Welcome Text - positioned on white background */}
        <div className="absolute bottom-8 md:bottom-16 lg:bottom-24 left-8 md:left-12 lg:left-16 max-w-md lg:max-w-lg z-30">
          <p className="text-primary-foreground text-base md:text-lg leading-relaxed mb-6">
            Welcome to Life Choices Academy, we are committed to empowering the youth with the skills, knowledge, and opportunities they need to thrive in the digital era
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#internship"
              className="inline-flex items-center justify-center px-6 py-3 text-primary-foreground font-bold rounded-md hover:underline transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="#internship"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-md hover:bg-secondary/90 transition-colors"
            >
              Hire an Intern
            </a>
            <a
              href="#introduction"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="w-full bg-accent py-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 px-4">
          <a
            href="#introduction"
            className="text-accent-foreground text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            INTRODUCTION
          </a>
          <a
            href="#coding-academy"
            className="text-accent-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            <span className="font-bold">CODING</span> ACADEMY
          </a>
          <a
            href="#youthforce"
            className="text-accent-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            <span className="font-bold">YOUTHFORCE</span> PROJECT
          </a>
          <a
            href="#solaryouth"
            className="text-accent-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            <span className="font-bold">SOLAR</span>YOUTH PROJECT
          </a>
          <a
            href="#internship"
            className="text-accent-foreground text-xs md:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            PARTNERSHIP PROGRAM
          </a>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;
