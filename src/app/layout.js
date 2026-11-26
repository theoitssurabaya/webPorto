import { Toaster } from "sonner";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  metadataBase: new URL("https://theoitssurabaya.github.io"),
  title: "Portfolio | Theo Kawalisa Pinem",
  description: "Computer Engineering student experienced in full-stack IoT, edge AI, and SCADA. Proven leader in deploying hardware-to-cloud pipelines and scalable networks.",
  openGraph: {
    title: "Portfolio | Theo Kawalisa Pinem",
    description: "Computer Engineering student experienced in full-stack IoT, edge AI, and SCADA. Proven leader in deploying hardware-to-cloud pipelines and scalable networks.",
    url: "https://theoitssurabaya.github.io",
    siteName: "Theo's Portfolio",
    images: [
      {
        url: "/assets/hero/foto-diri-clean.png",
        width: 800,
        height: 800,
        alt: "Theo Kawalisa Pinem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Theo Kawalisa Pinem",
    description: "Computer Engineering student experienced in full-stack IoT, edge AI, and SCADA. Proven leader in deploying hardware-to-cloud pipelines and scalable networks.",
    images: ["/assets/hero/foto-diri-clean.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Theo Kawalisa Pinem",
  url: "https://theoitssurabaya.github.io",
  email: "mailto:theopinem05@gmail.com",
  jobTitle: "Computer Engineering Student & Full-Stack IoT / OT Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institut Teknologi Sepuluh Nopember",
  },
  sameAs: [
    "https://github.com/theoitssurabaya",
    "https://www.linkedin.com/in/theopinem/",
    "https://www.instagram.com/pinemtheo/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                        m.target.removeAttribute('bis_skin_checked');
                      }
                    }
                  }).observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
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

