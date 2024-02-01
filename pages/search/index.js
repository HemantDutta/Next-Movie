import Navbar from "../../components/Navbar";
import Head from "next/head";
import {useState} from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import GenreGrid from "../../components/GenreGrid";

export default function Search() {

    //States
    const [search, setSearch] = useState('');
    const [show, setShow] = useState('');
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    //Fetch Search Results
    async function fetchSearchResults(x) {

        //Turn on loader
        setLoader(true);

        //Create Search String
        const temp = x ? x : search.toLowerCase().replace(" ", "%20");

        //Set Show State
        const showString = x ? x.replace("%20", " ") : search;
        setShow(showString);

        //API Call
        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${temp}`,
            headers: {
                'X-RapidAPI-Key': '86cef1b198mshf81c79b973c9488p1b2cc2jsn91f06dae0c9e',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData(response.data.results);
            setLoader(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Head>
                <title>Search Movies</title>
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
            <Navbar/>
            <div className="search container">
                <div className="search-container">
                    <div className="head">
                        <i className="fa-solid fa-magnifying-glass"/>
                        <input type="search" name="search" id="search" placeholder="Search for movies and  tv series..." onChange={(e) => {
                            setSearch(e.target.value)
                        }}/>
                        <button className="click" type="button" onClick={()=>{fetchSearchResults('')}}>Search</button>
                    </div>
                    <div className="chip-bar">
                        <span className="chip" onClick={()=>{fetchSearchResults("spider%20man")}}>Spiderman</span>
                        <span className="chip" onClick={()=>{fetchSearchResults("iron%20man")}}>Iron Man</span>
                        <span className="chip" onClick={()=>{fetchSearchResults("interstellar")}}>Interstellar</span>
                    </div>
                    {
                        loader &&
                        <Loader/>
                    }
                    {
                        !loader && data.length>0 &&
                        <>
                            <GenreGrid data={data} genre={`Searched for ${show}`} search={true}/>
                        </>
                    }
                </div>
            </div>
        </>
    )
}