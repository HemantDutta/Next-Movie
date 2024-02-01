import {useRouter} from "next/router";
import axios from "axios";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";

export default function MoviePage({data}) {

    const router = useRouter();
    const id = router.query.movieId;

    if(router.isFallback) {
        return <Loader/>
    }

    return (
        <>
            <Navbar/>
            <div className="movie-page">
                <div className="mp-container">

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