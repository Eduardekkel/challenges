import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router.js";
export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (currentVolume === -1) return null;

  const currentVolumeIndex = volumes[currentVolume];
  const previousVolume = volumes[currentVolume - 1] || null;
  const nextVolume = volumes[currentVolume + 1] || null;

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image src={cover} alt="cover" width={160} height={240} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      {previousVolume && (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      )}
      {nextVolume && (
        <div>
          <Link href={`/volumes/${currentVolume.nextVolume.slug}`}>
            Next Volume: {currentVolume.nextVolume.title} →
          </Link>
        </div>
      )}
    </>
  );
}
