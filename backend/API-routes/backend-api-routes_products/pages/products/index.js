import useSWR from "swr";

export default function ProductPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`/api/products/`, fetcher);

  if (!data) return <div>Loading...</div>;
  if (data.error) return <div>Error failed to load products</div>;
  return (
    <>
      <h1>List of all Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price + product.currency}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
