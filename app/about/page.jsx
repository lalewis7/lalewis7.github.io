import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import config from '@/config';
import { BoxArrowUpRight, InfoCircle } from "react-bootstrap-icons";
import { getSkillIconName } from "@/util";

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

export default function About(){
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
                <p>
                Hi there! My name is Arthur Lewis, and I am a creative, dynamic, and meticulous full-stack software engineer with a passion for facilitating positive change through my work.
                </p>
                <p>
                I hold an integrated degree in computer science and business with a minor in data science from Lehigh University — however, my expertise and enthusiasm for technology extends far past my undergraduate education. I&rsquo;ve been creating programs that entertain, educate, and, maybe, make life a little easier since I was 14 years old.
                </p>
                <p>
                My interest and expertise is in building full stack websites, from the frontend user interface and experience to the backend business logic, database design, and infrastructure.
                </p>
                <p>
                I am looking to contribute my skills to a team of other technology enthusiasts who are committed to solving problems. If you're interested in chatting about software engineering or how I might contribute to your technology needs,
                {' '}email me at <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} tabIndex={0} role="link" aria-label="Email">{process.env.NEXT_PUBLIC_EMAIL}</Link>{' '}
                or connect with me on{' '}
                <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="d-inline-flex align-items-center gap-1"
                    tabIndex={0} role="link" aria-label="LinkedIn">
                    LinkedIn<BoxArrowUpRight />
                </Link>.
                </p>
            </div>
        </div>
    </>
}