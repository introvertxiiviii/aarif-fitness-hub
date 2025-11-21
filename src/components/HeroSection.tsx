import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-fitness.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-hero opacity-70 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform Your Life with{" "}
            <span className="text-secondary">Aarif Functional Fitness</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Personalized coaching for strength, mobility, fat loss, and everyday
            functional fitness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 py-6 shadow-glow transition-bounce hover:scale-105"
              asChild
            >
              <a href="#contact">
                Book a Consultation <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 py-6 shadow-glow transition-bounce hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/919716306747"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
