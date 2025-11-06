import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "DesignArena Dashboard",
  description: "Atualização completa de design e funcionalidades para o seu projeto.",
  openGraph: {
    title: "DesignArena Dashboard",
    description: "Atualização completa de design e funcionalidades para o seu projeto.",
    url: "https://agentic-40e30513.vercel.app",
    siteName: "DesignArena",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignArena Dashboard",
    description: "Atualização completa de design e funcionalidades para o seu projeto."
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} antialiased bg-surface text-ink`}>
        <div className="app-grid">
          <header className="app-header">
            <span className="brand-badge">DesignArena</span>
            <nav className="nav-links">
              <a href="#visao-geral">Visão Geral</a>
              <a href="#roadmap">Roadmap</a>
              <a href="#insights">Insights</a>
              <a href="#contato">Contato</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="app-footer" id="contato">
            <div>
              <span className="brand-badge small">DesignArena</span>
              <p className="footer-text">
                Plataforma criada para ajudar times a evoluírem rápido. Transforme ideias em experiências digitais
                marcantes com o nosso hub de design e desenvolvimento.
              </p>
            </div>
            <div className="footer-meta">
              <p>© {new Date().getFullYear()} DesignArena. Todos os direitos reservados.</p>
              <div className="footer-links">
                <a href="#roadmap">Roadmap</a>
                <a href="#insights">Relatórios</a>
                <a href="mailto:hello@designarena.com">Contato</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
