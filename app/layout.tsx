import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PanamaDogs — Find your match",
  description:
    "Take a 2-minute quiz and get matched with a rescue dog from our shelter in Panama. Foster, adopt, or donate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans">
        <header className="border-b border-stone-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-emerald-800">
              <span>🐾</span>
              <span>PanamaDogs</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-stone-600">
              <Link href="/dogs" className="hover:text-emerald-800">
                Meet the dogs
              </Link>
              <Link
                href="/quiz"
                className="rounded-full bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800"
              >
                Take the quiz
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-stone-200 bg-white py-8 text-center text-sm text-stone-500">
          <p>Made with 🐾 for a shelter in Panama, home to ~80 dogs waiting for people like you.</p>
        </footer>
      </body>
    </html>
  );
}
