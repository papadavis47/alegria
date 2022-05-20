import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg shadow-orange-500/40">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <a className="flex items-center px-2 py-2">
                  <Image src="/images/logo.png" width={65} height={65} />
                  <span className="ml-4 text-2xl font-black text-orange-400">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
