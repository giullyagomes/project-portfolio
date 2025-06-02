"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, ExternalLink, Github, Loader2 } from "lucide-react";
import axios from "axios";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: "frontend" | "fullstack" | "design";
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing features.",
    image: "https://images.pexels.com/photos/5833874/pexels-photo-5833874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Next.js", "Tailwind CSS", "Recharts", "Node.js", "MongoDB"],
    github: "https://github.com/username/ecommerce-dashboard",
    live: "https://ecommerce-dashboard-demo.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A modern weather application with location detection, weekly forecasts, and weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "OpenWeatherMap API", "Geolocation API", "CSS Modules"],
    github: "https://github.com/username/weather-app",
    live: "https://weather-app-demo.com",
    category: "frontend"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and professional experience.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Netlify"],
    github: "https://github.com/username/portfolio",
    live: "https://myportfolio.com",
    category: "frontend"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity app for task management with drag-and-drop functionality, labels, and deadlines.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/username/task-manager",
    live: "https://task-manager-demo.com",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Health & Fitness Tracker",
    description: "An application for tracking workouts, nutrition, and health metrics with visualization tools.",
    image: "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Redux", "Firebase", "D3.js", "Health API", "Expo"],
    github: "https://github.com/username/fitness-tracker",
    category: "fullstack"
  },
  {
    id: 6,
    title: "UI Component Library",
    description: "A custom UI component library with a comprehensive Storybook documentation.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Storybook", "SCSS", "Jest", "Rollup"],
    github: "https://github.com/username/ui-components",
    live: "https://ui-components-demo.com",
    category: "design"
  }
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    async function fetchGithubRepos() {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.github.com/users/github/repos?per_page=5&sort=updated');
        setGithubRepos(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError("Failed to load GitHub repositories. GitHub API may have rate limits.");
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchGithubRepos();
  }, []);

  const filteredProjects = activeTab === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="space-y-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="text-muted-foreground">
            A collection of my recent work and personal projects.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="design">UI/UX Design</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-video relative w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    {project.github && (
                      <Button variant="outline\" size="sm\" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" asChild>
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            GitHub Repositories
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              (via GitHub API)
            </span>
          </h2>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Loading repositories...</span>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-card p-6">
              <p className="text-muted-foreground">{error}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                GitHub API has rate limits for unauthenticated requests. The actual implementation would use authenticated requests.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {githubRepos.map((repo) => (
                <Card key={repo.id} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{repo.name}</h3>
                          <Badge variant="outline" className="gap-1 text-xs">
                            <Code className="h-3 w-3" />
                            {repo.language || "Various"}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {repo.description || "No description provided"}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2 sm:mt-0" asChild>
                        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}