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
            <Link href="/privacy-policy">
              <a className="transition hover:text-blue-300">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-use">
              <a className="transition hover:text-blue-300">Terms of Use</a>
            </Link>
            <Link href="/contact">
              <a className="transition hover:text-blue-300">Contact</a>
            </Link>
          </div>
          <p className="mt-2 text-xs text-white">
            <a
              href="https://vivilx.com"
              className="transition hover:text-blue-300"
            >
              Vivilx
            </a>{' '}
            2021 – {new Date().getFullYear()} &copy; GraphQL Blog. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
