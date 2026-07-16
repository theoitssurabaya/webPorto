import { Toaster } from "sonner";
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
  metadataBase: new URL("https://theoitssurabaya.github.io"),
  title: "Portfolio | Theo Kawalisa Pinem",
  description: "Computer Engineering Undergraduate. AI, IoT, and Robotics Enthusiast.",
  openGraph: {
    title: "Portfolio | Theo Kawalisa Pinem",
    description: "Computer Engineering Undergraduate. AI, IoT, and Robotics Enthusiast.",
    url: "https://theoitssurabaya.github.io",
    siteName: "Theo's Portfolio",
    images: [
      {
        url: "/assets/profile.jpeg",
        width: 800,
        height: 600,
        alt: "Theo Kawalisa Pinem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Theo Kawalisa Pinem",
    description: "Computer Engineering Undergraduate. AI, IoT, and Robotics Enthusiast.",
    images: ["/assets/profile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Pixelify+Sans:wght@400;500;600;700&family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <Toaster position="bottom-right" theme="dark" richColors />
          <LenisProvider>
              {children}
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
