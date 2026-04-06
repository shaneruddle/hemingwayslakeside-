import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hemingwayslakeside.co.uk"),
  title: {
    default: "Hemingways Lakeside — Restaurant & Bar",
    template: "%s | Hemingways Lakeside",
  },
  description:
    "A lakeside restaurant and bar offering fresh local cuisine, craft drinks, and stunning views. Located on the shores of Loch Awe, Argyll.",
  openGraph: {
    siteName: "Hemingways Lakeside",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-bark antialiased">
        {children}
      </body>
    </html>
  );
}
