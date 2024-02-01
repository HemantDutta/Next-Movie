import {useRouter} from "next/router";

export default function MovieCard({value}) {

    const router = useRouter();

    return (
        <div className="movie-item" onClick={()=>{router.push(`/movie/${value.id}`)}}>
            <div className="poster">
                <img src={value.primaryImage.url} alt={value.titleText.text}/>
            </div>
            <div className="content">
                <span className="title big-text-style">{value.titleText.text}</span>
                <span className="tag">{value.primaryImage.caption.plainText.substring(0,25) + "..."}</span>
            </div>
        </div>
    )
}