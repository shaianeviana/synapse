import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LogoImage from "@/assets/synapse.png";

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
          <header className={cn(
            "w-[1200px] h-16 px-10",
            "flex items-center space-x-4",
          )}>
            <Image src={LogoImage} alt="Synapse Logo" width={60} height={50}/>
            <ul className="flex flex-row space-x-4 select-none cursor-pointer">
              <li className="text-primary-custom hover:text-secondary-custom">Swap</li>
              <li className="text-primary-custom hover:text-secondary-custom">Pool</li>
              <li className="text-primary-custom hover:text-secondary-custom">About</li>
              <li className="text-primary-custom hover:text-secondary-custom">Partners</li>
            </ul>
          </header>
          <div className={cn(
            "w-full flex-grow",
            "flex flex-col justify-center items-center"
          )}>
            {children}
          </div>
        </body>
    </html>
  );
}
