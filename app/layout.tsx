import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leandro Aguirre | Portfolio",
  description:
    "Software Developer with a strong focus on back-end development. Working with Nest.js, TypeScript, MongoDB, PostgreSQL and Vue.js to build scalable applications. Passionate about clean code principles, design patterns, and automation.",
  keywords: [
    "Software Developer",
    "Backend Developer",
    "Node.js Developer",
    "TypeScript",
    "Vue.js",
    "Nest.js",
    "MongoDB",
    "PostgreSQL",
    "Full Stack",
    "REST API",
    "Clean Code",
    "SOLID",
    "leandro aguirre",
    "leandro aguirre developer",
    "leandro aguirre portfolio",
    "leacarp"
  ],
  generator: "v0.app",
  openGraph: {
    title: "Leandro Aguirre | Software Developer",
    description:
      "Software Developer with a strong focus on back-end development. Working with Node.js, TypeScript, MongoDB, and Vue.js to build scalable applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Aguirre | Software Developer",
    description:
      "Software Developer focused on back-end development with Node.js, TypeScript, MongoDB, and Vue.js.",
  },
  alternates: {},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leandro Aguirre",
              jobTitle: "Software Developer",
              email: "leanaguirre2016@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
              },
              sameAs: ["https://www.linkedin.com/in/leandro-aguirre/", "https://github.com/leacarp"],
              knowsAbout: ["Node.js", "TypeScript", "Vue.js", "MongoDB", "PostgreSQL", "Nest.js", "REST API", "Clean Code", "SOLID"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
