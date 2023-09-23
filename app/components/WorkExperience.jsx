import Image from "next/image";

export default function WorkExperience({ job }) {
    return <>
        <div className="d-flex gap-3">
            <div>
                <Image src={`/work/${job.img}`} alt={`${job.company} logo`} width={64} height={64} className="rounded-3" />
            </div>
            <div className="flex-grow-1">
                <div className="row flex-grow-1 mb-2">
                    <div className="col col-12 col-md-8">
                        <h3 className="mb-0 mb-md-1">{job.title}</h3>
                        <h5 className="fw-normal mb-1">{job.company}</h5>
                    </div>
                    <div className="col col-12 col-md-4">
                        <span className="fw-lighter float-md-end">{job.time}</span>
                    </div>
                </div>
                {job.description.map(point => <p className="mb-1 fw-light">
                    - {point}
                </p>)}
            </div>
        </div>
    </>
}