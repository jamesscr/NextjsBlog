import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="w-full bg-transparent">
        <div className="mx-auto max-w-7xl px-4">
          <hr className="border-t border-blue-400" />
        </div>
      </div>

      <footer className="bg-transparent py-6 text-center text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <p className="mt-2 text-xs text-white">
            &copy; {new Date().getFullYear()} GraphQL Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
