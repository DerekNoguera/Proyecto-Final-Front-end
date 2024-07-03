import axios from "axios";

 const postNissan = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Nissan`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export default postNissan