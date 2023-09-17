import Link from 'next/link'
import './globals.scss'
import { Roboto } from 'next/font/google'
import HeaderOffcanvas from './csr_components/HeaderOffcanvas'
import HeaderLink from './csr_components/HeaderLink'
import { FileEarmarkPerson, FilePdf, FilePdfFill, FiletypePdf, Github, Linkedin, Medium } from 'react-bootstrap-icons'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata = {
  title: 'Arthur Lewis',
  description: 'Software engineer',
}

export default function RootLayout({ children }) {

  const mobileBreakpoint = "md"

  return (
    <html lang="en">
      <body className={`${roboto.className} vh-100 d-flex flex-column`} data-bs-theme="dark">
        <header className={`navbar navbar-expand-${mobileBreakpoint} sticky top`}>
          <nav className="container">
            <Link href="/" className="navbar-brand">
              Arthur Lewis
            </Link>
            <div className={`d-none d-${mobileBreakpoint}-block navbar-collapse`}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <HeaderLink label="About" route="/about" />
                </li>
                <li className="nav-item">
                  <HeaderLink label="Projects" route="/portfolio" />
                </li>
                <li className="nav-item">
                  <HeaderLink label="Contact" route="/contact" />
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arthur-lewis/" className="nav-link d-inline-flex">
                    <Linkedin />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href="https://github.com/lalewis7" className="nav-link d-inline-flex">
                    <Github />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@arthur.lewis" className="nav-link d-inline-flex">
                    <Medium />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@arthur.lewis" className="nav-link d-flex align-items-center link-primary">
                    Resume<FiletypePdf className="ms-1" />
                  </Link>
                </li>
              </ul>
            </div>
            <HeaderOffcanvas breakpoint={mobileBreakpoint} />
          </nav>
        </header>
        <main className="flex-grow-1">
          {children}
        </main>
        <footer>
          <div className="container">
            <p>Footer</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
