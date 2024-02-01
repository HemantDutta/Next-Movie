import {useEffect, useRef} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Navbar() {

    //Router
    const router = useRouter();

    //Refs
    const ham = useRef(null);
    const nav = useRef(null);
    const aside = useRef(null);
    const overflow = useRef(null);

    //Sidebar Toggle
    function toggleSidebar() {
        if (ham.current.classList.contains("active")) {
            ham.current.classList.remove("active");
            nav.current.classList.remove("active");
            aside.current.classList.remove("active");
            overflow.current.classList.remove("active");
        } else {
            ham.current.classList.add("active");
            nav.current.classList.add("active");
            aside.current.classList.add("active");
            overflow.current.classList.add("active");
        }
    }

    //Hide Sidebar on Bigger Screens
    const hideAsideOnClick = () => {
        if (aside.current !== null && window !== undefined) {
            ham.current.classList.remove("active");
            nav.current.classList.remove("active");
            aside.current.classList.remove("active");
            overflow.current.classList.remove("active");
        }
    }
    useEffect(() => {
        const hideAside = () => {
            if (aside.current !== null && window !== undefined && window.innerWidth > 991) {
                ham.current.classList.remove("active");
                nav.current.classList.remove("active");
                aside.current.classList.remove("active");
                overflow.current.classList.remove("active");
            }
        }
        window.addEventListener("resize", hideAside);

        return () => {
            window.removeEventListener("resize", hideAside);
        }
    }, [])

    //Hide Nav
    if (typeof window !== 'undefined') {
        let scrollY = window.scrollY;
        useEffect(() => {
            const hideNav = () => {
                if (nav.current !== null) {
                    if (window.scrollY > scrollY) {
                        nav.current.classList.add("hide");
                    } else {
                        nav.current.classList.remove("hide");
                    }
                    scrollY = window.scrollY;
                }

            }

            window.addEventListener("scroll", hideNav);

            return () => window.removeEventListener("scroll", hideNav);
        }, [])
    }

    return (
        <>
            <nav ref={nav}>
                <div className="navbar-container container">
                    <div className="left" onClick={()=>{router.push("/")}}>
                        <span className="brand sixty-four big-text-style">Next</span>
                        <span className="brand sixty-four big-text-style">Movie</span>
                    </div>
                    <div className="right">
                        <ul className="text-style">
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
                    <div className="ham" ref={ham} onClick={toggleSidebar}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </nav>
            <div ref={overflow} onClick={hideAsideOnClick} className="overflow-nav"/>
            <aside ref={aside}>
                <div className="aside-container">
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
            </aside>
        </>
    )
}