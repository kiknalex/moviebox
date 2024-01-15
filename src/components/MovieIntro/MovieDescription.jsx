export default function MovieDescription({currentIntro}) {
    const randomScore = (maxScore) => {
        return Math.floor(Math.random() * maxScore);
    }
    console.log(currentIntro);
    return (
        <div className="flex flex-col justify-center items-start h-[600px] w-96 gap-4">
            <h3 className="text-6xl font-normal font-bold leading-14">
            {currentIntro.titleText.text}
            </h3>
            <div className="flex gap-6 py-2 text-xs font-normal font-normal leading-3 ">
                <div className="flex items-center gap-2 ">
                    <img src="src\assets\imdb.png" alt="imdb" width="35" height="17" />
                    <p className="">{currentIntro.ratingsSummary.aggregateRating}/10</p>
                </div>
                    <div className="flex items-center gap-2">
                        <img src="src\assets\tomato.png" alt="rotten tomatoes" />
                    <p>{randomScore(100)}%</p>
                    </div>
            </div>
            <p className="text-sm font-normal font-medium leading-4">{currentIntro.plot.plotText.plainText}</p>
            <a className="flex justify-center items-center gap-2 py-2 px-6 bg-red-800 rounded-md hover:bg-red-700 duration-300 text-sm cursor-pointer font-bold tracking-wider uppercase"><span><img src="src\assets\playIcon.svg" alt="" width="16" height="16" /></span>WATCH TRAILER</a>
        </div>
    )
}