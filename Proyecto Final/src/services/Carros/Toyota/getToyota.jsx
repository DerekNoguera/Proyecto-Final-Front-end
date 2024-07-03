import axios from "axios";

 const getToyota = async () => {
    const response = await axios.get(`http://localhost:3001/Toyota`, {
    });
    return response.data;

};
export default getToyota