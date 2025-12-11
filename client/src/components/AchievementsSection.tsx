import { Badge } from "@/components/ui/badge";
import { Trophy, Code2, Palette, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    value: "Top 300",
    label: "CodeQuezt #21",
    description: "Ranked among top 300 out of 25,000+ global participants in Naukri Campus coding competition",
  },
  {
    icon: Code2,
    value: "300+",
    label: "DSA Problems",
    description: "Consistently solved problems on LeetCode, GeeksforGeeks, and CodeChef since 2022",
  },
  {
    icon: Palette,
    value: "2nd Place",
    label: "UI/UX Contest",
    description: "Won runner-up position at Calcutta University for designing a modern e-commerce platform",
  },
  {
    icon: Users,
    value: "Team Captain",
    label: "Cricket Leadership",
    description: "Led BPPIMT IT Dept. cricket team to 1st place (2024) and runner-up (2025)",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 lg:py-32" data-testid="section-achievements">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="font-mono" data-testid="badge-achievements">
            Achievements
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-achievements-title">
            Recognition & Leadership
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-card-border text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              data-testid={`card-achievement-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {achievement.value}
              </p>
              <p className="font-semibold mb-2">{achievement.label}</p>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
