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
            ObjTarea: [],
        });
        return response.data;
};
// export const registerUser = async (user, email, password) =>{
//     try {
//         const response = await fetch('http://localhost:3000/api/aplicacion/', {
//             method: 'POST', // metodo post para que se haga un post de lo que añadi
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 user: user,
//                 email: email,
//                 password: password,
//                 ObjTarea: []

//             })
//         });
//         const data = await response.json();
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }