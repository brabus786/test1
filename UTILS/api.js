import axios from 'axios';

export const addBooks = async (formData) =>{
    const res = await axios.post('http://localhost:3001/add_book',formData);
    return res;
}

export const deleteBook = async (id) => {
    const res = await axios.post('http://localhost:3001/delete_book',id);
    return res;
}

export const editBook = async (formData) => {
    const res = await axios.post('http://localhost:3001/edit_book',formData);
    return res;
}

export const allBooks = async () => {
    const res = await axios.get('http://localhost:3001/all_books');
    return res;
}

export const oneBook = async (id) => {
    const res = await axios.get(`http://localhost:3001/one_book/${id}`);
    return res;
}