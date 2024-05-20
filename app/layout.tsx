import "./globals.css";
import "../FontAwesome.Pro.6.4.2/css/all.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Task Management",
  description:
    "This project is an advanced task management application designed to help users efficiently organize their daily tasks and activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme=""
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
