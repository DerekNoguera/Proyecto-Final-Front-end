import axios from "axios";

export const getCorreos = async () => {
    try {
           const response = await axios.get(`http://localhost:3001/correos`, {
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
 

};
export default getCorreos;
