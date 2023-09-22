import Link from "next/link";
// @ts-ignore
import projects from "./[name]/projects.json";
import TypeIcon from "@/components/TypeIcon";
import { ArrowRight } from "react-bootstrap-icons";
import Image from "next/image";

const page_title = 'Project Portfolio - Arthur Lewis'
const page_description = 'View my portfolio of personal, school, and work projects I\'ve completed as a software engineer.'

export const metadata = {
    title: page_title,
    description: page_description,
    openGraph: {
        title: page_title,
        description: page_description
    },
    twitter: {
        title: page_title,
        description: page_description
    }
}

export default function Portfolio(){
    const imgBreakpoint = "md"
    const ProjectCard = (project, inverse) => <>
        <div className="card w-100 overflow-hidden">
            <div className="row g-0">
                <div className={`col-${imgBreakpoint}-7 d-flex align-items-center ${inverse ? `order-${imgBreakpoint}-2` : `order-${imgBreakpoint}-1`}`}>
                    <Link href={`/portfolio/${project.pathname}`} className="w-100">
                        <Image src={`/${project.img}`} alt={project.name} fill={true} className="w-100 rounded position-relative" />
                    </Link>
                </div>
                <div className={`col-${imgBreakpoint}-5 ${inverse ? `order-${imgBreakpoint}-1` : `order-${imgBreakpoint}-2`}`}>
                    <div className={`px-1 px-${imgBreakpoint}-3 py-3`}>
                        <h3 className="fw-bold">{project.name}</h3>
                        <h5 className="d-flex">
                            <span className="badge rounded-pill text-bg-primary d-flex gap-1 align-items-center">
                                <TypeIcon type={project.type.group} />
                                {project.type.name}
                            </span>
                        </h5>
                        <p className="lh-sm">
                            {project.description}
                        </p>
                        <Link href={`/portfolio/${project.pathname}`} className="fw-bold">Read more <ArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    </>

    return <>
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
                </ol>
            </nav>
            <h1>Project Portfolio</h1>
            <div className="d-grid gap-3">
                {projects.map((project, i) => ProjectCard(project, i % 2 === 1))}
            </div>
        </div>
    </>
}