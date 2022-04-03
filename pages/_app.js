import Head from 'next/head'
import '../styles/style.scss'
import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCJLx_GiMFhDwsuZ9tRRynPejX0bsao-vM",
      authDomain: "velocity-d2bb3.firebaseapp.com",
      projectId: "velocity-d2bb3",
      storageBucket: "velocity-d2bb3.appspot.com",
      messagingSenderId: "253884187163",
      appId: "1:253884187163:web:614cb634b88adcb93ceebe"
    };

    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    getToken(messaging, { vapidKey: 'BHUNyOLzRdCCxw6NH7xYoER0VVMax9-vxQ0PXHJKo1_KiteE-GZdJ7te3ih7GCwxj1thVV9acSWu1cb4jLFcnZU' }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('LYNX: ' + currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }, [])
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
          href="/logo.svg"
          rel="icon"
          type="image/svg"
        />
        <link rel="apple-touch-icon" href="/icons/maskable_icon_x384.png"></link>
        <script data-n-head="ssr" src="https://kit.fontawesome.com/c7397f6fff.js" crossOrigin="anonymous"></script>

        {/* Notification System */}
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}