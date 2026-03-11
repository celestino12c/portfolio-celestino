"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const experiences = [
  {
    title: "Programador de Software",
    company: "HSTD Corporation",
    department: "Departamento de Tecnologias de Informação",
    period: "Fevereiro 2021 - Presente",
    type: "Sistemas de Saúde e Gestão Hospitalar",
    responsibilities: [
      "Desenvolvimento e implementação do Sistema de Saúde e Gestão Hospitalar em instituições públicas e privadas",
      "Manutenção preventiva e corretiva da aplicação, garantindo alta disponibilidade",
      "Implementação contínua de melhorias funcionais e de usabilidade",
      "Monitoramento e otimização da performance do sistema",
      "Supervisor em duas instituições (Centro Médico da Casa Militar e Clínica Medicrisal em Benguela/Lobito)",
      "Coordenador da Equipa de Desenvolvimento",
    ],
    institutions: ["Hospital Geral do Prenda", "Hospital Cardeal", "CETEP"],
  },
  {
    title: "Programador de Software",
    company: "TUMARGA",
    department: "Departamento de Tecnologias de Informação",
    period: "Novembro 2024 - Presente",
    type: "Gestão de Ginásio",
    responsibilities: [
      "Criação do Software de Gestão para o Ginásio",
      "Gestão de Planos e Inscrições",
      "Agendamento de treinos, aulas e gestão de horários",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 3 anos de experiência no desenvolvimento de soluções tecnológicas 
            para os setores da saúde e fitness.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-500" />
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-sm">• {exp.department}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {exp.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                  {exp.institutions && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-medium mb-2">Instituições atendidas:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.institutions.map((inst) => (
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}