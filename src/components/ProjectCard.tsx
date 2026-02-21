import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  githubLink: string;
  liveLink?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  keyFeatures,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-slate-800/60 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-slate-300 text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-5">
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="text-sm text-slate-400 flex items-start">
                <span className="text-blue-400 mr-3 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-auto pt-4 border-t border-slate-700/30">
          <Button asChild variant="default" size="sm">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          {liveLink && (
            <Button asChild variant="default" size="sm">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
