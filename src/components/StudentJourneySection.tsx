const StudentJourneySection = () => {
  const steps = [
    {
      number: "01",
      title: "Recruitment",
      description: "Selection of motivated youth from underserved communities"
    },
    {
      number: "02",
      title: "Bootcamp",
      description: "Intensive 6-month full-stack web development training"
    },
    {
      number: "03",
      title: "Internship",
      description: "6-month work-integrated learning at LC Studio"
    },
    {
      number: "04",
      title: "Employment",
      description: "Transition to full-time employment in the tech industry"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            The Student Journey
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A clear pathway from recruitment to employment
          </p>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-sm text-center">{step.description}</p>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
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

export default StudentJourneySection;
