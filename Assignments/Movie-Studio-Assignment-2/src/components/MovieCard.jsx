import { Button, Card } from "flowbite-react";

export default function MovieCard({ movie }) {
  const { score, show } = movie;
  const { id, url, name, type, language, rating, image, summary, premiered } =
    show;
  return (
    <Card className="" imgAlt={name} imgSrc={image?.original}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex justify-between items-center dark:text-white font-medium ">
        <span>{`Rating: ${rating?.average || "N/A"}`}</span>
        <span>{`Premiered: ${premiered || "N/A"}`}</span>
      </div>
      <Button>Details</Button>
      {/* <p
        className="font-normal text-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: summary }}
      /> */}
    </Card>
  );
}
