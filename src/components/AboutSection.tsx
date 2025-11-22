import { Award, Heart, Target } from "lucide-react";
import aarifProfile from "@/assets/aarif-profile.jpg";
import aarifGroup from "@/assets/aarif-group.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const AboutSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const mediaItems = [
    { type: "image", src: aarifProfile, alt: "Aarif - Professional Fitness Coach" },
    { type: "image", src: aarifGroup, alt: "Aarif with Training Group" },
    { type: "video", src: "/videos/aarif-training.mp4", alt: "Training Session" },
  ];

  const values = [
    {
      icon: Target,
      title: "Personalized Approach",
      description:
        "Every body is unique. I create customized programs tailored to your goals, abilities, and lifestyle.",
    },
    {
      icon: Heart,
      title: "Functional Fitness",
      description:
        "Build real-world strength that enhances your daily life, from carrying groceries to playing with grandkids.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Years of experience helping people of all ages achieve their fitness goals safely and effectively.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative animate-fade-in">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {mediaItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-strong">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary px-6 py-4 rounded-xl shadow-medium">
              <p className="font-bold text-2xl">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet <span className="text-secondary">Aarif</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm Aarif, a certified functional fitness coach dedicated to
              helping people of all ages discover their strength and transform
              their lives through movement.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My philosophy is simple: fitness should be accessible, sustainable,
              and enjoyable. Whether you're a teenager looking to build
              confidence, a professional managing stress, or a senior maintaining
              independence, I'm here to guide you every step of the way.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group hover:translate-x-2 transition-smooth"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:shadow-glow transition-smooth">
                    <value.icon className="text-secondary group-hover:text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
