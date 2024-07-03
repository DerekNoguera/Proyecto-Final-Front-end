import axios from "axios";

const postHonda = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Honda`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export default postHonda