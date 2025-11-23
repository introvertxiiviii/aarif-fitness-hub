import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award } from "lucide-react";
import certificate1 from "@/assets/certificate-1.jpeg";
import certificate2 from "@/assets/certificate-2.jpeg";
import certificate3 from "@/assets/certificate-3.jpeg";
import certificate4 from "@/assets/certificate-4.jpeg";

const CertificatesSection = () => {
  const certificates = [
    {
      image: certificate1,
      title: "Certified Aerobics Trainer",
      organization: "Fitness Matters",
    },
    {
      image: certificate2,
      title: "Certified Aerobics Trainer",
      organization: "Fitness Matters - Floor & Step Aerobics",
    },
    {
      image: certificate3,
      title: "Adult CPR Training",
      organization: "Emergency University",
    },
    {
      image: certificate4,
      title: "Yoga Volunteer",
      organization: "Yoga Certification Board - Ministry of Ayush, Government of India",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="text-secondary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Professional <span className="text-secondary">Certifications</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Internationally recognized qualifications ensuring the highest standards of training and safety
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-scale-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="bg-card rounded-xl overflow-hidden shadow-strong hover:shadow-glow transition-smooth group">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                      </div>
                      <div className="p-4 bg-muted/50">
                        <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.organization}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-translate-x-12 translate-x-0" />
            <CarouselNext className="right-0 md:translate-x-12 translate-x-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
