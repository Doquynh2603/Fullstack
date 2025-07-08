import axios from 'axios'
const url = 'http://localhost:3001/persons'
const getAll = () => {
    const request = axios.get(url)
    return request.then(res => res.data)
}

const addPhone = (person, newPhone) => {
    if (!person) {
        const request = axios.post(url, newPhone)
        return request.then(res => res.data)
    }
    const request = axios.put(`${url}/${person.id}`, newPhone)
    return request.then(res => res.data)
}
const deletePhone = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(res => res.data)
}
export default { getAll, addPhone, deletePhone }