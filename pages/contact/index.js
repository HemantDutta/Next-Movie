import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";

export default function Contact() {
    return(
        <>
            <Navbar/>
            <Head>
                <title>Contact Us | Next Movie</title>
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
            <div className="contact-page container">
                <div className="contact-grid">
                    <div className="email">
                        <div className="content">
                            <span className="head sixty-four big-head-style">Get in Touch</span>
                            <a href="mailto:lorem@abc.com" rel="noreferrer" target="_blank" className="head big-head-style clr-sec">nextmovie@abc.com</a>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <span className="head head-style"><i className="fa-solid fa-phone"/>&nbsp;&nbsp;Phone</span>
                            <ul>
                                <li><a href="tel:9999999999">+91 9XXXXXXXXX</a></li>
                                <li><a href="tel:9999999999">+91 9XXXXXXXXX</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="github">
                        <div className="content">
                            <span className="head head-style"><i className="fa-brands fa-github"/>&nbsp;&nbsp;Need a website?</span>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank">Reach out on Linkedin&nbsp;<i className="fa-brands fa-linkedin"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}