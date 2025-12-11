import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Clock, Shield, Smartphone } from "lucide-react";

const projects = [
  {
    title: "CampusMate",
    subtitle: "AI-Powered RAG System",
    description: "An intelligent AI assistant that applies Retrieval-Augmented Generation to let students and educators query 100+ page PDFs in seconds, reducing manual search time by 60%.",
    highlights: [
      { icon: Zap, text: "Sub-2s response times powered by Groq's LLaMA3-70B" },
      { icon: Clock, text: "Supports files up to 200 MB with semantic chunking" },
    ],
    technologies: ["LangChain", "FastAPI", "Pinecone", "Groq", "Streamlit"],
    github: "https://github.com/manu-7/CampusMate",
    featured: true,
  },
  {
    title: "Eco Park Booking",
    subtitle: "Ticket Booking System",
    description: "A comprehensive web-based ticket booking platform that eliminates long queues and manual operations with integrated payment processing and fraud prevention.",
    highlights: [
      { icon: Shield, text: "QR-based verification cutting fraud by 60%" },
      { icon: Smartphone, text: "Mobile-optimized UI boosting mobile bookings by 40%" },
    ],
    technologies: ["Django", "Bootstrap", "Razorpay API", "SQLite", "QR Code"],
    demo: "https://eco-park-ticket-booking-1.onrender.com/",
    featured: false,
  },
  {
    title: "Django Task Queue",
    subtitle: "Async Task Management API",
    description: "A secure REST API backend with token authentication and asynchronous email confirmations, featuring comprehensive job status tracking and reduced debugging time.",
    highlights: [
      { icon: Shield, text: "Token authentication reducing unauthorized access by 90%" },
      { icon: Clock, text: "Custom API endpoints cutting debugging time by 40%" },
    ],
    technologies: ["Django REST Framework", "Celery", "SQLite", "Token Auth"],
    github: "https://github.com/manu-7/API_assignment-",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="font-mono" data-testid="badge-projects">
            Featured Work
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-projects-title">
            Projects & Applications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-ready AI solutions and full-stack applications with measurable impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 hover:border-primary/50 ${
                project.featured
                  ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30"
                  : "bg-card border-card-border"
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-accent font-mono text-sm">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-2 pt-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-3 text-sm">
                        <highlight.icon className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
                          variant="outline"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        data-testid={`button-github-${index}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        data-testid={`button-demo-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
