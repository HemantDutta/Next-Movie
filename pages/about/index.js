import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Navbar/>
            <Head>
                <title>About | Next Movie</title>
                <link rel="icon" href="favicon.png" sizes="any"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </Head>
            <div className="about-page container">
                <div className="about-grid">
                    <div className="intro">
                        <div className="left">
                            <span className="head sixty-four big-head-style text-grad">Next Movie</span>
                            <span className="tag">Hey there! Welcome to Next Movie, a cool little project I put together to get hands-on with <span className="clr-sec">Next.js 12</span>. I wanted to dive into the world of dynamic web apps. So, I hooked up this project with a movie database API by Adriano Massimo to bring you a taste of what Next.js can do. With Next Movie, we're all about exploring movies in a fun and interactive way.</span>
                            <a href="https://github.com/HemantDutta/Next-Movie" rel="noreferrer" target="_blank" className="cta click"><i className="fa-brands fa-github"/>&nbsp;Check out the repo</a>
                        </div>
                        <div className="right">
                            <img src="favicon.png" alt="Next Movie Logo"/>
                        </div>
                    </div>
                    <div className="learn">
                        <div className="top">
                            <span className="head head-style sixty-four">Things I Learnt</span>
                            <span className="tag text-style">Here's the list of technologies I learnt while building this project</span>
                        </div>
                        <div className="bottom">
                            <div className="chip">Next js 12</div>
                            <div className="chip">Static Site Generating</div>
                            <div className="chip">Data Fetching & Pre-rendering</div>
                            <div className="chip">getStaticProps()</div>
                            <div className="chip">getStaticPaths()</div>
                            <div className="chip">File based Routing</div>
                            <div className="chip">Dynamic Routing</div>
                            <div className="chip">Path Fallback</div>
                            <div className="chip">Dynamic Parameters</div>
                            <div className="chip">Incremental Static Regeneration</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}