import {useRef} from "react";

export default function Navbar() {

    //Refs
    const ham = useRef(null);

    //Sidebar Toggle
    function toggleSidebar() {
        if(ham.current.classList.contains("active")) {
            ham.current.classList.remove("active");
        }
        else {
            ham.current.classList.add("active")
        }
    }

    return (
        <>
            <nav>
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