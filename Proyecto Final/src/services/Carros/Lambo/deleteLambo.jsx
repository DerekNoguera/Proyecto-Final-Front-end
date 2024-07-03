async function deleteLambo (id) {
    const response = await fetch(`http://localhost:3001/Lamborghini/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteLambo