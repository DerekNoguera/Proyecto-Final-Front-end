import axios from "axios";

 const putChevrolet = async ( imageUrl, Year, Price,Chevrolet,id) => {
    try {
         const response = await axios.put(`http://localhost:3001/Chevrolet/${id}`, {
        marca: Chevrolet,
        Url:imageUrl,
        año: Year,
        precio: Price,
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
   

};
export default putChevrolet