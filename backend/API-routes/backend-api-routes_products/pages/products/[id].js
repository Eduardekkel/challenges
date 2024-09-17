import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  return (
    <div>
      <h1>Product Details: {data?.name}</h1>
      <ul>
        <p>Description: {data?.description}</p>
        <li>Price: {data?.price + data?.currency}</li>
        <small>Category: {data?.category}</small>
      </ul>
      {}
    </div>
  );
}
