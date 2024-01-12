export default function MovieDescription() {
    return (
        <div className="flex flex-col items-start  w-96 gap-2">
            <h3 className="text-5xl">
            John Wick 3 : Parabellum
            </h3>
            <div className="flex gap-2 py-2">
                <p><span>imdbLogo</span>10/100</p>
                <p><span>tomatoLogo</span> 20%</p>
            </div>
            <p className="text-sm font-medium leading-4">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button><span>iconHolder</span>WATCH TRAILER</button>
        </div>
    )
}