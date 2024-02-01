import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

export default function ErrorPage() {

    //Router
    const router = useRouter();

    //States
    const [timer, setTimer] = useState(5);

    //Run Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (timer <= 1) {
        router.replace("/");
    }

    return (
        <>
            <Head>
                <title>You seem lost...</title>
                <link rel="icon" href="../public/favicon.png" sizes="any"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <div className="error-page container">
                <div className="error-container">
                    <div className="left">
                        <span className="big-head-style sixty-four">Next</span>
                        <span className="big-head-style sixty-four">Movie</span>
                    </div>
                    <div className="right">
                        <span className="title big-text-style">Seems like you're lost</span>
                        <span className="tag">Don't worry, we're taking you back in {timer}...</span>
                    </div>
                </div>
            </div>
        </>
    )
}