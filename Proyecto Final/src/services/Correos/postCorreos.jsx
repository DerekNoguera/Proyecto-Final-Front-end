import axios from "axios";

export const postCorreos = async (nombre,apellido,email,mensaje) => {
    try {
         const response = await axios.post(`http://localhost:3001/correos`, {
        Nombre:nombre,
        Apellido:apellido,
        Email:email,
        Mensaje:mensaje,
    });
    return response.data;
    } catch (error) {
        console.log(error);
    }
   

};
export default postCorreos;
