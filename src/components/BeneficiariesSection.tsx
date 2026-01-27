const BeneficiariesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Our Beneficiaries
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Who we serve and support
          </p>
          
          <div className="bg-background rounded-lg shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Ages 18-35 years old</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">South African citizen or permanent resident</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Matric certificate (Grade 12)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Currently unemployed or underemployed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Target Profile
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Youth from underserved communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Limited access to tertiary education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Passionate about technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">Committed to personal growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
