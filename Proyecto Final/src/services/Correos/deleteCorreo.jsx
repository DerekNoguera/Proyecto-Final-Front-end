
async function deleteCorreo (id) {
    const response = await fetch(`http://localhost:3001/correos/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteCorreo