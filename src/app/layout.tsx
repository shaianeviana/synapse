import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ConnectHeader from "@/componet/ConnectHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synapse",
  description: "A simple interface to make swaps with Monad",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        inter.className,
        "w-screen h-screen",
        "bg-gradient-to-br",
        "from-white",
        "to-pink-100",
        "flex flex-col flex-grow items-center"
        )}>
        <ConnectHeader />
          <div
            className={cn(
              "w-full flex-grow",
              "flex flex-col justify-center items-center"
            )}
          >
            {children}
          </div>
        </body>
    </html>
  );
}
