"use client";

import { motion } from "framer-motion";
import { 
  SiNodedotjs, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMysql, 
  SiDocker, 
  SiLinux, 
  SiGit, 
  SiPrisma, 
  SiJavascript, 
  SiCodeigniter,
  SiRubyonrails,
  SiPhp,
  SiHtml5,
  SiCss,
  SiRedis,
  SiH2Database,
} from "react-icons/si";

import { OracleOriginal } from "devicons-react";

import { ShieldCheck, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const skillCategories = [
  {
    title: "Backend & Core",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Ruby on Rails", icon: SiRubyonrails, color: "#CC0000" },
      { name: "CodeIgniter 3", icon: SiCodeigniter, color: "#EE4323" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      { name: "Microsserviços", icon: Cpu, color: "#6366f1" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js 15", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Infra & DB",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle DB", icon: OracleOriginal, color: "#F80000" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

const softSkills = [
  "Solução de problemas e controle de qualidade",
  "Processos ágeis (Scrum/Kanban)",
  "Forte capacidade de comunicação e observação",
  "Senso de organização e responsabilidade",
  "Espírito de equipa e adaptabilidade",
  "Liderança técnica e supervisão de equipas",
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Competências Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológica de ponta que utilizo para construir soluções robustas, escaláveis e de alta performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold px-2 border-l-4 border-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <skill.icon 
                        size={28} 
                        style={{ color: skill.color }} 
                        className="group-hover:scale-110 transition-transform duration-300" 
                      />
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-background to-muted border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Competências Interpessoais</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm md:text-base leading-tight font-medium text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}