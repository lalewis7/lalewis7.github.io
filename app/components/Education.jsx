import Image from "next/image";

export default function Education({ edu }) {
    return <>
        <div className="d-flex gap-3">
            {/* <div>
                <Image src={`/education/${edu.img}`} alt={`${edu.school} logo`} width={64} height={64} className="rounded-3" />
            </div> */}
            <div className="flex-grow-1">
                <div className="row flex-grow-1">
                    <div className="col col-12 col-md-8 mb-1">
                        <h3>{edu.school}</h3>
                        <p className="fw-light lh-1 mb-0">{edu.degree}</p>
                        <p className="fw-light mb-0">{edu.minor}</p>
                    </div>
                    <div className="col col-12 col-md-4">
                        <span className="fw-lighter float-md-end">{edu.time}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}