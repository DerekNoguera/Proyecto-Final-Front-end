import axios from "axios";

 const postFerrari = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Ferrari`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export default postFerrari