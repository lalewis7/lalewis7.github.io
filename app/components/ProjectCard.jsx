import Link from "next/link";
import Image from "next/image";
import TypeIcon from "./TypeIcon";
import { ArrowRight, BoxArrowUpRight } from "react-bootstrap-icons";
import LinkIcon from "@/components/LinkIcon";

export default function ProjectCard({project, inverse}){

    const imgBreakpoint = "md"

    return <>
        <div className="card w-100 overflow-hidden">
            <div className="row g-0">
                <div className={`col-${imgBreakpoint}-7 d-flex align-items-center ${inverse ? `order-${imgBreakpoint}-2` : `order-${imgBreakpoint}-1`}`}>
                    <Link href={`/portfolio/${project.pathname}`} className="w-100">
                        <Image src={`/${project.img}`} alt={project.name} fill={true} className="w-100 rounded position-relative" />
                    </Link>
                </div>
                <div className={`col-${imgBreakpoint}-5 ${inverse ? `order-${imgBreakpoint}-1` : `order-${imgBreakpoint}-2`}`}>
                    <div className={`px-1 px-${imgBreakpoint}-3 pb-1 pb-lg-3 pt-3`}>
                        <h3 className="fw-bold">{project.name}</h3>
                        <h5 className="d-flex mb-3">
                            <span className="badge rounded-pill text-bg-primary d-flex gap-1 align-items-center">
                                <TypeIcon type={project.type.group} />
                                {project.type.name}
                            </span>
                        </h5>
                        <p className="lh-sm mb-2">
                            {project.description}
                        </p>
                        <Link href={`/portfolio/${project.pathname}`} className="fw-bold">Read more <ArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}