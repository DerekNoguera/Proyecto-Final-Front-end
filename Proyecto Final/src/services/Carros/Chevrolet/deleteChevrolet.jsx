async function deleteChevrolet (id) {
    const response = await fetch(`http://localhost:3001/Chevrolet/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}
export default deleteChevrolet