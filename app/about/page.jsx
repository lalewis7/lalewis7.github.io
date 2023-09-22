import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BoxArrowUpRight, InfoCircle } from "react-bootstrap-icons";

const page_title = 'About Me - Arthur Lewis'
const page_description = 'Hi! My name is Arthur Lewis, and I design and create software using the latest frameworks and technologies to positively impact people.'

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

export default function About(){

    const skill_list = [
        // languages
        'Java-Dark.svg',
        'JavaScript.svg',  
        'TypeScript.svg',
        'C++.svg',

        // frontend frameworks
        'React-Dark.svg', 
        'NextJS-Dark.svg',
        'VueJS-Dark.svg', 
        'Redux.svg', 
        'Bootstrap.svg', 
        'Sass.svg', 
        'HTML.svg', 
        'CSS.svg', 

        // backend frameworks
        'Nginx.svg', 
        'Spring-Dark.svg', 
        'ExpressJS-Dark.svg', 
        'NodeJS-Dark.svg', 

        // database
        'MySQL-Dark.svg', 
        'MongoDB.svg', 
        'PostgreSQL-Dark.svg',
        'Postman.svg', 

        // deployment
        'Git.svg', 
        'Docker.svg', 
        'Azure-Dark.svg', 
        'AWS-Dark.svg'
    ]

    const getSkillIconName = name => {console.log(name);return name.split(".")[0].split("-")[0]}

    return <>
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
        <div className="max-w-lg mx-auto">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                </ol>
            </nav>
            <div>
                <h1 className="d-inline-flex">About Me</h1>
                <div className="float-md-end text-center p-3">
                    <Image src="/self.jpg" alt="Arthur" width={260} height={260} className="rounded-circle" />
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
                {' '}email me at <Link href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</Link>{' '}
                or connect with me on{' '}
                <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="d-inline-flex align-items-center gap-1">
                    LinkedIn<BoxArrowUpRight />
                </Link>.
                </p>
            </div>
            <div className="mb-4 mt-5">
                {/* <h2>Skills</h2> */}
                <hr className="pb-4" />
                <p className="pb-4">
                    I'm a formally trained computer scientist with experience in the following languages, frameworks, and technologies:
                </p>
                <div className="d-grid gap-3" style={{fontSize: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))", justifyItems: "center"}}>
                    {skill_list.map(skill => <Image src={`/skills/${skill}`} alt={skill} width={64} height={64} title={getSkillIconName(skill)} />)}
                </div>
                <p className="fw-light text-secondary mt-3 mb-0 fst-italic">{
                    `(${skill_list.map(skill => getSkillIconName(skill)).splice(0, skill_list.length - 1).join(', ')}, and ${getSkillIconName(skill_list.splice(-1)[0])})`
                }</p>
                <span className="d-flex align-items-center text-secondary mt-3 gap-1 fw-lighter"><InfoCircle /> Icons from <Link href="https://skillicons.dev/">Skill Icons</Link></span>
            </div>
        </div>
    </>
}