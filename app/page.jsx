import Link from "next/link";
import Image from "next/image";
import Typed from "./csr_components/Typed";
// @ts-ignore
import projects from "@/config/projects.json";
// @ts-ignore
import jobs from "@/config/work.json";
// @ts-ignore
import skills from "@/config/skills.json";
import ProjectCard from "./components/ProjectCard";
import { ArrowRight, InfoCircle } from "react-bootstrap-icons";
import { getSkillIconName } from "./util";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return <>
    <div className="max-w-lg mx-auto pt-4">
      <h1 className="display-1 fw-bold">Arthur Lewis</h1>
      <h2 className="text-body-secondary"><Typed strings={["Software Engineer", "Creative Solutionist", "Fitness Enthusiast", "Meticulous Designer"]} /></h2>
      <h5 className="text-body-secondary mb-4 mt-3 fw-light">
        My mission is to design and create software using the latest frameworks and technologies to positively impact people.
      </h5>
      <div className="d-flex flex-wrap gap-2" style={{marginBottom: "6rem"}}>
        <Link href="/about">
          <button className="btn btn-primary btn-lg rounded-5">Learn More</button>
        </Link>
        <Link href="/portfolio">
          <button className="btn btn-primary btn-lg rounded-5">See my Work</button>
        </Link>
      </div>

      <div className="mt-5 d-flex flex-column">
        <h2 className="mb-3">Project Portfolio</h2>
        <div className="d-grid gap-3">
          {projects.slice(0, 3).map((project, i) => <ProjectCard project={project} inverse={i % 2 === 1} />)}
        </div>
        <Link href="/portfolio" className="align-self-center mt-3">
          <button className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2">View all Projects <ArrowRight/> </button>
        </Link>
      </div>

      <div className="mt-5 d-flex flex-column">
        <h2 className="mb-3">Technical Skills</h2>
        <h5 className="text-body-secondary pb-4 fw-light">
            I'm a formally trained computer scientist with experience in the following languages, frameworks, and technologies:
        </h5>
        <div className="d-grid gap-3" style={{fontSize: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(64px, 1fr))", justifyItems: "center"}}>
          {skills.map(skill => <Image src={`/skills/${skill}`} alt={skill} width={64} height={64} title={getSkillIconName(skill)} />)}
        </div>
        <p className="fw-light text-secondary mt-3 mb-0 fst-italic">{
            `(${skills.map(skill => getSkillIconName(skill)).splice(0, skills.length - 1).join(', ')}, and ${getSkillIconName(skills.splice(-1)[0])})`
        }</p>
        <span className="d-flex align-items-center text-secondary mt-3 gap-1 fw-lighter"><InfoCircle /> Icons from <Link href="https://skillicons.dev/">Skill Icons</Link></span>
        <Link href="/about" className="align-self-center mt-3">
          <button className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2">My Experience <ArrowRight/> </button>
        </Link>
      </div>

      <div className="mt-5 d-flex flex-column">
        <h2 className="mb-3">Work Experience</h2>
        {jobs.map(job => <WorkExperience job={job} />)}
        <Link target="_blank" rel="noopener noreferrer" href={process.env.RESUME_LINK} className="align-self-center mt-3">
          <button className="btn btn-primary btn-lg rounded-5 d-inline-flex align-items-center gap-2">View Resume <ArrowRight/> </button>
        </Link>
      </div>

    </div>
  </>
}
