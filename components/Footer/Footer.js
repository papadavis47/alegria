import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center gap-2 text-orange-400"
        href="https://github.com/papadavis47"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by John William Davis
      </a>
    </footer>
  )
}

export default Footer
