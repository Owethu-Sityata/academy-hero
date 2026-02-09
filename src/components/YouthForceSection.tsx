import youthforceHero from "@/assets/youthforce-hero.jpg";

const YouthForceSection = () => {
  const pipelinePhases = [
    {
      phase: "Phase 1 — Upskilling",
      title: "Build Certified Foundations",
      duration: "6 months",
      description:
        "Young Professionals complete a structured technical foundation, including ICT fundamentals and core Salesforce Administrator training, progressing toward Salesforce certification and workplace readiness.",
      outcome:
        "Certification-ready talent with strong technical and professional foundations.",
    },
    {
      phase: "Phase 2 — WIL",
      title: "Turn Learning Into Delivery",
      duration: "6 months",
      description:
        "Partners co-design tailored learning tracks with LC Studio, giving trainees hands-on exposure through live or simulated client projects, supported by both LC Studio mentors and your internal delivery teams.",
      outcome:
        "Project-ready talent contributing to delivery capacity, managed through a low-touch partner model.",
    },
    {
      phase: "Employment Transition",
      title: "Seamless Team Integration",
      duration: "6 – 12 months",
      description:
        "Young Professionals transition into internships or entry-level roles within partner organisations and client environments, with ongoing support from Life Choices Academy to ensure successful integration and performance.",
      outcome:
        "Reliable, diverse junior talent entering your workforce with proven training and support.",
    },
  ];

  return (
    <section id="youthforce" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero block with image */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
            <div className="rounded-lg overflow-hidden shadow-md md:order-1">
              <img
                src={youthforceHero}
                alt="YouthForce young professionals collaborating in a meeting"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                YouthForce Project
              </h2>
              <p className="text-lg font-semibold text-foreground mb-2">
                Empower Your Workforce with a White-Label Salesforce Academy
              </p>
              <p className="text-muted-foreground mb-4">
                Workforce Development · Impact Certification · Innovation
              </p>
              <p className="text-foreground text-sm leading-relaxed">
                As a Salesforce Workforce Development Partner, we provide a
                tailored talent development solution that enables Salesforce
                Partners to build their own skilled workforce pipeline with
                minimal operational burden. Through our YouthForce Certification
                Program and LC Studio Work-Integrated Learning model, we develop
                certified, project-ready Salesforce professionals.
              </p>
            </div>
          </div>

          {/* Highlight banner */}
          <div className="bg-primary text-primary-foreground rounded-lg p-6 md:p-8 mb-12 text-center">
            <h3 className="font-bold text-xl mb-2">
              The Talent Pipeline Roadmap
            </h3>
            <p className="opacity-90 max-w-3xl mx-auto text-sm">
              An 18-month talent pipeline designed to reduce hiring costs,
              strengthen bench capacity, and scale your Salesforce delivery
              teams.
            </p>
          </div>

          {/* Three Pipeline Phases */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pipelinePhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-background rounded-lg shadow-sm border border-border flex flex-col"
              >
                {/* Phase header */}
                <div className="bg-accent text-accent-foreground px-5 py-3 rounded-t-lg">
                  <span className="font-bold text-sm uppercase tracking-wide">
                    {phase.phase}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-foreground text-lg mb-1">
                    {phase.title}
                  </h4>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {phase.duration}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {phase.description}
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-semibold text-foreground">
                      Outcome:{" "}
                      <span className="font-normal text-muted-foreground">
                        {phase.outcome}
                      </span>
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
              <p className="text-sm text-muted-foreground">
                Agentforce Specialists
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border">
              <p className="text-2xl font-bold text-primary">2M+</p>
              <p className="text-sm text-muted-foreground">
                Trailhead Points
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm border border-border">
              <p className="text-2xl font-bold text-primary">183</p>
              <p className="text-sm text-muted-foreground">
                Superbadges Completed
              </p>
            </div>
          </div>

          {/* Wrap Around note */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
            <h3 className="font-bold text-foreground text-lg mb-2">
              Wrap-Around Development
            </h3>
            <p className="text-muted-foreground text-sm">
              We incorporate our signature wrap-around development program
              within all phases, focusing on personal development that equips
              each participant with necessary life skills, soft skills, and
              professional skills needed to thrive in the workplace. Our mental
              fitness program supports all participants' emotional and mental
              well-being throughout their journey towards employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouthForceSection;
