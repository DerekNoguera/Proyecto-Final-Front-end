import axios from "axios";

 const putHonda = async ( imageUrl, Year, Price,Honda,id) => {
    try {
        const response = await axios.put(`http://localhost:3001/Honda/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Honda,
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
    

};
export default putHonda