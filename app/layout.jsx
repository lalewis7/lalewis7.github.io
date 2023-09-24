import Link from 'next/link'
import './globals.scss'
import { Roboto, Roboto_Mono } from 'next/font/google'
import HeaderOffcanvas from './csr_components/HeaderOffcanvas'
import HeaderLink from './csr_components/HeaderLink'
import { EnvelopeFill, FiletypePdf, Github, Linkedin, Medium, BoxArrowUpRight, UniversalAccessCircle, FileEarmarkPdfFill } from 'react-bootstrap-icons'
import Script from 'next/script'
import CopyTextInput from './csr_components/CopyTextInput'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
})

const page_title = `${process.env.NEXT_PUBLIC_NAME} - Portfolio Website`
const page_description = process.env.DESCRIPTION

export const metadata = {
  title: page_title,
  description: page_description,
  metadataBase: new URL(process.env.METADATA_BASE),
  keywords: process.env.KEYWORDS.split(","),
  openGraph: {
    title: page_title,
    description: page_description,
    url: process.env.METADATA_BASE,
    siteName: process.env.NEXT_PUBLIC_NAME,
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
              &lt; {process.env.NEXT_PUBLIC_NAME} &#47;&gt;
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
                  <HeaderLink label="Resume" route="/resume" />
                </li>
                <div style={{width: "1px"}} className="d-flex align-items-center">
                  <div className="vr">

                  </div>
                </div>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="GitHub">
                    <Github />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="Email">
                    <EnvelopeFill />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="Medium">
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
                    <div className="h3 m-0">Arthur Lewis</div>
                    <div className="h6 mb-1 mb-sm-3 fw-light">Software Engineer</div>
                  </div>
                  <div className="col d-flex align-items-center align-items-md-start">
                    <span className="h4 d-inline-flex gap-4 ps-1">
                      <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="LinkedIn">
                        <Linkedin />
                      </Link>
                      <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="GitHub">
                        <Github />
                      </Link>
                      <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="Medium">
                        <Medium />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-4`}>
                <div className="h4">Sitemap</div>
                <div className="row">
                  <div className="col col-6 gap-2 d-flex flex-column">
                    <span className="d-flex"><Link href="/" className="text-reset fw-light d-inline-flex" tabIndex={0} role="link" aria-label="Home">Home</Link></span>
                    <span className="d-flex"><Link href="/portfolio" className="text-reset fw-light d-inline-flex" tabIndex={0} role="link" aria-label="Projects">Projects</Link></span>
                  </div>
                  <div className="col col-6 gap-2 d-flex flex-column">
                    <span className="d-flex"><Link href="/about" className="text-reset fw-light d-inline-flex" tabIndex={0} role="link" aria-label="About">About</Link></span>
                    <span className="d-flex"><Link href="/resume" className="text-reset fw-light d-inline-flex" tabIndex={0} role="link" aria-label="Resume">Resume</Link></span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-2`}>
                <div className="h4">Resources</div>
                <div className="row">
                  <div className="col">
                    <span>
                      <Link href={`https://drive.google.com/uc?export=download&id=${process.env.NEXT_PUBLIC_RESUME_GDRIVE_ID}`} 
                        download={`${process.env.NEXT_PUBLIC_NAME.split(" ").join("_")}_Resume.pdf`}
                        className="text-reset fw-light d-inline-flex align-items-center" tabIndex={0} role="link" aria-label="Download Resume">
                        Resume<FileEarmarkPdfFill className="ms-1" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col col-12 col-${footerBreakpoint}-6 col-lg-3`}>
                <div className="h4">Contact</div>
                <div className="row">
                  <div className="col">
                    <CopyTextInput />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-gap-1 mt-3">
              <div className="col col-12 col-md-6">
                <p className="text-secondary-emphasis m-0">
                Lanceton Arthur Lewis II &copy; 2023
                </p>
              </div>
              <div className="col col-12 col-md-6">
                <p className="text-secondary-emphasis float-md-end m-0 d-inline-flex align-items-center gap-2">
                  <UniversalAccessCircle />
                  <span>This website is <Link target="_blank" rel="noopener noreferrer" href="https://accessibe.com/accessscan?website=arthurlewis.net" 
                    tabIndex={0} className="text-reset text-decoration-underline link-offset-1" role="link" aria-label="View Resume in Google Drive">
                      ADA-compliant
                  </Link>.</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
