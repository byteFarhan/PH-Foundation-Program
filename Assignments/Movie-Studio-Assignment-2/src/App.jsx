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
      <section className="py-10 md:py-16">
        <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-center my-4 md:my-6">
          Girl's Show
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6 w-full md:w-5/6 lg:w-3/4 md:mx-auto px-6 md:px-0">
          {girlsShow?.length > 0 &&
            girlsShow.map((item) => (
              <MovieCard key={item?.show?.id} movie={item} />
            ))}
        </div>
      </section>
      <FooterComp />
    </main>
  );
}
