async function deleteNissan (id) {
    try {
         const response = await fetch(`http://localhost:3001/Nissan/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
    } catch (error) {
        console.log(error);
    }
   
}
export default deleteNissan