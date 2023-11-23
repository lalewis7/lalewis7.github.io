import Link from "next/link";
import Image from "next/image";
import Typed from "./csr_components/Typed";
// @ts-ignore
import projects from "@/config/projects.json";
// @ts-ignore
import jobs from "@/config/work.json";
// @ts-ignore
import degrees from "@/config/education.json";
// @ts-ignore
import skills from "@/config/skills.json";
import ProjectCard from "./components/ProjectCard";
import { ArrowRight, EnvelopeFill, FileEarmarkPdfFill, Github, InfoCircle, Linkedin, Medium } from "react-bootstrap-icons";
import { getSkillIconName } from "./util";
import WorkExperience from "./components/WorkExperience";
import styles from "./page.module.scss";
import Education from "./components/Education";

export default function Home() {
  return <>
    <div className="max-w-lg mx-auto pt-4">
      <div className={styles.landing_page_h_100}>
        <div>
          <h1 className="display-1 fw-bold" tabIndex={0}>{process.env.NEXT_PUBLIC_NAME}</h1>
          <h2 className={`display-5 text-body-secondary`}>
            <noscript>Software Engineer</noscript>
            <Typed strings={[ "Creative Solutionist", "Fitness Enthusiast", "Meticulous Designer", "Software Engineer"]} />&nbsp;
          </h2>
          <h4 className="text-body-secondary mb-4 mt-3 fw-light" tabIndex={0}>
            My mission is to design and create software using the latest frameworks and technologies to positively impact people.
          </h4>
          <div className="h4 d-inline-flex gap-4 mb-4 ps-1 flex-wrap">
            <Link href="/resume" className="nav-link d-flex align-items-center gap-2 lh-1" tabIndex={0} role="link" aria-label="Resume">
              <FileEarmarkPdfFill className="ms-1" />Resume
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="LinkedIn">
              <Linkedin />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="GitHub">
              <Github />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="Email">
              <EnvelopeFill />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="Medium">
              <Medium />
            </Link>
          </div>
          <div className="d-flex flex-wrap gap-2 mt-2" style={{marginBottom: "4rem"}}>
            <Link href="/about" role="link" aria-label="About" className="btn btn-primary btn-lg rounded-5">
              About Me
            </Link>
            <Link href="/portfolio" role="link" aria-label="Resume" className="btn btn-primary btn-lg rounded-5"> 
              See My Work
            </Link>
          </div>
        </div>
      </div>

      <hr className="diamond" />

      <div className="d-flex flex-column" style={{marginTop: "5rem"}}>
        <h2 className="display-5 mb-3">Project Portfolio</h2>
        <div className="d-grid gap-3">
          {projects.slice(0, 3).map((project, i) => <ProjectCard project={project} inverse={i % 2 === 1} />)}
        </div>
        <Link href="/portfolio" className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2 align-self-center mt-4" tabIndex={0} role="link" aria-label="View All Projects">
          View All Projects <ArrowRight/>
        </Link>
      </div>

      <div className="mt-5 d-flex flex-column">
        <h2 className="display-5 mb-3">Technical Skills</h2>
        <p className="h5 text-body-secondary pb-4 fw-light">
            I'm a formally trained computer scientist with experience in the following languages, frameworks, and technologies:
        </p>
        <div className="d-grid gap-3" style={{fontSize: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))", justifyItems: "center"}}>
          {skills.map(skill => <Image src={`/skills/${skill}`} alt={getSkillIconName(skill)} width={64} height={64} title={getSkillIconName(skill)} />)}
        </div>
        <span className="d-flex align-items-center justify-content-end text-secondary-emphasis mt-2 gap-1 fw-lighter">
          <InfoCircle /> Icons from <Link href="https://skillicons.dev/" tabIndex={-1} role="link" aria-label="Skill Icons">Skill Icons</Link>
        </span>
        <p className="fw-light text-secondary-emphasis my-3 text-center fst-italic">{
            `(${skills.map(skill => getSkillIconName(skill)).slice(0, skills.length - 1).join(', ')}, and ${getSkillIconName(skills.slice(-1)[0])})`
        }</p>
        <Link href="/about" className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2 align-self-center mt-3" tabIndex={0} role="link" aria-label="More About Me">
          More About Me <ArrowRight/>
        </Link>
      </div>

      <div className="d-flex flex-column mt-5 mb-4">
        <h2 className="display-5 mb-3">Education & Experience</h2>
        {degrees.map(degree => <Education edu={degree} />)}
        <span className="pt-4 pb-2"></span>
        {jobs.map(job => <WorkExperience job={job} />)}
        <Link href="/resume" className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2 align-self-center mt-4" tabIndex={0} role="link" aria-label="View Resume">
          View Resume <ArrowRight/>
        </Link>
      </div>

    </div>
  </>
}
