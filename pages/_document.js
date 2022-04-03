import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body class="font-inter antialiased bg-slate-100 text-slate-600 sidebar-expanded">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}