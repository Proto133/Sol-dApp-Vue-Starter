// Un-Comment if you want to -- example use in SolflareWalletAdapter() below.
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base" 

import {
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    LedgerWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

export const walletOptions = {
    wallets: [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter(/*{ network: WalletAdapterNetwork.Devnet } <<< Comment back in if you want to */),
        new LedgerWalletAdapter(),
    ],
    autoConnect: true,
}