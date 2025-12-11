import { Badge } from "@/components/ui/badge";
import { Brain, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & LLM Technologies",
    skills: ["LangChain", "RAG Systems", "Vector Databases", "Pinecone", "Embeddings", "Groq", "Streamlit", "Semantic Search"],
  },
  {
    icon: Server,
    title: "Backend & Frameworks",
    skills: ["Python", "Django", "Django REST Framework", "FastAPI", "Celery", "PostgreSQL", "SQLite", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Render", "Docker", "Linux"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-card/30" data-testid="section-skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="font-mono" data-testid="badge-skills">
            Technical Skills
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-skills-title">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border backdrop-blur-lg"
              data-testid={`card-skill-category-${index}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="font-mono text-xs"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
