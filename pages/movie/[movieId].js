import {useRouter} from "next/router";
import axios from "axios";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import MovieBanner from "../../components/MovieBanner";
import Head from "next/head";

export default function MoviePage({data}) {

    const router = useRouter();
    const id = router.query.movieId;

    if (router.isFallback) {
        return <Loader/>
    }

    return (
        <>
            <Head>
                <title>{data.titleText.text}</title>
                <link rel="icon" href="favicon.png" sizes="any"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar/>
            <div className="movie-page">
                <div className="mp-container">
                    <MovieBanner banner={data}/>
                    <div className="info-grid container">
                        <span className="head sixty-four head-style">{data.titleType.text} Info</span>
                        <div className="grid">
                            <div className="info-item">
                                <span className="title head-style">Title</span>
                                <span className="value">{data.titleText.text}</span>
                            </div>
                            <div className="info-item">
                                <span className="title head-style">Release Year</span>
                                <span className="value">{data.releaseYear.year}</span>
                            </div>
                            <div className="info-item">
                                <span className="title head-style">Release Date</span>
                                <span className="value">{data.releaseDate.day}/{data.releaseDate.month}/{data.releaseDate.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const {params} = context;

    //Fetch Movie Details
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/${params.movieId}`,
        headers: {
            'X-RapidAPI-Key': '86cef1b198mshf81c79b973c9488p1b2cc2jsn91f06dae0c9e',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    let data = {};
    try {
        const response = await axios.request(options);
        data = response.data.results;
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            data
        }
    }
}