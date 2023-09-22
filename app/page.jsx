import Link from "next/link";
import Typed from "./csr_components/Typed";

export default function Home() {
  return <>
    <div className="container pt-4">
      <h1 className="display-1 fw-bold">Arthur Lewis</h1>
      <h2 className="text-body-secondary"><Typed strings={["Software Engineer", "Creative Solutionist", "Fitness Enthusiast", "Meticulous Designer"]} /></h2>
      <h5 className="text-body-secondary mb-4 mt-3 fw-light" style={{maxWidth: "700px"}}>
        My mission is to design and create software using the latest frameworks and technologies to positively impact people.
      </h5>
      <div className="d-flex gap-2">
        <Link href="/about">
          <button className="btn btn-primary btn-lg rounded-5">Learn More</button>
        </Link>
        <Link href="/portfolio">
          <button className="btn btn-primary btn-lg rounded-5">See my Work</button>
        </Link>
      </div>
    </div>
  </>
}
