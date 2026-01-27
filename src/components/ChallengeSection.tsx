const ChallengeSection = () => {
  return (
    <section id="introduction" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            The Challenge
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Limited Access</h3>
              <p className="text-muted-foreground text-sm">
                Many young South Africans lack access to tertiary education and the opportunities it provides.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Skills Mismatch</h3>
              <p className="text-muted-foreground text-sm">
                A significant gap exists between the skills youth possess and what the job market demands.
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Youth Unemployment</h3>
              <p className="text-muted-foreground text-sm">
                South Africa faces one of the highest youth unemployment rates globally, limiting economic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
