const ImpactSourcingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Impact Sourcing & Services
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto opacity-90">
            LC Studio: Where learning meets real-world impact
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-secondary-foreground/20">
              <h3 className="font-bold text-xl mb-4">Work-Integrated Learning</h3>
              <p className="opacity-90 mb-4">
                Our interns gain hands-on experience through live client projects, building real solutions while developing their professional skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Live client projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mentored development</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Industry exposure</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-secondary-foreground/20">
              <h3 className="font-bold text-xl mb-4">Web Development Services</h3>
              <p className="opacity-90 mb-4">
                LC Studio offers professional web development services delivered by our talented interns under expert supervision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Responsive design</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Tailored solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSourcingSection;
