"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: t("about.expertise.api.title"),
      description: t("about.expertise.api.description"),
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: t("about.expertise.frontend.title"),
      description: t("about.expertise.frontend.description"),
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: t("about.expertise.architecture.title"),
      description: t("about.expertise.architecture.description"),
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: t("about.expertise.quality.title"),
      description: t("about.expertise.quality.description"),
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: t("about.expertise.automation.title"),
      description: t("about.expertise.automation.description"),
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: t("about.expertise.learning.title"),
      description: t("about.expertise.learning.description"),
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              {t("about.title")}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("about.titleHighlight")}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.intro")}{" "}
              <span className="font-semibold text-foreground">{t("about.introHighlight")}</span>{t("about.intro2")}{" "}
              <span className="font-semibold text-foreground">{t("about.degree")}</span> {t("about.thesis")}{" "}
              <span className="font-semibold text-foreground">{t("about.engineering")}</span>{t("about.engineering2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.experience")} <span className="font-semibold text-foreground">{t("about.experienceHighlight")}</span>{t("about.experience2")}{" "}
              <span className="font-semibold text-foreground">{t("about.cleanCode")}</span>{t("about.cleanCode2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.learning")}{" "}
              <span className="font-semibold text-foreground">{t("about.learningTech")}</span>{t("about.learning2")}{" "}
              <span className="font-semibold text-foreground">{t("about.hobbies")}</span>{t("about.hobbies2")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t("about.coreExpertise")}</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">{t("about.quickInfo")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: t("about.info.location"), value: "San Francisco, Córdoba, AR", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: t("about.info.email"),
                  value: "leanaguirre2016@gmail.com",
                  link: "mailto:leanaguirre2016@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: t("about.info.phone"),
                  value: "+54 9 3564 32-7910",
                  link: "tel:+5493564327910",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                { label: t("about.info.status"), value: t("about.info.statusValue"), icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
