import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/project.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '@/context/AppContext'

export default function App({ Component, pageProps }: AppProps) {
 
 
  return(
    <AppContextProvider>
        <Component {...pageProps} />
    </AppContextProvider>
  )


}
