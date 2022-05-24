import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="sticky top-0 shadow-lg bg-white/90 shadow-orange-500/40">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <a className="flex items-center px-2 py-2">
                  <Image src="/images/logo.png" width={65} height={65} />
                  <span className="ml-4 text-2xl italic font-black text-orange-400">
                    alegría
                  </span>
                </a>
              </Link>
            </div>
            <div className="items-center hidden space-x-3 md:flex">
              <Link href="#">
                <a className="px-2 py-6 text-xl font-bold text-orange-400 border-orange-400 hover:border-b-2">
                  Gratitude
                </a>
              </Link>
              <Link href="#">
                <a className="px-2 py-6 text-xl font-bold text-orange-400 border-orange-400 hover:border-b-2">
                  Dreams
                </a>
              </Link>
              <Link href="#">
                <a className="px-2 py-6 text-xl font-bold text-orange-400 border-orange-400 hover:border-b-2">
                  Inspirations
                </a>
              </Link>
              <Link href="#">
                <a className="px-2 py-6 text-xl font-bold text-orange-400 border-orange-400 hover:border-b-2">
                  Actions
                </a>
              </Link>
            </div>
          </div>
          <div className="self-center hidden space-x-3 justify-self-end lg:flex">
            <Link href="/login">
              <a>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-white capitalize bg-orange-400 border border-transparent rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                >
                  log in
                </button>
              </a>
            </Link>
            <Link href="/signup">
              <a>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-white capitalize bg-orange-400 border border-transparent rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                >
                  sign up
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
