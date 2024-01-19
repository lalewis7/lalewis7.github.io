import Image from "next/image";
import Link from "next/link";
import { Github } from "react-bootstrap-icons";
import GithubCarousel from "@/csr_components/GithubCarousel";

// markdown -> html
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path';
import { promises as fs } from 'fs';

const page_title = 'About Me - Arthur Lewis'
const page_description = 'Hi! My name is Arthur Lewis, and I design and create software using the latest frameworks and technologies to positively impact people.'

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

export async function getAboutMarkdown(){
    try {
        const postsDirectory = 'app/about';
        const fullPath = path.join(postsDirectory, `page.md`);
        return await fs.readFile(fullPath, 'utf8');
    }
    catch(e){
        return null
    }
}

export default async function About(){

    const markdownSource = await getAboutMarkdown()

    return <>
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/" tabIndex={0} role="link" aria-label="Home">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                </ol>
            </nav>
            <div>
                <h1 className="d-inline-flex display-4">About Me</h1>
                <div className="float-md-end text-center p-3 pb-4 pb-md-3">
                    <Image src="/self.jpg" alt={`${process.env.NEXT_PUBLIC_NAME} Headshot`} width={260} height={260} className="rounded-circle" />
                </div>
                {markdownSource ? <MDXRemote source={markdownSource} /> : ''}
                <h2 className="h3 mb-3 mt-4 d-flex align-items-center gap-2">
                    <Github className="mb-1" />
                    Favorite Open Source Projects
                </h2>
                <GithubCarousel />
            </div>
        </div>
    </>
}