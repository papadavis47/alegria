import Head from 'next/head'
import Footer from '../Footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Alegria</title>
        <link rel="icon" href="/surfing.ico" />
      </Head>
      <main className="flex flex-col items-center flex-1 w-full px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
