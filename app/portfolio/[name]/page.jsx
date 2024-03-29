import Link from "next/link"
import config from '@/config'
import { BoxArrowUpRight } from "react-bootstrap-icons";
// markdown -> html
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path';
import { promises as fs } from 'fs';
import TypeIcon from "@/components/TypeIcon";
import Image from "next/image";
import LinkIcon from "@/components/LinkIcon";

export async function generateStaticParams() {
    return config.projects.map(project => ({
        name: project.pathname
    }))
}

export async function generateMetadata({ params }){
    const project = config.projects.find(prj => prj.pathname === params.name.toLowerCase())

    const page_title = `${project.name} - ${process.env.NEXT_PUBLIC_NAME} Project Portfolio`
    const page_description = `Find out more about ${project.name}, a ${project.type.name}, using ${project.skills.slice(0, project.skills.length-1).join(', ')}, and ${project.skills.slice(-1)}.`

    return project ? {
        title: page_title,
        description: page_description,
        openGraph: {
            title: page_title,
            description: page_description,
            images: project.img
        },
        twitter: {
            title: page_title,
            description: page_description,
            images: project.img
        }
    } : {}
}

export const dynamicParams = false

export async function getProjectMarkdown(name){
    try {
        const postsDirectory = 'app/projects';
        const fullPath = path.join(postsDirectory, `${name}.md`);
        return await fs.readFile(fullPath, 'utf8');
    }
    catch(e){
        return null
    }
}

export default async function Project({ params }){

    let project = null
    for (let i = 0; i < config.projects.length; i++){
        if (config.projects[i].pathname === params.name.toLowerCase()){
            project = config.projects[i]
            break
        }
    }

    if (!project)
        return null

    const markdownSource = await getProjectMarkdown(params.name)

    return <>
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/" tabIndex={0} role="link" aria-label="Home">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/portfolio" tabIndex={0} role="link" aria-label="Projects">
                            Projects
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{project.name}</li>
                </ol>
            </nav>
            <h1 className="display-4 fw-bold">{project.name}</h1>
            {/* <span className="text-secondary mb-5">{project.timeline.start} - {project.timeline.end}</span> */}
            <h5 className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-primary d-flex gap-1 align-items-center">
                    <TypeIcon type={project.type.group} />
                    {project.type.name}
                </span>
                {project.links.map(link => <>
                    <Link href={link.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer" tabIndex={0} role="link" aria-label={link.name}>
                        <span className="badge rounded-pill text-bg-primary d-flex gap-2 align-items-center">
                            <LinkIcon name={link.name} />
                            {link.name}
                            <BoxArrowUpRight />
                        </span>
                    </Link>
                </>)}
            </h5>
            <h6 className="d-flex flex-wrap gap-2 mb-3">
                {project.skills.map(skill => <>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-light">
                        {skill}
                    </span>
                </>)}
            </h6>
            {project.img ? <Image src={`/${project.img}`} alt="preview image" fill={true} className="position-relative w-100 rounded mb-3" /> : ''}
            {markdownSource ? <MDXRemote source={markdownSource} /> : ''}
        </div>
    </>
}