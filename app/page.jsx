import Link from "next/link";
import Image from "next/image";
import Typed from "./csr_components/Typed";
import config from '@/config';
import { BriefcaseFill, Clipboard, EnvelopeFill, FileEarmarkPdfFill, Github, InfoCircle, LightbulbFill, Linkedin, Medium, MortarboardFill } from "react-bootstrap-icons";
import { getSkillIconName } from "./util";
import WorkExperience from "./components/WorkExperience";
import styles from "./page.module.scss";
import Education from "./components/Education";
import CopyEmail from "./csr_components/CopyEmail";

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
          <div className="h4 d-inline-flex gap-4 mb-4 ps-1 flex-wrap align-items-center">
            <Link href="/resume" className="nav-link d-flex align-items-center gap-2 lh-1" tabIndex={0} role="link" aria-label="Resume">
              <FileEarmarkPdfFill />Resume
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="LinkedIn">
              <Linkedin />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={process.env.GITHUB_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="GitHub">
              <Github />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={process.env.MEDIUM_LINK} className="nav-link d-inline-flex" tabIndex={0} role="link" aria-label="Medium">
              <Medium />
            </Link>
            <CopyEmail />
            {/* <Link target="_blank" rel="noopener noreferrer" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="nav-link d-flex align-items-center gap-2 lh-1" tabIndex={0} role="link" aria-label="Email">
              <EnvelopeFill className="ms-1" /><span className="h6 m-0">{process.env.NEXT_PUBLIC_EMAIL}</span>
            </Link> */}
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

      <div className="d-flex flex-column mt-5 mb-4">
        <h2 className="display-5 m-0 d-flex align-items-center gap-2">
          <BriefcaseFill size={32} className="mb-1" />
          Experience
        </h2>
        <hr className="mb-3 mt-1" />
        {config.work.map(job => <WorkExperience job={job} />)}
        <h2 className="display-5 mt-4 mb-0 d-flex align-items-center gap-2">
          <MortarboardFill size={32} className="mb-1" />
          Education
        </h2>
        <hr className="mb-3 mt-1" />
        {config.education.map(degree => <Education edu={degree} />)}
      </div>

      <div className="mt-5 d-flex flex-column">
        <h2 className="display-5 mb-0 d-flex align-items-center gap-2">
          <LightbulbFill size={32} className="mb-1" />
          Technical Skills
        </h2>
        <hr className="mb-3 mt-1" />
        <div className="d-grid gap-3" style={{fontSize: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))", justifyItems: "center"}}>
          {config.skills.map(skill => <Image src={`/skills/${skill}`} alt={getSkillIconName(skill)} width={64} height={64} title={getSkillIconName(skill)} />)}
        </div>
        <span className="d-flex align-items-center justify-content-end text-secondary-emphasis mt-2 gap-1 fw-lighter">
          <InfoCircle /> Icons from <Link href="https://skillicons.dev/" tabIndex={-1} role="link" aria-label="Skill Icons">Skill Icons</Link>
        </span>
        <p className="fw-light text-secondary-emphasis my-3 text-center fst-italic">{
            `(${config.skills.map(skill => getSkillIconName(skill)).slice(0, config.skills.length - 1).join(', ')}, and ${getSkillIconName(config.skills.slice(-1)[0])})`
        }</p>
        {/* <Link href="/about" className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2 align-self-center mt-3" tabIndex={0} role="link" aria-label="More About Me">
          More About Me <ArrowRight/>
        </Link> */}
      </div>

    </div>
  </>
}
