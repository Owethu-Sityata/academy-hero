import solarYouthHero from "@/assets/solaryouth-hero.webp";

const SolarYouthSection = () => {
  return (
    <section id="solaryouth" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Solar Youth Project
              </h2>
              <p className="text-muted-foreground mb-4">
                Empower Youth, Power the Nation
              </p>
              <p className="text-foreground mb-6">
                Life Choices Academy and GREEN Solar Academy, bringing together over 20 years of experience in solar and youth education, are empowering young South Africans with technical, professional, and personal development so they can thrive in the fast-growing solar energy sector.
              </p>
              <div className="bg-secondary text-secondary-foreground rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Why a Youth Program?</h3>
                <p className="opacity-90 text-sm">
                  The growing solar sector needs more people with specialised technical skills, including solar panel installation, maintenance, and repair, as well as expertise in solar inverters, battery storage systems, and related technologies. Life Choices Academy's Solar Youth Project bridges this skills gap by providing the market with access to young technically-proficient ready-for-work individuals.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={solarYouthHero}
                alt="Solar Youth students installing solar panels on a rooftop"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Two-Phase Program */}
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            12-Month Program Structure
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl">Month Upskilling</h4>
                  <p className="text-muted-foreground text-sm">Technical & Professional Development</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Solar PV mounting, installation, testing & commissioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">DGS & SAIEE accredited courses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Real work simulation on live rooftops</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Soft skills & work readiness training</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary-foreground">10</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl">Month Internship</h4>
                  <p className="text-muted-foreground text-sm">Industry Placement</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Real-world experience on solar projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Continuous mentorship & guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Host employer support from dedicated team</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Pathway to permanent employment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">23</p>
              <p className="text-sm text-muted-foreground">Graduates (2024)</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">22</p>
              <p className="text-sm text-muted-foreground">Placed in Internships</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">138</p>
              <p className="text-sm text-muted-foreground">Youth Over 3 Years</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground">Promoted to Managers</p>
            </div>
          </div>

          {/* Beneficiaries */}
          <div className="bg-muted rounded-lg p-6 md:p-8">
            <h3 className="font-bold text-foreground text-lg mb-3">Who Are Our Youth?</h3>
            <p className="text-muted-foreground text-sm">
              Unemployed young people between the ages of 22 and 28 who are interested in starting a career in the PV industry. All have matric and have completed their N4–N6 electrical engineering qualifications through TVET partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarYouthSection;
