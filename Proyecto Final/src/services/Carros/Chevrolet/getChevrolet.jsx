import axios from "axios";

 const getChevrolet = async () => {
    try {
          const response = await axios.get(`http://localhost:3001/Chevrolet`, {
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
  

};
export default getChevrolet