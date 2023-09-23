import Link from "next/link";
// @ts-ignore
import projects from "@/config/projects.json";
import ProjectCard from "@/components/ProjectCard";

const page_title = `Project Portfolio - ${process.env.NEXT_PUBLIC_NAME}`
const page_description = 'View my portfolio of personal, school, and work projects I\'ve completed as a software engineer.'

export const metadata = {
    title: page_title,
    description: page_description,
    openGraph: {
        title: page_title,
        description: page_description,
        images: 'opengraph-image.png'
    },
    twitter: {
        title: page_title,
        description: page_description
    }
}

export default function Portfolio(){
    return <>
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/" tabIndex={0} role="link" aria-label="Home">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
                </ol>
            </nav>
            <h1 className="display-4">Project Portfolio</h1>
            <div className="d-grid gap-3">
                {projects.map((project, i) => <ProjectCard project={project} inverse={i % 2 === 1} />)}
            </div>
        </div>
    </>
}