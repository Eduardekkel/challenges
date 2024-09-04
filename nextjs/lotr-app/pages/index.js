import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link href="/volumes/volumes">Lord of the Rings</Link>
      </p>
    </div>
  );
}
