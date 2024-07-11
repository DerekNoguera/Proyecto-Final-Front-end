import axios from "axios";

 const getFerrari = async () => {
    try {
       const response = await axios.get(`http://localhost:3001/Ferrari`, {
    });
    return response.data;  
    } catch (error) {
        console.log(error);
    }
   

};
export default getFerrari;