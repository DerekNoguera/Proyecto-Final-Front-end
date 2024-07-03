
import axios from "axios";

 const getLambo = async () => {
    const response = await axios.get(`http://localhost:3001/Lamborghini`, {
    });
    return response.data;

};
export default getLambo