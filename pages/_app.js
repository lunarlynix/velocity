import Head from 'next/head'
import '../styles/style.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Velocity</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/maskable_icon_x48.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/maskable_icon_x48.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x384.png"></link>
        <script data-n-head="ssr" src="https://kit.fontawesome.com/c7397f6fff.js" crossorigin="anonymous"></script>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}