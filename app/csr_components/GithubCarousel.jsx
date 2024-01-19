"use client"

import { Carousel } from "react-bootstrap"
import config from '@/config'
import GithubRepository from "./GithubRepository"

export default function GithubCarousel(){
    return <>
        <Carousel pause="hover" controls={false}>
            {config.favorite_repos.map(repo => (
                <Carousel.Item>
                    <div className="w-100 pb-5">
                        <GithubRepository repo={repo} />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    </>
}