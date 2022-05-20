import Head from 'next/head'
import Footer from '../Footer'
import Navbar from '../Navbar'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Alegria</title>
        <link rel="icon" href="/alegria.ico" />
      </Head>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
