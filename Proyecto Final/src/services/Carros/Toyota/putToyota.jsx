import axios from "axios";

 const putToyota = async ( imageUrl, Year, Price,Toyota,id) => {
    const response = await axios.put(`http://localhost:3001/Toyota/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Toyota,
    });
    return response.data;

};
export default putToyota