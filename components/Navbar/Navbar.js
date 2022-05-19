import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/">
              <a className="flex items-center px-2 py-4">
                <Image src="/images/logo.png" width={60} height={60} />
                <span className="ml-4 text-lg font-bold text-orange-400 uppercase">
                  alegria
                </span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a>About</a>
            </Link>
            <Link href="#">
              <a>Gratitude List</a>
            </Link>
            <Link href="#">
              <a>Inspirations</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
