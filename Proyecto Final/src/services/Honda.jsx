import axios from "axios";
 const getHonda = async () => {
    const response = await axios.get(`http://localhost:3001/Honda`, {
    });
    return response.data;

};
export default getHonda