import Head from 'next/head'

import '../styles/base.css'

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content={title || `once.`} />
        <meta property="og:site_name" content="once." />
        <meta property="og:description" content={og ? og.description : `Writing about the tips I usually share on Twitter and some more.`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@telmo" />
        <meta property="og:image" content={og ? og.image : `https://telmo.im/og/default.png`} />
        <meta name="monetization" content="$ilp.uphold.com/iRX2HpJ4FRQ3" />

        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <title>{title || `once.`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
