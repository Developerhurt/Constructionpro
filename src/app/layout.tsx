import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "BUILDINGX — Modern Construction",
  description: "Ongoing & upcoming building projects. Design-build. On-time. Gen-Z clean vibes.",
  openGraph: {
    title: "BUILDINGX — Modern Construction",
    description: "Ongoing & upcoming building projects.",
    images: [{ url: "/og.jpg" }],
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
