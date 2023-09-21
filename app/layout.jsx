import Link from 'next/link'
import './globals.scss'
import { Roboto, Roboto_Mono } from 'next/font/google'
import HeaderOffcanvas from './csr_components/HeaderOffcanvas'
import HeaderLink from './csr_components/HeaderLink'
import { EnvelopeFill, FiletypePdf, Github, Linkedin, Medium } from 'react-bootstrap-icons'
import Script from 'next/script'
import Head from 'next/head'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Arthur Lewis',
  description: 'Hi! My name is Arthur Lewis, and I design and create software using the latest frameworks and technologies to positively impact people.',
}

export default function RootLayout({ children }) {

  const mobileBreakpoint = "md"

  return (
    <html lang="en">
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-6DVKDWY94S" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6DVKDWY94S');
        `}
      </Script>
      <body className={`${roboto.className} vh-100 d-flex flex-column`} data-bs-theme="dark">
        <header className={`navbar navbar-expand-${mobileBreakpoint} sticky-top bg-body-tertiary`}>
          <nav className="container">
            <Link href="/" className={`navbar-brand ${roboto_mono.className}`}>
              &lt; Arthur Lewis &#47;&gt;
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
                  <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1hu3biR2yxbPmyK9TpuIm4Ps99NtufUKK/view?usp=sharing" className="nav-link d-flex align-items-center link-primary">
                    Resume<FiletypePdf className="ms-1" />
                  </Link>
                </li>
              </ul>
            </div>
            <HeaderOffcanvas breakpoint={mobileBreakpoint} />
          </nav>
        </header>
        <main className="flex-grow-1 container pt-3">
          {children}
        </main>
        <footer className="mt-5">
          <div className="container py-4">
            <div className="row">
              <div className="col">
                <ul className="d-flex flex-wrap justify-content-center gap-4 h5 m-0">
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
                    <Link target="_blank" rel="noopener noreferrer" href="mailto:l.arthur.lewis7@gmail.com" className="nav-link d-inline-flex d-flex align-items-center gap-2">
                      <EnvelopeFill />
                      <span className="h6 m-0">L.Arthur.Lewis7@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
