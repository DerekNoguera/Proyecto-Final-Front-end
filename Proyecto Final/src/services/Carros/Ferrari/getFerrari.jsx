import axios from "axios";

 const getFerrari = async () => {
    const response = await axios.get(`http://localhost:3001/Ferrari`, {
    });
    return response.data;

};
export default getFerrari;