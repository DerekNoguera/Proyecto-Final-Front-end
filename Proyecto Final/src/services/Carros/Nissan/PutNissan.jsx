import axios from "axios";

 const putNissan = async ( imageUrl, Year, Price, Nissan,id) => {
    const response = await axios.put(`http://localhost:3001/Nissan/${id}`, {
        Url:imageUrl,
        marca: Nissan,
        año: Year,
        precio: Price,
    });
    return response.data;

};
export default putNissan