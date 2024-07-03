async function deleteFerrari (id) {
    const response = await fetch(`http://localhost:3001/Ferrari/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteFerrari