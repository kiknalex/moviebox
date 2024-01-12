export default function Card() {
    return (
        <div>
            <a href="#">
            <img src="" alt="movie name" width="40" height="80" />
            </a>
            <p>country, year</p>
            <h3>Stranger Things</h3>
            <div className="flex gap-2 py-2">
                <p><span>imdbLogo</span>10/100</p>
                <p><span>tomatoLogo</span> 20%</p>
            </div>
            <p>Action, Adventure, Horror</p>
        </div>
    )
}