import {useEffect, useRef} from "react";

export default function Navbar() {

    //Refs
    const ham = useRef(null);
    const nav = useRef(null);

    //Sidebar Toggle
    function toggleSidebar() {
        if (ham.current.classList.contains("active")) {
            ham.current.classList.remove("active");
        } else {
            ham.current.classList.add("active")
        }
    }

    //Hide Nav
    if (typeof window !== 'undefined') {
        let scrollY = window.scrollY;
        useEffect(() => {
            const hideNav = () => {
                if (window.scrollY > scrollY) {
                    nav.current.classList.add("hide");
                } else {
                    nav.current.classList.remove("hide");
                }
                scrollY = window.scrollY;
            }

            window.addEventListener("scroll", hideNav);

            return () => window.removeEventListener("scroll", hideNav);
        }, [])
    }

    return (
        <>
            <nav ref={nav}>
                <div className="navbar-container container">
                    <div className="left">
                        <span className="brand sixty-four big-text-style">Next</span>
                        <span className="brand sixty-four big-text-style">Movie</span>
                    </div>
                    <div className="right">
                        <ul className="text-style">
                            <li>Search</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="ham" ref={ham} onClick={toggleSidebar}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}