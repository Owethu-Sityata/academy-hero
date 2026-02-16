const BeneficiariesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-academy-blue">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Beneficiaries
          </h2>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Who we serve across our three programs
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-academy-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-3">YouthCode Project</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Ages 18–26</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Matric certificate (Grade 12)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Passionate about technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Currently unemployed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-academy-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-3">YouthForce Project</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Ages 18–26</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Aspiring Salesforce professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Seeking careers in the Salesforce ecosystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">South African youth from underserved communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Currently unemployed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-academy-green rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-3">Solar Youth Project</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Ages 22–28</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">N4–N6 electrical engineering qualifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Interest in the PV industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-academy-green rounded-full mt-2 shrink-0" />
                  <span className="text-white/90 text-sm">Currently unemployed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
