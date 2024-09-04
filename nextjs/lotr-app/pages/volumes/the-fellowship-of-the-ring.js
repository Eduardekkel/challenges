import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function handleVolumeOne() {
  const volumeOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
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
        <li className="next-tab">
          <Link href="/volumes/the-two-towers">next Volume</Link>
        </li>
      </ul>
      <div className="image">
        <Image
          src={volumeOne.cover}
          height={230}
          width={140}
          alt="Cover of the Fellowship of the Ring"
        />
      </div>
    </div>
  );
}
