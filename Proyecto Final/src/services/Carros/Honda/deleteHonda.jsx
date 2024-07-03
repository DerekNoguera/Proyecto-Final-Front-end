async function deleteHonda (id) {
    const response = await fetch(`http://localhost:3001/Honda/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteHonda