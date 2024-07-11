import axios from "axios";
 const getHonda = async () => {
    try {
            const response = await axios.get(`http://localhost:3001/Honda`, {
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }


};
export default getHonda