import axios from "axios";

 const getChevrolet = async () => {
    const response = await axios.get(`http://localhost:3001/Chevrolet`, {
    });
    return response.data;

};
export default getChevrolet