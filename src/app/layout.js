import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Portfolio | Theo Kawalisa Pinem",
  description: "Computer Engineering Undergraduate. AI, IoT, and Robotics Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <div className="scroll-progress-bar"></div>
          <LenisProvider>
              {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
