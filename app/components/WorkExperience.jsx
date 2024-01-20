import Image from "next/image";

export default function WorkExperience({ job }) {
    return <>
        <div className="d-flex gap-3 mb-3">
            {/* <div>
                <Image src={`/work/${job.img}`} alt={`${job.company} logo`} width={64} height={64} className="rounded-3" />
            </div> */}
            <div className="flex-grow-1">
                <div className="row flex-grow-1 mb-2">
                    <div className="col col-12 col-md-8">
                        <h3 className="mb-0 mb-md-1">{job.company}</h3>
                        <h5 className="fw-light mb-1">{job.title}</h5>
                    </div>
                    <div className="col col-12 col-md-4">
                        <span className="fw-light fst-italic float-md-end">{job.time}</span>
                    </div>
                </div>
                <ul className="mb-0">
                    {job.description.map(point => <li className="mb-1 fw-normal">{point}</li>)}
                </ul>
            </div>
        </div>
    </>
}