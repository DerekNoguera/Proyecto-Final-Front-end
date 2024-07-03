async function deleteToyota (id) {
    const response = await fetch(`http://localhost:3001/Toyota/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteToyota