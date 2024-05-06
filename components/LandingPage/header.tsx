
export default function LandingHeader() {
    return(
        <header className="flex justify-between p-5 top-0 sticky">
            <div className="text-slate-600">
                <h1>iTask</h1>
            </div>
            <div>
                <ul>
                    <li className="inline-block mx-2">Get Started</li>
                    <li className="inline-block mx-2">About iTask</li>
                    <li className="inline-block mx-2">Privacy Policy</li>
                </ul>
            </div>
        </header>
    )
}