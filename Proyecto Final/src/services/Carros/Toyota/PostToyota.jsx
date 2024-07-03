import axios from "axios";

const postToyota = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Toyota`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export default postToyota