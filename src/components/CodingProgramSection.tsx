import codingHero from "@/assets/coding-academy-hero.jpg";

const CodingProgramSection = () => {
  return (
    <section id="coding-academy" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Coding Academy
              </h2>
              <p className="text-muted-foreground mb-6">
                A 12-month journey to becoming a professional full-stack developer
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">6</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Month Bootcamp</h3>
                    <p className="text-muted-foreground text-sm">Full-Stack Web Development</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-secondary-foreground">6</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Month Internship</h3>
                    <p className="text-muted-foreground text-sm">Work-Integrated Learning at LC Studio</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-foreground">
                {["HTML, CSS, JavaScript fundamentals", "React.js & Node.js frameworks", "Database design & management", "Real client projects & portfolio development"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden">
              <img
                src={codingHero}
                alt="Coding Academy students working on laptops"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground">Employment Rate</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Month Program</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">Free</p>
              <p className="text-sm text-muted-foreground">For All Students</p>
            </div>
          </div>

          {/* Student Journey Timeline */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
            The Student Journey
          </h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A clear pathway from recruitment to employment
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {[
                { number: "01", title: "Recruitment", description: "Selection of motivated youth from underserved communities" },
                { number: "02", title: "Bootcamp", description: "Intensive 6-month full-stack web development training" },
                { number: "03", title: "Internship", description: "6-month work-integrated learning at LC Studio" },
                { number: "04", title: "Employment", description: "Transition to full-time employment in the tech industry" }
              ].map((step, index, arr) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2 text-center">{step.title}</h4>
                  <p className="text-muted-foreground text-sm text-center">{step.description}</p>
                  
                  {index < arr.length - 1 && (
                    <div className="md:hidden my-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProgramSection;
