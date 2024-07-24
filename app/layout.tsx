import { PropsWithChildren } from "react";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oregon.anmiller.com"),
  title: "Monitoring At-Risk Old Growth Forests in Oregon",
  description:
    "Where are the Old Growth forests in Oregon, and where are they most at risk of timber harvest?",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className="w-screen font-normal !text-neutral-800 antialiased"
      lang="en"
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
