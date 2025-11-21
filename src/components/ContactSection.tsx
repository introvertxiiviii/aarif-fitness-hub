import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919716306747?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to complete your message...",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Your <span className="text-secondary">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take the first step? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your fitness goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="text-lg resize-none"
                />
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Your details are safe and will never be shared.
              </p>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/919716306747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-smooth group"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:shadow-glow transition-smooth">
                    <MessageCircle className="text-secondary group-hover:text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-muted-foreground">+91 97163 06747</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 97163 06747</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@aariffitness.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-8 border-2 border-secondary">
              <h4 className="text-xl font-bold mb-4">Quick Response</h4>
              <p className="text-muted-foreground mb-4">
                For fastest response, message me on WhatsApp. I typically respond
                within a few hours!
              </p>
              <Button
                variant="default"
                className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold"
                asChild
              >
                <a
                  href="https://wa.me/919716306747"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
