"use client";

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import Image from "next/image";
import LogoImage from "@/assets/synapse.png";
import { cn } from "@/lib/utils";
import { ThirdwebProvider} from "thirdweb/react";

 
const client = createThirdwebClient({
  clientId: "5ec8b2a41c8a4a1d6c4c9c45356370fa",
});
const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

export default function ConnectHeader() {
    return (
      <header className={cn("w-[1200px] h-16 px-10", "flex items-center space-x-4")}>
        <Image src={LogoImage} alt="Synapse Logo" width={60} height={50} />
        <ul className="flex flex-row space-x-4 select-none cursor-pointer">
          <li className="text-primary-custom hover:text-secondary-custom">Swap</li>
          <li className="text-primary-custom hover:text-secondary-custom">Pool</li>
          <li className="text-primary-custom hover:text-secondary-custom">About</li>
          <li className="text-primary-custom hover:text-secondary-custom">Partners</li>
        </ul>
        <ThirdwebProvider>
          <ConnectButton client={client} wallets={wallets} />
        </ThirdwebProvider>
      </header>
    );
  }

  