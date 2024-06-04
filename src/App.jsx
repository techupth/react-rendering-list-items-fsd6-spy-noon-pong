import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {" "}
        Movie List Section
        {movies.map((movie) => {
          return (
            <div className="moviecard">
              <div className="image">
                <img src={movie.image} />
              </div>
              <div className="detail">
                Title: {movie.title}
                <br></br>
                year: {movie.year}
                <br></br>
                runtime: {movie.runtime}
                <br></br>
                genres:
                {movie.map((index) => {
                  return index.genres;
                })}
                <br></br>
                imdbRating: {movie.imdbRating}
                <br></br>
                imdbVotes: {movie.imdbVotes}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
