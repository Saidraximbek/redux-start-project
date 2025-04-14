import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  try {
    const response = await axiosInstance(`/product/${params.id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

function Product() {
  const params = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-gray-800 rounded-2xl shadow-lg shadow-black/30 mb-10 h-[500px]">
      <div className="flex flex-col md:flex-row gap-6 items-center">
       
        <img
          src={params.thumbnail}
          alt={params.title}
          className="w-full md:w-1/2 h-[450px] object-cover rounded-xl shadow-md"
        />

       
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-3">{params.title}</h2>
          <p className="text-gray-300 mb-4">{params.description}</p>
          <p className="text-xl font-semibold text-lime-400 mb-1">
            Price: ${params.price}
          </p>
          <p className="text-sm text-gray-400">Brand: {params.brand}</p>
          <p className="text-sm text-gray-400">Stock: {params.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
