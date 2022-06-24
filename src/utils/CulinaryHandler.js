import Axios from 'axios';

const createCulinary = (dataCulinary) => {
    const {culinaryName, address, image, description, openTime, openDay, contactNumber} = dataCulinary;
    const data = new FormData();
    data.append('culinary_name', culinaryName);
    data.append('address', address);
    data.append('image', image);
    data.append('desc', description);
    data.append('open_time', openTime);
    data.append('open_day', openDay);
    data.append('contact_number', contactNumber);

    Axios.post('http://localhost:4000/v1/culinary/', data, {
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

const getAllCulinary = async () => {
    const response = await Axios.get('http://localhost:4000/v1/culinary/');
    return response.data;
}
const getDetailCulinary = async (id) => {
    const response = await Axios.get(`http://localhost:4000/v1/culinary/${id}`);
    return response.data;
}

export {getAllCulinary, getDetailCulinary, createCulinary};