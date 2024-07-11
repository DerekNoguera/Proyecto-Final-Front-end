async function deleteLambo (id) {
    try {
        const response = await fetch(`http://localhost:3001/Lamborghini/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    } 
    } catch (error) {
        console.log(error);
    }
   
}
export default deleteLambo