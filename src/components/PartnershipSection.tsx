import { Button } from "@/components/ui/button";

const PartnershipSection = () => {
  return (
    <section id="internship" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Partnership Model
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Internship Partnership Program
          </p>
          
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-primary text-primary-foreground p-8 md:p-10">
                <h3 className="font-bold text-2xl mb-4">We're Your Talent Partner</h3>
                <p className="opacity-90 mb-6">
                  Life Choices is not a recruitment agency. We are a talent development partner committed to creating sustainable employment pathways for young South Africans.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Pre-Screened Talent</p>
                      <p className="text-sm opacity-80">All interns complete rigorous training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Ongoing Support</p>
                      <p className="text-sm opacity-80">Mentorship throughout the internship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Social Impact</p>
                      <p className="text-sm opacity-80">Contribute to youth employment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-xl text-foreground mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                    <div>
                      <p className="font-medium text-foreground">Connect</p>
                      <p className="text-sm text-muted-foreground">Reach out to discuss your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                    <div>
                      <p className="font-medium text-foreground">Match</p>
                      <p className="text-sm text-muted-foreground">We match you with suitable candidates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                    <div>
                      <p className="font-medium text-foreground">Host</p>
                      <p className="text-sm text-muted-foreground">Welcome interns to your team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold shrink-0">4</span>
                    <div>
                      <p className="font-medium text-foreground">Hire</p>
                      <p className="text-sm text-muted-foreground">Transition to permanent employment</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:0216964157">Become a Partner</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
