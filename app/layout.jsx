import Link from 'next/link'
import './globals.scss'
import { Roboto, Roboto_Mono } from 'next/font/google'
import HeaderOffcanvas from './csr_components/HeaderOffcanvas'
import HeaderLink from './csr_components/HeaderLink'
import { EnvelopeFill, FiletypePdf, Github, Linkedin, Medium } from 'react-bootstrap-icons'
import Script from 'next/script'
import Head from 'next/head'
import CopyTextInput from './csr_components/CopyTextInput'

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

  const mobileBreakpoint = "lg"
  const footerBreakpoint = "md"

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
                  <Link target="_blank" rel="noopener noreferrer" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="nav-link d-inline-flex">
                    <EnvelopeFill />
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
            <div className="row row-gap-3">
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-3 d-flex flex-column`}>
                <div className="row">
                  <div className="col col-md-12">
                    <h3 className="m-0">Arthur Lewis</h3>
                    <h6 className="mb-1 mb-sm-3 fw-light">Software Engineer</h6>
                  </div>
                  <div className="col d-flex align-items-center align-items-md-start">
                    <span className="h4 d-inline-flex gap-4 ps-1">
                      <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex">
                        <Linkedin />
                      </Link>
                      <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex">
                        <Github />
                      </Link>
                      <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex">
                        <Medium />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-4`}>
                <h4>Sitemap</h4>
                <div className="row">
                  <div className="col col-6 gap-2 d-flex flex-column">
                    <span className="d-flex"><Link href="/" className="text-reset fw-light d-inline-flex">Home</Link></span>
                    <span className="d-flex"><Link href="/portfolio" className="text-reset fw-light d-inline-flex">Projects</Link></span>
                  </div>
                  <div className="col col-6 gap-2 d-flex flex-column">
                    <span className="d-flex"><Link href="/about" className="text-reset fw-light d-inline-flex">About</Link></span>
                    <span className="d-flex"><Link href="/resume" className="text-reset fw-light d-inline-flex">Resume</Link></span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-2`}>
                <h4>Resources</h4>
                <div className="row">
                  <div className="col">
                    <span>
                      <Link target="_blank" rel="noopener noreferrer" href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_GDRIVE_ID}/view?usp=sharing`} className="text-reset fw-light d-inline-flex align-items-center">
                        Resume<FiletypePdf className="ms-1" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-3`}>
                <h4>Contact</h4>
                <div className="row">
                  <div className="col">
                    <CopyTextInput />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p className="text-secondary">
                Lanceton Arthur Lewis II &copy; 2023
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
