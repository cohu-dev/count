import '../styles/globals.css'
import type { AppProps } from 'next/app'
import usePageView from '../hooks/usePageView'
import { SEO } from '../components/function/SEO'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <ThemeProvider attribute="class">
      <SEO path="/" noTitleTemplate={true} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
