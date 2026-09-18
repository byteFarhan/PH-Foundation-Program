import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import HeroComp from "../components/HeroComp";
import MovieCard from "../components/MovieCard";

export default function AllMovies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getAllMovies = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();
        if (!ignore) setMovies(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getAllMovies();
    return () => {
      ignore = true;
    };
  }, []);
  //   console.log(movies);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <>
      <main className="dark:bg-gray-800">
        <HeroComp />
        <section className="lg:w-2/3 md:mx-auto md:w-4/5 w-full px-6 md:px-0 py-8 md:py-16">
          <div>
            <form className="relative flex gap-2 md:gap-4">
              <div className="absolute inset-y-0 inset-s-0 flex items-center pointer-events-none z-20 ps-3.5 dark:text-white">
                <svg
                  className="shrink-0 size-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input
                className="border dark:border-white dark:text-white py-2.5 py-3 ps-10 pe-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                required={true}
                type="text"
                placeholder="Type a name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button onClick={(e) => handleSearch(e)} type="submit">
                Search
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white my-4 md:my-6">
              All Movies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6">
              {movies?.length > 0 &&
                movies.map((item) => (
                  <MovieCard
                    key={item?.id ? item.id : item?.show?.id}
                    movie={item?.show ? item?.show : item}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
