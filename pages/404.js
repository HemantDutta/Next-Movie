import {useEffect, useState} from "react";
import {useRouter} from "next/router";

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