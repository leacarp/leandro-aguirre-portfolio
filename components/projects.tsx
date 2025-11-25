"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Projects() {
  const { t, language } = useLanguage()
  
  const projects = [
    {
      title: "RAG System with PostgreSQL",
      description: language === "es" 
        ? "Sistema de recuperación de información legal con IA. Procesa documentos de Google Drive recursivamente, crea embeddings vectoriales en PostgreSQL, y utiliza un agente especializado que responde consultas legales basándose en la documentación cargada."
        : "Legal information retrieval system with AI. Recursively processes Google Drive documents, creates vector embeddings in PostgreSQL, and uses a specialized agent to answer legal queries based on loaded documentation.",
      tech: ["n8n", "PostgreSQL", "Vector DB", "Google Drive API", "AI/LLM", "RAG"],
      image: "/n8n_rag_system_postgreSQL.jpg",
      category: t("projects.categories.personal"),
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "MCP Agent - Gmail & Calendar",
      description: language === "es"
        ? "Agente inteligente con dos MCPs (Model Context Protocols) que gestionan Gmail y Google Calendar. Crea, lee, organiza y elimina eventos/correos con priorización automática. Incluye validación humana antes de enviar emails."
        : "Intelligent agent with two MCPs (Model Context Protocols) managing Gmail and Google Calendar. Creates, reads, organizes, and deletes events/emails with automatic prioritization. Includes human validation before sending emails.",
      tech: ["n8n", "MCP", "Gmail API", "Google Calendar API", "AI Agent"],
      image: "/agente_mcp_gmail_calendar.jpg",
      category: t("projects.categories.personal"),
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Webhook - Vacation Request System",
      description: language === "es"
        ? "Sistema automatizado de aprobación de vacaciones. Valida días disponibles en base de datos, gestiona flujo de aprobación con RRHH, crea eventos en Calendar automáticamente, y envía notificaciones por email según el estado de la solicitud."
        : "Automated vacation approval system. Validates available days in database, manages approval workflow with HR, automatically creates Calendar events, and sends email notifications based on request status.",
      tech: ["n8n", "Webhooks", "PostgreSQL", "Gmail API", "Google Calendar API"],
      image: "/webhook_solicitud_vacations.jpg",
      category: t("projects.categories.personal"),
      color: "from-amber-500 to-orange-600",
    },
    {
      title: t("projects.list.vortia.title"),
      description: t("projects.list.vortia.description"),
      tech: ["Nuxt.js", "Vue.js", "JavaScript", "CSS"],
      image: "vortia_image_cap.png",
      liveUrl: "https://vortia.com.ar/",
      category: t("projects.categories.professional"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("projects.list.rappi.title"),
      description: t("projects.list.rappi.description"),
      tech: ["Nest.js", "TypeScript", "MongoDB", "Vue.js", "JavaScript" , "Tailwind"],
      githubUrl: "https://github.com/leacarp/rappi-tp/tree/develop",
      githubFrontendUrl: "https://github.com/leacarp/rappi-frontend-tp/tree/develop",
      category: t("projects.categories.team"),
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t("projects.list.pokemon.title"),
      description: t("projects.list.pokemon.description"),
      tech: ["TypeScript", "Vue.js", "Vitest", "Tailwind" ],
      githubFrontendUrl: "https://github.com/leacarp/who-is-that-pokemon",
      liveUrl: "https://who-is-that-pokemon-ruby.vercel.app/",
      category: t("projects.categories.personal"),
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("projects.list.chat.title"),
      description: t("projects.list.chat.description"),
      tech: ["TypeScript", "Vue.js", "Vitest", "Tailwind"],
      githubFrontendUrl: "https://github.com/leacarp/project-chat-api",
      liveUrl: "https://project-chat-api.vercel.app",
      category: t("projects.categories.personal"),
      color: "from-orange-500 to-red-500",
    },
    {
      title: t("projects.list.marathon.title"),
      description: t("projects.list.marathon.description"),
      tech: ["Nest.js", "TypeScript", "Vue.js", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com/leacarp/sistema-maraton-fullstack",
      githubFrontendUrl: "https://github.com/leacarp/sistema-maraton-fullstack",
      category: t("projects.categories.academic"),
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {t("projects.title")}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("projects.titleHighlight")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <motion.div
                className="relative h-full p-6 bg-card rounded-lg border border-border overflow-hidden group cursor-pointer"
                whileHover={{ y: -8, borderColor: "var(--primary)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Project Image */}
                  {project.image && (
                    <div className="mb-4 -mx-6 -mt-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 text-xs bg-secondary/50 text-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>{t("projects.links.backend")}</span>
                      </motion.a>
                    )}
                    {project.githubFrontendUrl && (
                      <motion.a
                        href={project.githubFrontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 className="w-4 h-4" />
                        <span>{t("projects.links.frontend")}</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t("projects.links.live")}</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
