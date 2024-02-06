import Header from "./components/Header/Header.jsx";
import MovieIntro from "./components/MovieIntro/MovieIntro.jsx";
import FeaturedCards from "./components/Cards/FeaturedCards.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <MovieIntro />
        <FeaturedCards
          type={"movie"}
          category={"now_playing"}
          heading="Now Playing"
        />
        <FeaturedCards
          type={"movie"}
          category={"top_rated"}
          heading="Top Rated"
        />
        <FeaturedCards
          type={"person"}
          category={"popular"}
          heading="Featured Casts"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
