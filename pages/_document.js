import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Qurashi Akeel\'s Portfolio | Blog',
    description: 'The portfolio website for Qurashi Akeel',
    image: '/images/logo.png',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
