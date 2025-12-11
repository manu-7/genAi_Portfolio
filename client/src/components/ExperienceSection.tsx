import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, ExternalLink } from "lucide-react";

const experience = {
  company: "INA Internet Pvt. Ltd.",
  role: "UI/UX Design Intern",
  period: "Dec 2024 - Jan 2026",
  location: "Remote",
  highlights: [
    "Designed UI/UX for education mobile app and web admin panel using Figma, improving interface clarity by 30%",
    "Delivered end-to-end design for 2+ client projects with clean, consistent, user-friendly layouts",
    "Created 30+ interactive prototypes speeding up developer handoff by 40%",
    "Ensured responsive design across 3+ screen sizes, boosting usability scores by 25%",
  ],
};

const certifications = [
  {
    title: "Oracle Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Aug 2025",
    description: "Validated skills in LLMs, OCI Generative AI Service, and RAG-based applications using LangChain, Semantic Search, and Vector Databases.",
    link: "#",
  },
  {
    title: "Django Essentials",
    issuer: "Infosys Springboard",
    date: "Jun 2025",
    description: "Project-based certification focused on backend development, including Django models, views, and deployment.",
    link: "#",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-card/30" data-testid="section-experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="font-mono" data-testid="badge-experience">
            Background
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-experience-title">
            Experience & Certifications
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-xl bg-background border border-border"
            data-testid="card-experience"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-accent font-mono text-sm">{experience.company}</p>
                <p className="text-muted-foreground text-sm">{experience.period} | {experience.location}</p>
              </div>
            </div>

            <ul className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:border-primary/50"
                data-testid={`card-certification-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer} | {cert.date}</p>
                      </div>
                      <button
                        onClick={() => console.log("View certificate:", cert.title)}
                        className="text-accent transition-colors hover:text-primary"
                        data-testid={`button-view-cert-${index}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
