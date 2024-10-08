import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
