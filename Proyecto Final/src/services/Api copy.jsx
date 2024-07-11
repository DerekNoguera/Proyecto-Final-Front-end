import axios from "axios";
// import { response } from 'express';
//GET, POST, PUT y DELETE de los users, de los carros y correos/mensajes de contactanos, con axios y algunos deletes con FETCH
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
 const getNissan = async () => {
    const response = await axios.get(`http://localhost:3001/Nissan`, {
    });
    return response.data;

};
const postNissan = async (imageUrl, Marca, Year, Price) => {
    const response = await axios.post(`http://localhost:3001/Nissan`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
const putNissan = async ( imageUrl, Year, Price, Nissan,id) => {
    const response = await axios.put(`http://localhost:3001/Nissan/${id}`, {
        Url:imageUrl,
        marca: Nissan,
        año: Year,
        precio: Price,
    });
    return response.data;

};
async function deleteNissan (id) {
    const response = await fetch(`http://localhost:3001/Nissan/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
const getChevrolet = async () => {
    const response = await axios.get(`http://localhost:3001/Chevrolet`, {
    });
    return response.data;

};
const postChevrolet = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Chevrolet`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
async function deleteChevrolet (id) {
    const response = await fetch(`http://localhost:3001/Chevrolet/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
const putChevrolet = async ( imageUrl, Year, Price,Chevrolet,id) => {
    const response = await axios.put(`http://localhost:3001/Chevrolet/${id}`, {
        marca: Chevrolet,
        Url:imageUrl,
        año: Year,
        precio: Price,
    });
    return response.data;

};
const getFerrari = async () => {
    const response = await axios.get(`http://localhost:3001/Ferrari`, {
    });
    return response.data;

};
async function deleteFerrari (id) {
    const response = await fetch(`http://localhost:3001/Ferrari/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
const postFerrari = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Ferrari`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
const putFerrari = async ( imageUrl, Year, Price,Ferrari,id) => {
    const response = await axios.put(`http://localhost:3001/Ferrari/${id}`, {
        marca: Ferrari,
        Url:imageUrl,
        año: Year,
        precio: Price,
    });
    return response.data;

};
const getHonda = async () => {
    const response = await axios.get(`http://localhost:3001/Honda`, {
    });
    return response.data;

};
const postHonda = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Honda`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
const putHonda = async ( imageUrl, Year, Price,Honda,id) => {
    const response = await axios.put(`http://localhost:3001/Honda/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Honda,
    });
    return response.data;

};
async function deleteHonda (id) {
    const response = await fetch(`http://localhost:3001/Honda/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}

const getLambo = async () => {
    const response = await axios.get(`http://localhost:3001/Lamborghini`, {
    });
    return response.data;

};
const postLambo = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Lamborghini`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
const putLambo = async ( imageUrl, Year, Price,Lamborghini,id) => {
    const response = await axios.put(`http://localhost:3001/Lamborghini/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Lamborghini,
    });
    return response.data;

};
async function deleteLambo (id) {
    const response = await fetch(`http://localhost:3001/Lamborghini/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
const getToyota = async () => {
    const response = await axios.get(`http://localhost:3001/Toyota`, {
    });
    return response.data;

};
const postToyota = async (imageUrl, Marca, Year, Price, ) => {
    const response = await axios.post(`http://localhost:3001/Toyota`, {
        Url: imageUrl,
        marca: Marca,
        año: Year,
        precio: Price,
    });
    return response.data;
}
const putToyota = async ( imageUrl, Year, Price,Toyota,id) => {
    const response = await axios.put(`http://localhost:3001/Toyota/${id}`, {
        Url:imageUrl,
        año: Year,
        precio: Price,
        marca: Toyota,
    });
    return response.data;

};
async function deleteToyota (id) {
    const response = await fetch(`http://localhost:3001/Toyota/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default {getNissan,postNissan,putNissan,deleteNissan,getChevrolet, postChevrolet,deleteChevrolet,putChevrolet,getFerrari,deleteFerrari,postFerrari,
    putFerrari,getHonda,postHonda,putHonda,deleteHonda,getLambo,postLambo,putLambo,deleteLambo,getToyota,postToyota,putToyota,deleteToyota};
