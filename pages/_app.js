import React from 'react'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.scss'
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp
