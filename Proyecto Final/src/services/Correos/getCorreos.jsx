import axios from "axios";

export const getCorreos = async () => {
    const response = await axios.get(`http://localhost:3001/correos`, {
    });
    return response.data;

};
export default getCorreos;
