import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
  try {
    request.method === "POST";
    const productData = request.body;
    await Product.create(productData);

    return response.status(201).json({ status: "Product created" });
  } catch (error) {
    console.log("An error happened:", error);
    return response.status(400).json({ error: error.message });
  }
}
