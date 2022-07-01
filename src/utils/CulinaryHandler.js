import Axios from 'axios';
import swal from 'sweetalert';

const checkCulinaryForm = (dataCulinary) => {
  const {culinaryName, address, image, description, openTime, openDay, contactNumber} = dataCulinary;

  if (!culinaryName || !address || !image || !description || !openTime || !openDay || !contactNumber) {
    return swal({
      title: "Update Failed",
      text: 'All field must be filled',
      icon: 'success',
      button: 'Ok',
    });
  }
}

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
const updateCulinary = (dataCulinary, id) => {
  const {culinaryName, address, image, description, openTime, openDay, contactNumber} = dataCulinary;
  const data = new FormData();
  data.append('culinary_name', culinaryName);
  data.append('address', address);
  if(image){
    data.append('image', image);
  }
  data.append('desc', description);
  data.append('open_time', openTime);
  data.append('open_day', openDay);
  data.append('contact_number', contactNumber);

  checkCulinaryForm(dataCulinary);

  Axios.put(`http://localhost:4000/v1/culinary/${id}`, data, {
    withCredentials: true,
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
  .then(response => {
    if(response.status === 200) {
      swal({
        title: "Update Culinary Information Success",
        text: `${response.data.message}`,
        icon: 'success',
        button: "Ok",
      })
      .then(result => {
        window.location.href = '/culinary';
      });
    }
  })
  .catch(error => {
    swal({
      title: "Update Failed",
      text: "All field must be filled",
      icon: "error",
      button: "Ok"
    });
  });
}

const deleteCulinary = (id) => {
  swal({
    title: "Delete Culinary?",
    text: "Culinary Information will permanent delete?",
    icon: "warning",
    buttons: ["Cancel", "Ok"],
    dangerMode: true,
  })
  .then(willDelete => {
    if(willDelete) {
      Axios.delete(`http://localhost:4000/v1/culinary/${id}`, {
        withCredentials: true,
      })
      .then(response => {
        if(response.status === 200) {
          swal("Delete Success", {
            icon: "success",
          }).then(res => {
            window.location.href = `/culinary`;
          })
        }
      })
      .catch(err => {
        console.log('Error: ', err);
      })
    }
  });
}

export {
  getAllCulinary, 
  getDetailCulinary,
  createCulinary,
  updateCulinary,
  deleteCulinary
};
