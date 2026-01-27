const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The Solution
          </h2>
          <p className="text-xl text-center mb-12 opacity-90">
            Life Choices Academy & LC Studio
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Life Choices Academy</h3>
              <p className="text-sm opacity-90">
                A comprehensive coding bootcamp that provides intensive technical training, preparing youth for careers in tech.
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">YouthCode</h3>
              <p className="text-sm opacity-90">
                An entry-level program introducing young people to coding fundamentals and digital literacy skills.
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">LC Studio</h3>
              <p className="text-sm opacity-90">
                A work-integrated learning environment where students gain real-world experience on live client projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
