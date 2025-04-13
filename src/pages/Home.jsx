import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async () => {
  const req = await axiosInstance("/product");
  return req;
};

const Home = () => {
  const {
    data: { product },
  } = useLoaderData();
  console.log(product);
  
  return <div>Home</div>;
};

export default Home;
