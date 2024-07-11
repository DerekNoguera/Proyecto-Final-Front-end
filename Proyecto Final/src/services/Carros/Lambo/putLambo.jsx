import axios from "axios";

 const putLambo = async ( imageUrl, Year, Price,Lamborghini,id) => {
    try {
         const response = await axios.put(`http://localhost:3001/Lamborghini/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Lamborghini,
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
   

};
export default putLambo