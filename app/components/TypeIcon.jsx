import { BriefcaseFill, MortarboardFill, PersonFill } from "react-bootstrap-icons"

export default function TypeIcon(props){
    switch (props.type.toLowerCase()){
        case "personal":
            return <PersonFill />
        case "school":
            return <MortarboardFill />
        case "work":
            return <BriefcaseFill />
        default:
            return <PersonFill />
    }
}