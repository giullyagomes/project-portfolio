import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/timeline";

const academicExperience = [
  {
    institution: "Universidade Católica de Pernambuco",
    degree: "Sistemas Para Internet",
    date: "2024 - 2026",
    description: "O curso de Sistemas para Internet é focado no desenvolvimento e gestão de sistemas online. Os alunos aprendem a planejar, desenvolver, implantar e gerenciar sistemas, com uma grade curricular que abrange diversas áreas da tecnologia.",
    achievements: [
      "Pibic 2025",
      "Pibic 2026'",
      "Monitoria em Banco de Dados"
    ],
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    institution: "Universidade Federal de Pernambuco",
    degree: "Mestrado em Ciência da Computação",
    date: "2026 - ?",
    description: "Deus queira que dê certo",
    achievements: [
      "Não reprovar",
      "Não desistir",
      "Conseguir terminar"
    ],
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    institution: "Coursera & Udemy",
    degree: "Certificações Profissionais",
    date: "2024 - Presente",
    description: "Aprendizagem contínua por meio de certificações profissionais e cursos online.",
    achievements: [
      "AWS Certified Solutions Architect",
      "Google UX Design Professional Certificate",
      "React Nanodegree Program"
    ],
    icon: <Briefcase className="h-5 w-5" />
  }
];

export default function AcademicPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32">
      <div className="space-y-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Experiência Acadêmica
          </h1>
          <p className="text-muted-foreground">
            Minha formação educacional e realizações acadêmicas.
          </p>
        </div>

        <Separator className="my-8" />

        <Timeline items={academicExperience.map((item, index) => ({
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
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold">{item.institution}</h3>
                    <p className="text-sm text-muted-foreground">{item.degree}</p>
                  </div>
                  <p className="text-sm">{item.description}</p>
                  <div className="pt-2">
                    <h4 className="mb-2 text-sm font-semibold">Conquistas</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        }))} />
      </div>
    </div>
  );
}