import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import '../styles/globals.css';
import Navbar from "@/components/Navbar/Navbar";
import {BasketProvider} from "@/context/BasketContext/BasketContext";

export default function App({Component, pageProps}: AppProps) {
    return (
            <BasketProvider>
                <Navbar/>
                <Component {...pageProps} />
            </BasketProvider>
    )
}
