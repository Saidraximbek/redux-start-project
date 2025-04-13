
import { useFetch } from "../hooks/useFetch"


export const Contact = () => {
    const {error, data} = useFetch("/product")
    console.log(data, error);
    
  return (
    <div className="main-container">Contact me: +998956461007</div>
  )
}


export default Contact