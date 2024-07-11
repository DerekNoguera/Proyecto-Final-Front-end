
async function deleteCorreo (id) {
    try {
       const response = await fetch(`http://localhost:3001/correos/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    } 
    } catch (error) {
        console.log(error);
    }
    
}
export default deleteCorreo