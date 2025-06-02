import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  name: string;
  technologies: string[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend Frameworks & Documentações",
    technologies: [
      "React", 
      "Next.js", 
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui"
    ],
  },
  {
    name: "UI Componentes & Styling",
    technologies: [
      "Radix UI",
      "Lucide React (Icons)",
      "Next Themes",
      "CSS Variables",
      "Tailwind CSS Animations"
    ],
  },
  {
    name: "State Management & Forms",
    technologies: [
      "React Hook Form",
      "Zod (Form Validation)",
      "React Context API",
      "useState/useEffect Hooks"
    ],
  },
  {
    name: "Tools & Utilities",
    technologies: [
      "TypeScript",
      "Axios",
      "date-fns",
      "Recharts",
      "clsx/tailwind-merge"
    ],
  },
  {
    name: "Deployment & Infrastructure",
    technologies: [
      "Static Site Export",
      "Netlify/Vercel Compatible",
      "ESLint",
      "Git Version Control"
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32">
      <div className="space-y-6">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre esse Projeto
          </h1>
          <p className="text-muted-foreground">
            Este portfólio foi construído com tecnologias web modernas e melhores práticas.
            Aqui está uma lista completa das tecnologias, bibliotecas e ferramentas utilizadas.
          </p>
        </div>

        <Separator className="my-8" />

        {techCategories.map((category) => (
          <Card key={category.name} className="overflow-hidden">
            <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-4">
              <h2 className="font-semibold text-white">{category.name}</h2>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="mt-12 rounded-lg bg-card p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Why These Choices?</h2>
          <p className="mb-4 text-muted-foreground">
            Esta pilha foi cuidadosamente selecionada para proporcionar um equilíbrio entre desempenho, experiência 
            do desenvolvedor e experiência do usuário. O Next.js fornece uma estrutura robusta para aplicativos React
            com excelentes recursos de SEO, enquanto o Tailwind CSS permite uma estilização rápida e consistente.
          </p>
          <p className="text-muted-foreground">
            A biblioteca de componentes construída com primitivas Radix UI garante acessibilidade
            e comportamento consistente em todos os navegadores e dispositivos. O TypeScript adiciona 
            segurança de tipo para evitar erros comuns durante o desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  );
}