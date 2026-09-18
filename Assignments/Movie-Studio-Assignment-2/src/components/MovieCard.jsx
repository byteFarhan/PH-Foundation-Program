import { Button, Card } from "flowbite-react";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { FaStar } from "react-icons/fa6";
import { HiMiniCalendarDateRange } from "react-icons/hi2";

export default function MovieCard({ movie }) {
  const { score, show } = movie;
  const { id, url, name, type, language, rating, image, summary, premiered } =
    show;
  const [showModal, setShowModal] = useState(false);
  const [movieToShow, setMovieToShow] = useState(null);
  const handleShowModal = (theMovie) => {
    setMovieToShow(theMovie);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setMovieToShow(null);
  };
  return (
    <div>
      {showModal && (
        <MovieDetailsModal
          showModal={showModal}
          onClose={handleCloseModal}
          movie={movieToShow}
        />
      )}
      <Card className="" imgAlt={name} imgSrc={image?.original}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex justify-between items-center dark:text-white font-medium ">
          <span className="flex justify-center items-center gap-2">
            <FaStar className="text-yellow-300" />{" "}
            {`${rating?.average || "N/A"}`}
          </span>
          <span className="flex justify-center items-center w-full gap-2">
            <HiMiniCalendarDateRange />
            {`${premiered || "N/A"}`}
          </span>
          <span></span>
        </div>
        <Button
          className="cursor-pointer"
          onClick={() => handleShowModal(movie)}
        >
          See Details
        </Button>
        {/* <p
        className="font-normal text-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: summary }}
      /> */}
      </Card>
    </div>
  );
}
