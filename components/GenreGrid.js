import MovieCard from "./MovieCard";

export default function GenreGrid({genre, data, search}) {

    //Static Data
    const genreText = {
        Action: "For all your action needs!",
        Drama: "Need more Drama in life?",
        Horror: "Spooky Season is here!"
    };

    return (
        <>
            <div className={`gg ${search?"":"container"}`}>
                <div className={`gg-container ${genre}`}>
                    <div className="head">
                        <span className="genre head-style sixty-four">{genre}</span>
                        <span className="tag text-style">{genreText[genre] || data.filter(value=> value.primaryImage!=null).length+" results found..."}</span>
                    </div>
                    <div className="grid" style={{justifyContent: `${!search?"":"center"}`}}>
                        {
                            !search &&
                            data.filter(value=> value.primaryImage!=null).slice(0,4).map((value, index) => {
                                return (
                                    <MovieCard value={value} key={index}/>
                                )
                            })
                        }
                        {
                            search &&
                            data.filter(value=> value.primaryImage!=null).map((value, index) => {
                                return (
                                    <MovieCard value={value} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}