"use client"

import { useState } from "react";

export default function(){
    
    const [loading, setLoading] = useState(true);

    return <>
        { loading ? <>
            <div className="text-center pt-5">
                <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </> : <></> }
        <div style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "128%",
            visibility: loading ? "hidden" : "visible"
        }}>
            <iframe src={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_GDRIVE_ID}/preview`} title="Resume Preview" allow="autoplay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%"
            }} onLoad={() => setLoading(false)}></iframe>
        </div>
    </>
}