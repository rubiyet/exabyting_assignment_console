import '@/styles/globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer';
import 'typeface-roboto';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
