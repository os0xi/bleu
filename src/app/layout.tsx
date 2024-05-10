import type { Metadata } from "next";
import { Kodchasan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/NextThemeProvider";
import NavBar from "@/components/NavBar";

const inter = Kodchasan({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Bleu Elefant",
  description: "..wouldn't ya?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " overflow-x-hidden min-h-screen flex flex-col justify-between "}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          {/* <Suspense>
            <TeamToolbar />
          </Suspense> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
