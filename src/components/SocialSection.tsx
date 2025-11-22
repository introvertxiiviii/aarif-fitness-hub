import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Facebook } from "lucide-react";

const SocialSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the <span className="text-secondary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow my journey and get daily fitness tips, workout videos, and
            inspiration on social media.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* YouTube */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center group animate-fade-in">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Youtube className="text-red-500" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">YouTube</h3>
            <p className="text-muted-foreground mb-6">
              Watch workout tutorials, tips, and transformation stories
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-smooth"
              asChild
            >
              <a
                href="https://youtube.com/@aariffunctionalfitness2876"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe Now
              </a>
            </Button>
          </div>

          {/* Instagram */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center group animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Instagram className="text-pink-500" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-6">
              Daily motivation, quick tips, and behind-the-scenes content
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-smooth"
              asChild
            >
              <a
                href="https://www.instagram.com/aarif097/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Me
              </a>
            </Button>
          </div>

          {/* Facebook */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
              <Facebook className="text-blue-500" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Facebook</h3>
            <p className="text-muted-foreground mb-6">
              Join our community for support, tips, and live sessions
            </p>
            <Button
              variant="outline"
              className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-smooth"
              asChild
            >
              <a
                href="https://www.facebook.com/share/1FMXa26mZc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Like Page
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
