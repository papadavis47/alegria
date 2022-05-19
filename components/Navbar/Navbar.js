import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/">
              <a className="flex items-center px-2 py-2">
                <Image src="/images/logo.png" width={60} height={60} />
                <span className="ml-4 text-xl font-bold text-orange-400">
                  alegría
                </span>
              </a>
            </Link>
          </div>
          <div className="hidden space-x-3 md:flex">
            <Link href="#">
              <a className="px-2 py-6 text-xl font-bold text-orange-400 border-b-4 border-orange-400">
                Story
              </a>
            </Link>
            <Link href="#">
              <a className="px-2 py-6 text-xl font-bold text-orange-400">
                Gratitude
              </a>
            </Link>
            <Link href="#">
              <a className="px-2 py-6 text-xl font-bold text-orange-400">
                Inspirations
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
