"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      
      <section className="container w-screen text-center flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-24 md:py-32">
        <div className="w-screen flex flex-col justify-center items-center gap-4 text-center">
          <motion.h1
            className="text-4xl text-center font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Giullya Gomes
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl text-muted-foreground sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Back-End Developer
          </motion.h2>
          
          <motion.div
            className="mx-auto mt-4 max-w-[700px] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-4">
              Tentando virar full stack e preferindo Dados
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="gap-2">
              <Link href="/projects">
                Veja O Meu Trabalho
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:giullyagomes@gmail.com">Fale Comigo</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}