import axios from "axios";

 const putFerrari = async ( imageUrl, Year, Price,Ferrari,id) => {
    const response = await axios.put(`http://localhost:3001/Ferrari/${id}`, {
        marca: Ferrari,
        Url:imageUrl,
        año: Year,
        precio: Price,
    });
    return response.data;

};
export default putFerrari