import Head from "next/head";
import Navbar from "../components/Navbar";
import MovieBanner from "../components/MovieBanner";
import axios from "axios";
import GenreGrid from "../components/GenreGrid";
import {useEffect, useState} from "react";
import Loader from "../components/Loader";

export default function Home({banner}) {

    //States
    const [genreData, setGenreData] = useState([]);

    //Fetch Genres
    useEffect(() => {
        ['Drama', 'Action', 'Horror'].map(async (value) => {
            const options = {
                method: 'GET',
                url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
                params: {genre: value},
                headers: {
                    'X-RapidAPI-Key': '86cef1b198mshf81c79b973c9488p1b2cc2jsn91f06dae0c9e',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setGenreData(curr=> [
                    ...curr,
                    {
                        genre: value,
                        data: response.data.results,
                    }
                ])
            } catch (error) {
                console.error(error);
            }
        })
    }, [])

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
            {
                genreData.length === 3 &&
                genreData.map((value, index) => {
                    return (
                        <GenreGrid key={index} genre={value.genre} data={value.data}/>
                    )

                })
            }
            {
                genreData.length === 0 &&
                <Loader/>
            }
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
            if (x.primaryImage) {
                banner = x;
                return false;
            } else return true;
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