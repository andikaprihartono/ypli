import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from "@next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['200','300','400','500','600','700','800','900','1000'], 
});


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return(
    <main className={nunito.className}>
    <Component {...pageProps} />
    </main>
  ) 
}
