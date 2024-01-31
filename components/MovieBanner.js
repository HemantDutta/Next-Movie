export default function MovieBanner({banner}) {
    return (
        <>
            <div className="mb container">
                <div className="mb-container">
                    <img src={banner.primaryImage.url} alt={banner.titleText.text} className="abs-bg"/>
                    <div className="overlay"/>
                    <div className="content">
                        <span className="big-head-style head sixty-four">{banner.titleText.text}</span>
                        <span className="tag">{banner.primaryImage.caption.plainText}</span>
                        <span className="date">Coming {banner.releaseDate.day}/{banner.releaseDate.month}/{banner.releaseDate.year}</span>
                    </div>
                </div>
            </div>
        </>
    )
}