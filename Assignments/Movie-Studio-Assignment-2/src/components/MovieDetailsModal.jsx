import { Button, Modal } from "flowbite-react";

export default function MovieDetailsModal({ movie, showModal, onClose }) {
  const { score, show } = movie;
  const { id, url, name, type, language, rating, image, summary, premiered } =
    show;
  return (
    <>
      <Modal show={showModal} onClose={onClose} className="">
        <div className="flex flex-col items-center  dark:text-white dark:bg-gray-900 p-6 rounded-base md:flex-row w-full rounded-lg">
          <img
            className="object-cover w-full rounded-lg h-64 md:h-auto md:w-48 mb-4 md:mb-0"
            src={image?.original}
            alt={name}
          />
          <div className="size-full md:px-6 flex flex-col gap-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="flex justify-between items-center dark:text-white font-medium ">
              <span>{`Rating: ${rating?.average || "N/A"}`}</span>
              <span>{`Premiered: ${premiered || "N/A"}`}</span>
            </div>
            {summary ? (
              <p
                className="font-normal text-gray-700 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            ) : (
              <p className="text-lg font-medium">No description available</p>
            )}
            <Button
              onClick={onClose}
              color="red"
              outline
              className="cursor-pointer"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
