import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Apple, Home, Footprints } from "lucide-react";

const KnowledgeSection = () => {
  const articles = [
    {
      icon: Home,
      title: "Home Workout Essentials",
      description:
        "Effective exercises you can do anywhere with minimal equipment. Perfect for busy schedules.",
      category: "Training",
    },
    {
      icon: Apple,
      title: "Nutrition Fundamentals",
      description:
        "Simple, practical nutrition tips that work for real life. No extreme diets, just sustainable habits.",
      category: "Nutrition",
    },
    {
      icon: Footprints,
      title: "Mobility for Beginners",
      description:
        "Easy stretches and movements to improve flexibility and reduce pain from daily activities.",
      category: "Mobility",
    },
    {
      icon: BookOpen,
      title: "Fat Loss Basics",
      description:
        "Science-backed strategies for sustainable fat loss without starvation or complicated meal plans.",
      category: "Fat Loss",
    },
  ];

  return (
    <section id="knowledge" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Knowledge <span className="text-secondary">Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free resources to help you understand fitness, nutrition, and build
            healthy habits that last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:border-secondary transition-smooth cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:shadow-glow transition-smooth">
                    <article.icon className="text-secondary group-hover:text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-accent font-semibold mb-1">
                      {article.category}
                    </p>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
