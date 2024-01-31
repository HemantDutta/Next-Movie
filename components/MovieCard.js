export default function MovieCard({value}) {
    return (
        <div className="movie-item">
            <div className="poster">
                <img src={value.primaryImage.url} alt={value.titleText.text}/>
            </div>
            <div className="content">
                <span className="title big-text-style">{value.titleText.text}</span>
                <span className="tag">{value.primaryImage.caption.plainText}</span>
            </div>
        </div>
    )
}