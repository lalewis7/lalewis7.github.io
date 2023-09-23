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

const page_title = 'Arthur Lewis'
const page_description = 'Hi! My name is Arthur Lewis, and my mission is to design and create software using the latest frameworks and technologies to positively impact people.'

export const metadata = {
  title: page_title,
  description: page_description,
  metadataBase: new URL(process.env.METADATA_BASE),
  keywords: ['Lanceton', 'Arthur', 'Lewis', 'Portfolio', 'Resume', 'LinkedIn', 'GitHub', 'Medium', 'NJ', 'Lehigh'],
  openGraph: {
    title: page_title,
    description: page_description,
    url: process.env.METADATA_BASE,
    siteName: 'Arthur Lewis',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: page_title,
    description: page_description
  }
}

export default function RootLayout({ children }) {

  const mobileBreakpoint = "md"

  return (
    <html lang="en">
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA4_CODE}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA4_CODE}');
        `}
      </Script>
      <body className={`${roboto.className} vh-100 d-flex flex-column pt-5`} data-bs-theme="dark">
        <header className={`navbar navbar-expand-${mobileBreakpoint} fixed-top`}>
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
                  <Link href="/resume" className="nav-link d-flex align-items-center">
                    Resume<FiletypePdf className="ms-1" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex">
                    <Linkedin />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex">
                    <Github />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex">
                    <Medium />
                  </Link>
                </li>
              </ul>
            </div>
            <HeaderOffcanvas breakpoint={mobileBreakpoint} />
          </nav>
        </header>
        <main className="flex-grow-1 container" style={{paddingTop: "2.25rem"}}>
          {children}
        </main>
        <footer className="mt-5">
          <div className="container py-4">
            <div className="row">
              <div className="col">
                <ul className="d-flex flex-wrap justify-content-center gap-4 h5 m-0">
                  <li className="nav-item">
                    <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex">
                      <Linkedin />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex">
                      <Github />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex">
                      <Medium />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link target="_blank" rel="noopener noreferrer" href={`mailto:${process.env.EMAIL}`} className="nav-link d-inline-flex d-flex align-items-center gap-2">
                      <EnvelopeFill />
                      <span className="h6 m-0">{process.env.EMAIL}</span>
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
