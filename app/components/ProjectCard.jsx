import Link from "next/link";
import Image from "next/image";
import TypeIcon from "./TypeIcon";
import { ArrowRight } from "react-bootstrap-icons";

export default function ProjectCard({project, inverse}){

    const imgBreakpoint = "md"

    return <>
        <div className="card w-100 overflow-hidden">
            <div className="row g-0">
                <div className={`col-${imgBreakpoint}-7 d-flex align-items-center ${inverse ? `order-${imgBreakpoint}-2` : `order-${imgBreakpoint}-1`}`}>
                    <Link href={`/portfolio/${project.pathname}`} className="w-100" tabIndex={0} role="link" aria-label={`View ${project.name}`}>
                        <Image src={`/${project.img}`} alt={`${project.name} Thumbnail`} fill={true} className="w-100 rounded position-relative" />
                    </Link>
                </div>
                <div className={`col-${imgBreakpoint}-5 ${inverse ? `order-${imgBreakpoint}-1` : `order-${imgBreakpoint}-2`}`}>
                    <div className={`px-1 px-${imgBreakpoint}-3 pb-1 pb-lg-3 pt-3`}>
                        <div className="h3 fw-bold">{project.name}</div>
                        <div className="h5 d-flex mb-3">
                            <span className="badge rounded-pill text-bg-primary d-flex gap-1 align-items-center">
                                <TypeIcon type={project.type.group} />
                                {project.type.name}
                            </span>
                        </div>
                        <p className="lh-sm mb-2">
                            {project.description}
                        </p>
                        <Link href={`/portfolio/${project.pathname}`} className="fw-bold" tabIndex={0} role="link" aria-label={`View ${project.name}`}>Read more <ArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}