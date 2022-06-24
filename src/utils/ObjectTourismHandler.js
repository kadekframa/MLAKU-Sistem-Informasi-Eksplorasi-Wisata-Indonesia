import Axios from 'axios';

const createObjectTourism = (dataObjectTourism) => {
    const {destinationName, address, image, description, openTime, openDay, contactNumber} = dataObjectTourism;
    const data = new FormData();
    data.append('dest_name', destinationName);
    data.append('address', address);
    data.append('image', image);
    data.append('desc', description);
    data.append('open_time', openTime);
    data.append('open_day', openDay);
    data.append('contact_number', contactNumber);

    Axios.post('http://localhost:4000/v1/object-tourism/', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.info('post success: ', res)
      })
      .catch(err => {
        console.info('err: ', err)
      })
}

const getAllObjectTourism = async () => {
    const response = await Axios.get('http://localhost:4000/v1/object-tourism/');
    return response.data;
}
const getDetailObjectTourism = async (id) => {
    const response = await Axios.get(`http://localhost:4000/v1/object-tourism/${id}`);
    return response.data;
}

export {getAllObjectTourism, getDetailObjectTourism, createObjectTourism};