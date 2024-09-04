import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function handleVolumeOne() {
  const volumeOne = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <div>
      <p>
        <Link href="/volumes/volumes">← All Volumes</Link>
      </p>
      <h2 className="title">{volumeOne.title}</h2>
      <p className="description">{volumeOne.description}</p>
      <ul className="books-ordinal">
        {volumeOne.books[0].ordinal}
        <li className="ordinal">{volumeOne.books[0].title}</li>
      </ul>
      <ul className="books-ordinal">
        {volumeOne.books[1].ordinal}
        <li className="ordinal">{volumeOne.books[1].title}</li>
      </ul>
      <br />
      <ul className="navigation">
        <li className="prev-tab">
          <Link href="/volumes/the-two-towers">previous Volume</Link>
        </li>
      </ul>
    </div>
  );
}
