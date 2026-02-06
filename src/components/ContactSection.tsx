import { Button } from "@/components/ui/button";
import lifechoicesLogo from "@/assets/lifechoices-logo.png";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join us in empowering the next generation of talent across tech, Salesforce, and renewable energy
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-sm opacity-80">Melanie@lifechoices.co.za</p>
              <p className="text-sm opacity-80">Vuyo@lifechoices.co.za</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm opacity-80">021 696 4157</p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-sm opacity-80">Cape Town, South Africa</p>
            </div>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 mb-12 text-left max-w-xl mx-auto">
            <h3 className="font-bold mb-3 text-center">Key Contacts</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Melanie Stevens</p>
                <p className="opacity-80">Partnerships and Placements Lead</p>
              </div>
              <div>
                <p className="font-medium">Vuyo Ntlangu</p>
                <p className="opacity-80">Business Development Manager</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Partner With Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Host an Intern
            </Button>
          </div>
          
          <p className="mt-12 text-lg font-medium">
            Together, we can unlock the future.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-primary-foreground/20 mt-16 pt-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={lifechoicesLogo} alt="Life Choices Academy" className="h-10" />
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Life Choices Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
