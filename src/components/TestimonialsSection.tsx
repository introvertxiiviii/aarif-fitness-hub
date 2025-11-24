import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: 42,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      text: "Aarif transformed my approach to fitness. At 42, I feel stronger and more energetic than I did in my 30s. His personalized program fit perfectly into my busy schedule.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      age: 65,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      text: "As a senior, I was worried about injuries. Aarif's patient guidance and safe exercises have improved my mobility and confidence. I can play with my grandchildren without pain!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      age: 28,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      text: "Lost 15kg in 6 months while building real strength! Aarif's nutrition guidance was practical and sustainable. No crash diets, just smart choices and consistency.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      age: 19,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      text: "Started training with Aarif as a teenager. Not only did I get fit, but I also gained confidence and discipline that helped me in all areas of life.",
      rating: 5,
    },
    {
      name: "Meera Desai",
      age: 55,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      text: "After years of back pain, Aarif's functional training approach changed everything. I'm pain-free and more active than I've been in decades!",
      rating: 5,
    },
    {
      name: "Arjun Reddy",
      age: 35,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      text: "Aarif helped me balance my demanding career with fitness. His efficient workouts and realistic approach made it sustainable. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real People, Real <span className="text-secondary">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from clients of all ages who transformed their lives through
            functional fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Video Testimonial - Left Side */}
          <div className="animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <video
                src="/videos/client-testimonial.mp4"
                className="w-full h-full object-cover"
                controls
                playsInline
              />
            </div>
          </div>

          {/* Written Testimonials - Right Side */}
          <div className="space-y-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-soft"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Age {testimonial.age}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-accent fill-accent"
                        size={18}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Age {testimonial.age}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-accent fill-accent"
                      size={18}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
