import Axios from 'axios';
import swal from 'sweetalert';

const checkAccomodationForm = (dataAccomodation) => {
  const { accomodationName, address, image, description, openTime, openDay, contactNumber } = dataAccomodation;

  if (!accomodationName || !address || !image || !description || !openTime || !openDay || !contactNumber) {
    return swal({
      title: "Update Failed",
      text: 'All field must be filled',
      icon: 'success',
      button: 'Ok',
    });
  }
}

const createAccomodation = (dataAccomodation) => {
  const { accomodationName, address, image, description, openTime, openDay, contactNumber, user_name, user_id } = dataAccomodation;
  const data = new FormData();
  data.append('accomodation_name', accomodationName);
  data.append('address', address);
  data.append('image', image);
  data.append('desc', description);
  data.append('open_time', openTime);
  data.append('open_day', openDay);
  data.append('contact_number', contactNumber);
  data.append('user_name', user_name);
  data.append('user_id', user_id);

  Axios.post('http://localhost:4000/v1/accomodation/', data, {
    withCredentials: true,
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
    .then(res => {
      if (res.status === 201) {
        swal({
          title: "Data Berhasil Diinput!",
          text: `${res.data.message}`,
          icon: "success",
          button: "Ok",
        })
          .then(result => {
            window.location.href = '/accomodation';
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

const getAllAccomodation = async () => {
  const response = await Axios.get('http://localhost:4000/v1/accomodation/');
  return response.data;
}
const getDetailAccomodation = async (id) => {
  const response = await Axios.get(`http://localhost:4000/v1/accomodation/${id}`);
  return response.data;
}

const updateAccomodation = (dataAccomodation, id) => {
  const { accomodationName, address, image, description, openTime, openDay, contactNumber } = dataAccomodation;
  const data = new FormData();
  data.append('accomodation_name', accomodationName);
  data.append('address', address);
  if (image) {
    data.append('image', image);
  }
  data.append('desc', description);
  data.append('open_time', openTime);
  data.append('open_day', openDay);
  data.append('contact_number', contactNumber);

  checkAccomodationForm(dataAccomodation);

  Axios.put(`http://localhost:4000/v1/accomodation/${id}`, data, {
    withCredentials: true,
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
    .then(response => {
      if (response.status === 200) {
        swal({
          title: "Update Accomodation Information Success",
          text: `${response.data.message}`,
          icon: 'success',
          button: "Ok",
        })
          .then(result => {
            window.location.href = '/accomodation';
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

const deleteAccomodation = (id) => {
  swal({
    title: "Delete Accomodation?",
    text: "Accomodation Information will permanent delete?",
    icon: "warning",
    buttons: ["Cancel", "Ok"],
    dangerMode: true,
  })
    .then(willDelete => {
      if (willDelete) {
        Axios.delete(`http://localhost:4000/v1/accomodation/${id}`, {
          withCredentials: true,
        })
          .then(response => {
            if (response.status === 200) {
              swal("Delete Success", {
                icon: "success",
              }).then(res => {
                window.location.href = `/accomodation`;
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
  getAllAccomodation,
  getDetailAccomodation,
  createAccomodation,
  updateAccomodation,
  deleteAccomodation
};
