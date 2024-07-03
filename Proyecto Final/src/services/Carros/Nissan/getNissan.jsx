import axios from "axios";

export const getNissan = async () => {
    const response = await axios.get(`http://localhost:3001/Nissan`, {
    });
    return response.data;

};
export default getNissan;
