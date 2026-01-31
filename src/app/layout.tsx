import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Egyptian Metal Works",
  description: "Industrial manufacturing and maintenance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
