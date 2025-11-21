import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Activity, Users, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength & Conditioning",
      description:
        "Build functional strength that translates to everyday activities. Perfect for all fitness levels.",
      color: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      icon: Activity,
      title: "Mobility & Flexibility",
      description:
        "Improve range of motion, prevent injuries, and move with ease through comprehensive mobility work.",
      color: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: Zap,
      title: "Fat Loss & Nutrition",
      description:
        "Sustainable fat loss through smart training and practical nutrition guidance that fits your lifestyle.",
      color: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      title: "Senior Fitness",
      description:
        "Safe, effective programs designed to maintain independence, strength, and vitality at any age.",
      color: "bg-secondary/20",
      iconColor: "text-secondary",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Programs for <span className="text-secondary">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From teenagers to seniors, I offer personalized programs designed for
            your unique goals and abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-2 hover:border-secondary transition-smooth hover:shadow-medium group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}
                >
                  <program.icon className={program.iconColor} size={32} />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
