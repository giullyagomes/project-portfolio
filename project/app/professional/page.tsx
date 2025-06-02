import { Briefcase, Calendar, Code, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/timeline";

const professionalExperience = [
  {
    company: "Porto Digital",
    position: "Estudante de Residência",
    location: "Recife - Pernambuco",
    date: "2024 - Presente",
    description: "Desenvolvedor de uma equipe, front-end e colaborando com equipes de design, back-end e dados.",
    responsibilities: [
      "Participou de processos de desenvolvimento ágil e planejamento de sprint",
      "Aprendizado de Tecnologias",
      "Desinvolvimento de Human Skills"
    ],
    technologies: ["React", "TypeScript", "Next.js", "SQL", "Java", "Tailwind CSS"],
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    company: "Be&Grow",
    position: "Estudante de Residência",
    location: "Recife - Pernambuco",
    date: "2024",
    description: "Desenvolvi um aplicativo web responsivos implementando designs modernos de UI/UX.",
    responsibilities: [
      "Desenvolver aplicações web interativas com Bubble.io",
      "Colaborar com designers para implementar interfaces",
      "Passar raiva"
    ],
    technologies: ["Bubble.io", "Figma", "UX", "UI", "RESTful APIs"],
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    company: "Ferreira Costa",
    position: "Estudante de Residência",
    location: "Recife - Pernambuco",
    date: "2025",
    description: "Desenvolvimento de estudos aprofundados de SQL/PLSQL",
    responsibilities: [
      "Estudo de Caso aprofundado",
      "Corrigidos bugs e recursos existentes aprimorados",
      "Desenvolvimento de um projeto colaborativo"
    ],
    technologies: ["SQL", "PLSQL"],
    icon: <Briefcase className="h-5 w-5" />
  }
];

export default function ProfessionalPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32">
      <div className="space-y-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Experiência profissional
          </h1>
          <p className="text-muted-foreground">
            Meu histórico de trabalho e realizações profissionais.
          </p>
        </div>

        <Separator className="my-8" />

        <Timeline 
          items={professionalExperience.map((item, index) => ({
            icon: item.icon,
            content: (
              <Card key={index} className="relative overflow-hidden border-none bg-card shadow-md transition-all hover:shadow-lg">
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 backdrop-blur-sm">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">{item.position}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>{item.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm">{item.description}</p>
                    
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Principais Responsabilidades</h4>
                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="mr-2 mt-0.5 text-primary">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Tecnologias Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="gap-1 px-2 py-1">
                            <Code className="h-3.5 w-3.5" />
                            <span className="text-xs">{tech}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          }))}
        />
      </div>
    </div>
  );
}