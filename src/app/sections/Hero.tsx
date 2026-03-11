"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Olá, sou{" "}
            <span className="text-gradient">Celestino Tchacamba</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Programador de Software & Especialista em Node.js
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
            Desenvolvo soluções robustas e escaláveis com foco em sistemas de 
            gestão hospitalar e aplicações web modernas. Baseado em Luanda, Angola.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Button size="lg" className="gradient">
              <a href="#contact">Fale Comigo</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#projects">Ver Projetos</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 justify-center md:justify-start text-muted-foreground">
            <a
              href="https://github.com/celestino12c"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/celestino-tchacamba-60a706268/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:andradetchacamba421@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              Luanda, Angola
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/images/celestino.png"
                alt="Celestino Tchacamba"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}