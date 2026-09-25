import Link from "next/link"
import "./globals.css"
import { Inter, Newsreader } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
})

export const metadata = {
  title: "Neelemanet Blog",
  description: "Neelemanet Blog",
  icons: [],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans ${inter.variable} ${newsreader.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col min-h-screen">
            <header className="flex items-center justify-between mb-12">
              <Link
                href="/"
                className="font-semibold tracking-tight text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Neelemanet
              </Link>
              <div className="flex items-center gap-6">
                <nav className="text-sm font-medium space-x-6 text-slate-600 dark:text-slate-400">
                  <Link
                    href="/"
                    className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                  >
                    About
                  </Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="mt-16 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>© {new Date().getFullYear()} Neelemanet</span>
              <a
                href="https://github.com/icanthink42"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                GitHub
              </a>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
