import axios from "axios";

export const getNissan = async () => {
    try {
          const response = await axios.get(`http://localhost:3001/Nissan`, {
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
  

};
export default getNissan;
