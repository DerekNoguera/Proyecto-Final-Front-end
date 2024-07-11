import axios from "axios";

 const postChevrolet = async (imageUrl, Marca, Year, Price, ) => {
    try {
         const response = await axios.post(`http://localhost:3001/Chevrolet`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
   
}
export default postChevrolet