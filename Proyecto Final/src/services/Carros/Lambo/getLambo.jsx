
import axios from "axios";

 const getLambo = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/Lamborghini`, {
    });
    return response.data; 
    } catch (error) {
        console.log();
    }
   

};
export default getLambo