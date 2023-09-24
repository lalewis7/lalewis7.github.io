import Link from "next/link";
import ResumePreview from "./ResumePreview";
import { Download } from "react-bootstrap-icons";

const page_title = `Resume - ${process.env.NEXT_PUBLIC_NAME}`

export const metadata = {
    title: page_title,
    openGraph: {
        title: page_title,
        images: 'opengraph-image.png'
    },
    twitter: {
        title: page_title,
    }
}

export default function Resume(){
    return <>
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/" tabIndex={0} role="link" aria-label="Home">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Resume</li>
                </ol>
            </nav>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="display-4 m-0">Resume</h1>
                <div>
                    <Link href={`https://drive.google.com/uc?export=download&id=${process.env.NEXT_PUBLIC_RESUME_GDRIVE_ID}`} 
                        download={`${process.env.NEXT_PUBLIC_NAME.split(" ").join("_")}_Resume.pdf`} 
                        className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2" tabIndex={0} role="link" aria-label="Download Resume">
                            Download<Download />
                    </Link>
                </div>
            </div>
            <ResumePreview />
            <noscript>
                <div style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    paddingTop: "128%"
                }}>
                    <iframe src={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_GDRIVE_ID}/preview`} title="Resume Preview" allow="autoplay" style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%"
                    }}></iframe>
                </div>
            </noscript>
        </div>
    </>
}