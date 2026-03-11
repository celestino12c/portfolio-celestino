import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import { Navigation } from "@/components/Navigation";
import { MiniChat } from "@/components/MiniChat";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Celestino Tchacamba | Software Developer",
  description: "Programador de Software especializado em Node.js, React e sistemas de gestão. Experiência em saúde e tecnologia.",
  keywords: ["desenvolvedor", "Node.js", "React", "Next.js", "Angola", "software", "programador"],
  authors: [{ name: "Celestino Tchacamba" }],
  openGraph: {
    title: "Celestino Tchacamba - Portfolio",
    description: "Software Developer & Problem Solver",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Navigation />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <MiniChat />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}