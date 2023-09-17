import Link from "next/link";
import { House } from "react-bootstrap-icons";

export default function Portfolio(){
    return <>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
                </ol>
            </nav>
            <h1>Porfolio</h1>
        </div>
    </>
}