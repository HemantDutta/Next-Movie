import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="container">
                <div className="footer-container">
                    <div className="brand">
                        <span className="big-head-style sixty-four">Next</span>
                        <span className="big-head-style sixty-four">Movie</span>
                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                <Link href={"/search"}>
                                    <a className="text-style">Search</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>
                                    <a className="text-style">Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/about"}>
                                    <a className="text-style">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <span>Designed & Developed by <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank">Hemant Dutta</a> <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"/></a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}