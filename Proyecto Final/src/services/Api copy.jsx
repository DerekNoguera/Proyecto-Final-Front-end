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

export const postNissan = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Nissan`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export const getNissan = async () => {
    const response = await axios.get(`http://localhost:3001/Nissan`, {
    });
    return response.data;

};

export const postFerrari = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Ferrari`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export const getFerrari = async () => {
    const response = await axios.get(`http://localhost:3001/Ferrari`, {
    });
    return response.data;

};
export const postLambo = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Lambo`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export const getLambo = async () => {
    const response = await axios.get(`http://localhost:3001/Lambo`, {
    });
    return response.data;

};
export const postChevrolet = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Chevrolet`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export const getChevrolet = async () => {
    const response = await axios.get(`http://localhost:3001/Chevrolet`, {
    });
    return response.data;

};
export const postHonda = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Honda`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export const getHonda = async () => {
    const response = await axios.get(`http://localhost:3001/Honda`, {
    });
    return response.data;

};
export const postToyota = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Toyota`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
export const getToyota = async () => {
    const response = await axios.get(`http://localhost:3001/Toyota`, {
    });
    return response.data;

};


