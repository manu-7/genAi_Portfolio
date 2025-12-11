import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "msmanusingh07@gmail.com",
    href: "mailto:msmanusingh07@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6290830594",
    href: "tel:+916290830594",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Manu-7",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/manusingh02",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/30" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="font-mono" data-testid="badge-contact">
            Get In Touch
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-contact-title">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-description">
            I'm currently open to new opportunities in GenAI Engineering, AI Development, and Full-Stack roles. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>

          <div className="pt-8">
            <div className="max-w-xl mx-auto p-8 rounded-xl bg-background border border-border">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("/attached_assets/Manu_Singh_Resume_1765470903695.pdf", "_blank")}
              data-testid="button-download-resume-contact"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="pt-12 border-t border-border mt-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center" data-testid={`contact-info-${index}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-card-border text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:-translate-y-1"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
