import Link from "next/link";

export default function NotFound(){
    return <>
        <div className="container">
            <h1 className="display-4">404: Page Not Found</h1>
            <p>
                Sorry, it looks like that page doesn't exist. Return to <Link href="/">Homepage</Link>.
            </p>
        </div>
    </>
}