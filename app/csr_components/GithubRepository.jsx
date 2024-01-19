"use client"

import { useEffect, useState } from "react"
// https://github.com/ozh/github-colors/blob/master/colors.json
import colors from '@/csr_components/colors.json'
import Link from "next/link"
import { Star, Eye } from 'react-bootstrap-icons'
import Fork from "@/components/Fork"
import { Spinner } from "react-bootstrap"

export default function GithubRepository({
    repo
}){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                console.log(`https://api.github.com/repos/${repo}`)
                setData(res)
            })
    }, [])

    if (data === null) 
        return <>
            <div className="w-100 d-flex justify-content-center py-3">
                <Spinner />
            </div>
        </>
    else
        return <>
            <div className="h5">
                <Link href={data.html_url} target="_blank" rel="noopener noreferrer" className="d-inline-flex">
                    <span className="fw-normal">
                    {data.owner.login}
                    </span>
                    &nbsp;/&nbsp;
                    <span className="fw-bold">
                    {data.name}
                    </span>
                </Link>
            </div>
            <p>{data.description}</p>
            <div className="d-flex gap-4">
                <div className="d-flex align-items-center gap-1 m-0 fw-light">
                    <div className="rounded-circle mb-0" style={{height: '.9rem', width: '.9rem', backgroundColor: colors[data.language].color}}></div>
                    {data.language}
                </div>
                <Link href={data.stargazers_url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-1 fw-light github-links">
                    <Star className="mb-1" size={18} />
                    {data.stargazers_count}
                </Link>
                <Link href={data.forks_url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-1 fw-light github-links">
                    <Fork className="mb-1" size={18} />
                    {data.forks_count}
                </Link>
                <div className="d-flex align-items-center gap-1 fw-light">
                    <Eye className="mb-1" size={18} />
                    {data.watchers_count}
                </div>
            </div>
        </>

}