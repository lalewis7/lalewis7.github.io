import Image from "next/image";

export default function Education({ edu }) {
    return <>
        <div className="d-flex gap-3">
            <div>
                <Image src={`/education/${edu.img}`} alt={`${edu.school} logo`} width={64} height={64} className="rounded-3" />
            </div>
            <div className="flex-grow-1">
                <div className="row flex-grow-1">
                    <div className="col col-12 col-md-8">
                        <h3 className="mb-0 mb-md-1">{edu.school}</h3>
                        <h5 className="fw-light mb-1">{edu.degree}</h5>
                        <h5 className="fw-lighter mb-1">{edu.minor}</h5>
                    </div>
                    <div className="col col-12 col-md-4">
                        <span className="fw-lighter float-md-end">{edu.time}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}