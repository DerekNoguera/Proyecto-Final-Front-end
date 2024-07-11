import axios from "axios";

 const getToyota = async () => {
    try {
       const response = await axios.get(`http://localhost:3001/Toyota`, {
    });
    return response.data; 
    } catch (error) {
       console.log(error); 
    }
    

};
export default getToyota