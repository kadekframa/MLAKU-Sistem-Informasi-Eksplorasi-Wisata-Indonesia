import Axios from 'axios';
import swal from 'sweetalert';

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
        if(res.status === 201) {
          swal({
            title: "Data Berhasil Diinput!",
            text: `${res.data.message}`,
            icon: "success",
            button: "Ok",
          })
          .then(result => {
            window.location.href = '/';
          })
        }
      })
      .catch(err => {
        swal({
            title: "Gagal Input Data!",
            text: `${err.response.data.message}`,
            icon: "error",
            button: "Ok",
        });
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

const deleteObjectTourism = (id) => {
  swal({
    title: "Delete Object Tourism?",
    text: "Object Tourism Information will permanent delete?",
    icon: "warning",
    buttons: ["Cancel", "Ok"],
    dangerMode: true,
  })
  .then(willDelete => {
    if(willDelete) {
      Axios.delete(`http://localhost:4000/v1/object-tourism/${id}`, {
        withCredentials: true,
      })
      .then(response => {
        if(response.status === 200) {
          swal("Delete Success", {
            icon: "success",
          }).then(res => {
            window.location.href = `/object-tourism`;
          })
        }
      })
      .catch(err => {
        console.log('Error: ', err);
      })
    }
  });
}

export {getAllObjectTourism, getDetailObjectTourism, createObjectTourism, deleteObjectTourism};