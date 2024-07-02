 async function deleteNissan (id) {
    const response = await fetch(`http://localhost:3001/Nissan/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteNissan
