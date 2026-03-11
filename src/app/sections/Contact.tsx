"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useMutation } from "@tanstack/react-query";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

async function sendContactMessage(data: ContactFormData) {
  // Simulação de envio - substituir por API real
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Mensagem enviada:", data);
  return { success: true };
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: sendContactMessage,
    onSuccess: () => {
      reset();
      alert("Mensagem enviada com sucesso!");
    },
    onError: () => {
      alert("Erro ao enviar mensagem. Tente novamente.");
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andradetchacamba421@gmail.com",
      href: "mailto:andradetchacamba421@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+244 933 405 156",
      href: "tel:+244933405156",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Luanda, Angola",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vamos trabalhar juntos? Entre em contacto para discutir o seu próximo projeto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info) => (
              <Card key={info.label} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <a
                    href={info.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{info.label}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu email"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Assunto"
                      {...register("subject")}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      placeholder="Sua mensagem"
                      rows={5}
                      {...register("message")}
                      className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}