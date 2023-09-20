import IconifyIcon from "@/components/IconifyIcon ";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function About(){

    const Icon = (icon) => <div className="w-fit-content"><IconifyIcon icon={icon} /></div>

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
                    Hello! My name is Arthur Lewis and I'm a software engineer from Pennington, NJ.
                </p>
                <p>
                    When I was 14 years old, I took a computer programming course writing basic code in Python. Ever since then I've known I want to pursue a career in software engineering.
                </p>
                <p>
                I started off mostly self taught by reading books, watching tutorials, and exploring online.
                I made and shared basic games and programs in Java with friends and family.
                </p>
                <p>
                After starting college I switched my attention to web development following an internship as a Software Engineer for Gearbrain. 
                Since then I've been mostly coding in JavaScript with a focus on Full-stack web development.
                In May 2023, I graduated from Lehigh University with a Bachelor of Science in Computer Science and Business and a Minor in Data Science.
                </p>
                <p>
                    Since graduating from Lehigh, I've been working on personal projects such as Palette Hub, showcasing my skills and abilities as a software engineer. I'm currently looking for a full time position ideally near NYC, although I'm open to relocating if necessary.
                </p>
            </div>
            <div>
                <h2>Skills</h2>
                <div className="d-grid gap-3" style={{fontSize: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))", justifyItems: "center"}}>
                    {['java', 'javascript', 'typescript-icon', 'python', 'react', 'vue', 'redux', 'bootstrap', 'html-5', 'css-3', 'sass', 'spring-icon', 
                    'nodejs-icon', 'nginx', 'postman-icon', 'mysql-icon', 'postgresql', 'mongodb-icon', 'aws', 'microsoft-azure', 'docker-icon', 
                    'git-icon', 'github-icon', 'visual-studio-code'].map(skill => Icon(skill))}
                </div>
            </div>
        </div>
    </>
}