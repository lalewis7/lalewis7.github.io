import { Github, GlobeAmericas, Medium, PlayBtn } from "react-bootstrap-icons"

export default function LinkIcon({ name }){
    switch (name.toLowerCase()){
        case "live":
            return <GlobeAmericas />
        case "github":
            return <Github />
        case "blogs":
            return <Medium />
        case "demo":
            return <PlayBtn />
    }
}