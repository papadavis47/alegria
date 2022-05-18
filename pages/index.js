import Head from 'next/head'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My TailwindCSS / Next.js Starter</title>
        <link rel="icon" href="/surfing.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1>Alegria</h1>
        <h2>The things that make me happy</h2>
      </main>
      <Footer />
    </div>
  )
}

export default Home
