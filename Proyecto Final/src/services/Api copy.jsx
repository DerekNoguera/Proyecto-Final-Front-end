import axios from "axios";
// import { response } from 'express';
export const loginUser = async () => {
    const response = await axios.get("http://localhost:3000/api/aplicacion/", {
    });
    return response.data;

};
export const registerUser = async (user, email, password) => {
        const response = await axios.post("http://localhost:3000/api/aplicacion/", {
            user: user,
            email: email,
            password: password,
            ObjCars: [],
            // rol: "Admin",
            // rol: "User"
        });
        return response.data;
};
export const Vehiculos = async () => {
    const response = await axios.get("http://localhost:3001/Carros", {
    });
    return response.data;

};



