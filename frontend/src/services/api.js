import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
})

export function deleteItem(slug) {
    axios
        .delete(`/api/portfolio/${slug}`)
        .then(res => {
            console.log(`Deletado: ${slug}`);
            console.log(res);
            return res;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
}

export function editItem(slug, { title, description, longDescription, image, technologies }) {
    console.log(`Editado: ${slug}`);
}

export function addItem({ title, description, longDescription, image, technologies }) {
    axios
        .post('/api/portfolio/', {
            title,
            description,
            longDescription,
            image,
            technologies
        })
        .then(res => {
            console.log('Success: ', res);
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

export default api;