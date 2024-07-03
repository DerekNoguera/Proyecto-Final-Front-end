import axios from "axios";

 const putHonda = async ( imageUrl, Year, Price,Honda,id) => {
    const response = await axios.put(`http://localhost:3001/Honda/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Honda,
    });
    return response.data;

};
export default putHonda