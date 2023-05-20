import '../styles/globals.css'
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

// import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
