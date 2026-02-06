const YouthForceSection = () => {
  const phases = [
    {
      number: "1",
      title: "Foundational Development",
      description:
        "Building foundational skills and knowledge to prepare individuals for roles within the Salesforce Ecosystem.",
    },
    {
      number: "2",
      title: "Admin Certification",
      description:
        "In-depth learning experience combining theory and practical application including a capstone project.",
    },
    {
      number: "3",
      title: "AI Specialist Certification",
      description:
        "Advanced learning experience through both theory and practical application including a capstone project.",
    },
    {
      number: "4",
      title: "Portfolio & Partner Projects",
      description:
        "Simulated environment for completing real-world projects linked to partners and developing personal portfolios leading to employment.",
    },
  ];

  return (
    <section id="youthforce" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            YouthForce Project
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-3xl mx-auto">
            Empowering Young Talent for the Salesforce Ecosystem
          </p>
          <p className="text-foreground text-center mb-12 max-w-3xl mx-auto">
            Our Salesforce upskilling program provides participants with foundational understanding, Salesforce certifications, essential soft skills, and professional development necessary to thrive in the Salesforce ecosystem and workplace.
          </p>

          {/* Outcomes */}
          <div className="bg-primary text-primary-foreground rounded-lg p-6 md:p-8 mb-12 text-center">
            <h3 className="font-bold text-xl mb-3">Outcomes</h3>
            <p className="opacity-90 max-w-2xl mx-auto">
              Successful participants obtain both the Admin &amp; AI Specialist certifications, equipping them for various roles within the Salesforce ecosystem.
            </p>
          </div>

          {/* Four Phases */}
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Four-Phase Learning Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="bg-background rounded-lg p-6 shadow-sm border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">
                      {phase.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border">
              <p className="text-2xl font-bold text-primary">20</p>
              <p className="text-sm text-muted-foreground">Certified Admins</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border">
              <p className="text-2xl font-bold text-primary">11</p>
              <p className="text-sm text-muted-foreground">Agentforce Specialists</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border">
              <p className="text-2xl font-bold text-primary">2M+</p>
              <p className="text-sm text-muted-foreground">Trailhead Points</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border">
              <p className="text-2xl font-bold text-primary">183</p>
              <p className="text-sm text-muted-foreground">Superbadges Completed</p>
            </div>
          </div>

          {/* Wrap Around note */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
            <h3 className="font-bold text-foreground text-lg mb-2">
              Wrap-Around Development
            </h3>
            <p className="text-muted-foreground text-sm">
              We incorporate our signature wrap-around development program within all four phases, focusing on personal development that equips each participant with necessary life skills, soft skills, and professional skills needed to thrive in the workplace. Our mental fitness program supports all participants' emotional and mental well-being throughout their journey towards employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouthForceSection;
