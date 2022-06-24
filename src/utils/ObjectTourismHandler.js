import axios from 'axios';

const createObjectTourism = (dataObjectTourism) => {
    const {dest_name, address, image, desc, open_time, open_day, contact_number} = dataObjectTourism;
    const formData = new FormData();
    formData.append('dest_name', dest_name);
    formData.append('address', address);
    formData.append('image', image);
    formData.append('desc', desc);
    formData.append('open_time', open_time);
    formData.append('open_day', open_day);
    formData.append('contact_number', contact_number);
}

const getAllObjectTourism = async () => {
    const response = await axios.get('http://localhost:4000/v1/object-tourism/');
    return response.data;
}
const getDetailObjectTourism = async (id) => {
    const response = await axios.get(`http://localhost:4000/v1/object-tourism/${id}`);
    return response.data;
}

export {getAllObjectTourism, getDetailObjectTourism, createObjectTourism};