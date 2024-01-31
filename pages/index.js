import Head from "next/head";
import Navbar from "../components/Navbar";
import MovieBanner from "../components/MovieBanner";
import axios from "axios";

export default function Home({banner}) {
    return (
        <>
            <Head>
                <title>Next Movie</title>
                <link rel="icon" href="../public/favicon.png" sizes="any"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar/>
            <MovieBanner title="Featured" banner={banner}/>
        </>
    )
}

export async function getStaticProps() {

    //Fetch Featured Banner Start ++
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        headers: {
            'X-RapidAPI-Key': '86cef1b198mshf81c79b973c9488p1b2cc2jsn91f06dae0c9e',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    let banner = {};
    try {
        const response = await axios.request(options);
        response.data.results.every(x => {
            if(x.primaryImage) {
                console.log(x);
                banner = x;
                return false;
            }
            else return true;
        })
    } catch (error) {
        console.error(error);
    }
    //Fetch Featured Banner End ++

    return {
        props: {
            banner,
        }
    }
}