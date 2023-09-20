import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { BoxArrowUpRight, FiletypePdf, Github, Linkedin, Medium } from "react-bootstrap-icons";

export default function Contact(){
    return <>
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
            <h1>Contact Information</h1>
            <p>
                I'm currently open to new work opportunities, so if you like my work and are interest in chatting{' '}
                email me at <Link href="mailto:l.arthur.lewis7@gmail.com">l.arthur.lewis7@gmail.com</Link>{' '}
                or connect with me on{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arthur-lewis/" className="d-inline-flex align-items-center gap-1">
                    LinkedIn<BoxArrowUpRight />
                </Link>.
            </p>
            <h3 className="mb-3">
                Other Links
            </h3>
            <div className="d-flex flex-column gap-3">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arthur-lewis/" className="text-reset w-fit-content">
                    <h4 className="d-flex align-items-center gap-3">
                        <Linkedin />
                        <span className="h5 m-0 d-flex align-items-center gap-2">LinkedIn<BoxArrowUpRight /></span>
                    </h4>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/lalewis7" className="text-reset w-fit-content">
                    <h4 className="d-flex align-items-center gap-3">
                        <Github />
                        <span className="h5 m-0 d-flex align-items-center gap-2">GitHub<BoxArrowUpRight /></span>
                    </h4>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@arthur.lewis" className="text-reset w-fit-content">
                    <h4 className="d-flex align-items-center gap-3">
                        <Medium />
                        <span className="h5 m-0 d-flex align-items-center gap-2">Medium (Blogs)<BoxArrowUpRight /></span>
                    </h4>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1hu3biR2yxbPmyK9TpuIm4Ps99NtufUKK/view?usp=sharing" className="text-reset w-fit-content">
                    <h4 className="d-flex align-items-center gap-3">
                        <FiletypePdf />
                        <span className="h5 m-0 d-flex align-items-center gap-2">Resume<BoxArrowUpRight /></span>
                    </h4>
                </Link>
            </div>
        </div>
    </>
}