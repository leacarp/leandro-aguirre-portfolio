"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <nav>
            <h3 className="font-bold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  {t("nav.experience")}
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-bold mb-4">{t("footer.connect")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:leanaguirre2016@gmail.com"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leandro-aguirre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="LinkedIn (opens in new window)"
                >
                  {t("footer.linkedin")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leacarp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="GitHub (opens in new window)"
                >
                  {t("footer.github")}
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-bold mb-4">{t("footer.skills")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.skillsList.backend")}</li>
              <li>{t("footer.skillsList.typescript")}</li>
              <li>{t("footer.skillsList.databases")}</li>
              <li>{t("footer.skillsList.architecture")}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t("footer.location")}</h3>
            <p className="text-sm text-muted-foreground">San Francisco, Córdoba, AR</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Leandro Aguirre. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
