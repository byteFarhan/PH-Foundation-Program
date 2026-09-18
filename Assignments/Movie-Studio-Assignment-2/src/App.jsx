import { useEffect, useState } from "react";
import FooterComp from "./components/FooterComp";
import HeroComp from "./components/HeroComp";
import MovieCard from "./components/MovieCard";
import NavbarComp from "./components/NavbarComp";

export default function App() {
  const [girlsShow, setGirlsShow] = useState([]);
  useEffect(() => {
    let ignore = false;
    const getGirlsShow = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");
        const data = await res.json();
        if (!ignore) setGirlsShow(data.slice(0, 5));
      } catch (err) {
        console.error(err.message);
      }
    };
    getGirlsShow();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <main className="dark bg-gray-800 min-h-screen">
      <NavbarComp />
      <HeroComp />
      {/* Showing some Movies */}
      <section className="py-10 md:py-16 w-full md:w-5/6 lg:w-3/4 md:mx-auto px-6 md:px-0">
        <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-center md:text-left my-4 md:my-6">
          Girl's Show
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6">
          {girlsShow?.length > 0 &&
            girlsShow.map((item) => (
              <MovieCard key={item?.show?.id} movie={item} />
            ))}
        </div>
        <div className="mt-8 gap-3 flex flex-col sm:flex-row justify-center">
          <a
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-white w-1/2 md:w-auto mx-auto"
            href="#"
          >
            Explore Now
            <svg
              className="shrink-0 size-4"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </section>
      <FooterComp />
    </main>
  );
}
