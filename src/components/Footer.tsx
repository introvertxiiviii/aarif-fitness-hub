import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary text-xl">
                AFF
              </div>
              <span className="font-bold text-xl">Aarif Functional Fitness</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Transforming lives through personalized functional fitness coaching.
              Serving all ages with safe, effective, and sustainable training
              programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#knowledge"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  Knowledge
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com/@aariffunctionalfitness2876"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-smooth"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1FMXa26mZc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-smooth"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Aarif Functional Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
