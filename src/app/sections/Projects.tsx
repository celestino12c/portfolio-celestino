"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Hospital, Dumbbell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Sistema de Gestão Hospitalar",
    description: "Sistema completo para gestão de instituições de saúde, incluindo prontuários eletrônicos, agendamento de consultas, gestão de farmácia e faturação.",
    icon: Hospital,
    technologies: ["Node.js", "CodeIgniter 3", "MySQL", "React", "Redis"],
    features: [
      "Gestão de pacientes e prontuários",
      "Agendamento de consultas e exames",
      "Controle de estoque farmacêutico",
      "Faturação e convênios",
      "Relatórios gerenciais",
    ],
    institutions: ["Hospital Geral do Prenda", "Hospital Cardeal", "CETEP"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "TUMARGA - Gestão de Ginásio",
    description: "Plataforma completa para gestão de academias, com controle de matrículas, planos, agendamento de aulas e acompanhamento de alunos.",
    icon: Dumbbell,
    technologies: ["Node.js", "Next.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Gestão de planos e inscrições",
      "Agendamento de treinos e aulas",
      "Controle de acesso",
      "App para instrutores",
      "Relatórios de frequência",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções desenvolvidas com foco em performance, segurança e usabilidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <project.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Funcionalidades</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.institutions && (
                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-semibold mb-2">Implementado em:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.institutions.map((inst) => (
                          <span
                            key={inst}
                            className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                    <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}