import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dumbbell, Heart, Wind, Zap, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="text-secondary" size={48} />,
      title: "Kickboxing",
      description: "High-intensity martial arts training combining cardio with self-defense",
      benefits: [
        "Burns calories rapidly and improves cardiovascular health",
        "Builds strength, coordination, and agility",
        "Reduces stress and boosts confidence",
        "Develops self-defense skills",
        "Improves balance and core stability"
      ],
      idealFor: "Those looking for an exciting full-body workout that combines fitness with practical skills"
    },
    {
      icon: <Heart className="text-secondary" size={48} />,
      title: "Aerobics",
      description: "Dynamic group fitness sessions with energizing music and choreographed movements",
      benefits: [
        "Improves heart and lung health",
        "Enhances endurance and stamina",
        "Burns fat and tones muscles",
        "Boosts mood and energy levels",
        "Fun, social workout environment"
      ],
      idealFor: "All fitness levels - from beginners to advanced athletes looking for cardio conditioning"
    },
    {
      icon: <Zap className="text-secondary" size={48} />,
      title: "Strength Training",
      description: "Progressive resistance training to build muscle, power, and functional strength",
      benefits: [
        "Increases muscle mass and bone density",
        "Boosts metabolism and fat burning",
        "Improves posture and reduces injury risk",
        "Enhances daily functional movements",
        "Builds confidence and mental resilience"
      ],
      idealFor: "Anyone wanting to get stronger, more toned, and improve overall body composition"
    },
    {
      icon: <Wind className="text-secondary" size={48} />,
      title: "Yoga & Meditation",
      description: "Mind-body practice combining physical postures, breathing, and mindfulness",
      benefits: [
        "Increases flexibility and mobility",
        "Reduces stress and anxiety",
        "Improves focus and mental clarity",
        "Enhances balance and body awareness",
        "Promotes better sleep and recovery"
      ],
      idealFor: "Those seeking mental peace, flexibility, and holistic wellness alongside fitness"
    },
    {
      icon: <Activity className="text-secondary" size={48} />,
      title: "Stepper Cardio",
      description: "Low-impact cardiovascular training using step platforms for maximum calorie burn",
      benefits: [
        "Excellent for weight loss and fat burning",
        "Strengthens legs, glutes, and core",
        "Low impact on joints",
        "Improves cardiovascular endurance",
        "Can be modified for all fitness levels"
      ],
      idealFor: "People of all ages looking for joint-friendly cardio that delivers results"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              What I <span className="text-secondary">Offer</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive fitness training programs designed to transform your body, mind, and lifestyle. 
              Each service is tailored to your goals and fitness level.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card hover:shadow-glow transition-smooth animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-foreground">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">✓</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Ideal For:</p>
                    <p className="text-sm text-muted-foreground">{service.idealFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-secondary">Transformation?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a consultation to discuss which program is right for you. All services can be customized 
              to match your fitness level, goals, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+919716306747">
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-lg px-8 py-6 border-2"
                asChild
              >
                <a href="https://wa.me/919716306747" target="_blank" rel="noopener noreferrer">
                  WhatsApp Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
