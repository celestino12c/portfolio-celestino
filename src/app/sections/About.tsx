"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const education = [
  {
    icon: GraduationCap,
    title: "Ciências da Computação",
    institution: "Universidade Agostinho Neto",
    period: "2020 - 2025",
    description: "Faculdade de Engenharia, Luanda",
  },
];

const certifications = [
  "Fundamentos em Aplicação Web",
  "Fundamentos de Node.js",
  "Microsserviços",
  "Pacote Office",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Programador de Software com experiência no desenvolvimento de aplicações 
            e APIs utilizando Node.js e CodeIgniter 3, aplicando arquitetura bem 
            estruturada e organizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Educação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.title} className="border-l-2 border-blue-600 pl-4">
                    <h3 className="font-semibold">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-cyan-600" />
                  Certificações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed">
            Tenho sólida prática na construção de soluções robustas, escaláveis e de 
            alta performance, sempre focadas em segurança e eficiência. Sou entusiasta 
            em explorar novas tecnologias e abordagens inovadoras, buscando resolver 
            problemas de forma elegante e otimizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}