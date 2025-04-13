import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductList = () => {
  const {
    data: { products },
  } = useLoaderData();
  console.log(products);

  return (
    <div className="p-6 main-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products &&
        products.map((p) => {
          return (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{p.title}</h2>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">{p.price}</span>
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {p.rank}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
