import axios from "axios";
import swal from "sweetalert";

const registerUser = (user) => {
    const {
        fullname,
        username,
        email,
        password
    } = user;
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    axios.post('https://mlaku-api.herokuapp.com/v1/auth/register', formData)
        .then((response) => {
            if (response.status === 201) {
                swal({
                        title: "Selamat!",
                        text: `${response.data.message}`,
                        icon: "success",
                        button: "Ok",
                    })
                    .then((result) => {
                        window.location.href = `/login`;
                    });
            }
        })
        .catch((error) => {
            swal({
                title: "Gagal!",
                text: `${error.response.data.message}`,
                icon: "error",
                button: "Ok",
            });
        });
}

const loginUser = (user) => {
    const {
        username,
        password
    } = user;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    axios.post('https://mlaku-api.herokuapp.com/v1/auth/login', formData, {
            withCredentials: true,
        })
        .then((response) => {
            if (response.status === 200) {
                swal({
                        title: "Selamat!",
                        text: `${response.data.message}`,
                        icon: "success",
                        button: "Ok",
                    })
                    .then((result) => {
                        window.location.href = `/`;
                    });
            }
        })
        .catch((error) => {
            swal({
                title: "Gagal Login!",
                text: "Username atau Password Anda Salah.",
                icon: "error",
                button: "Ok",
            });
        });
}

const logoutUser = () => {
    swal({
            title: "Keluar?",
            text: "Apakah Anda yakin untuk keluar dari aplikasi?",
            icon: "warning",
            buttons: ["Batal", "Ok"],
            dangerMode: true,
        })
        .then((willLogout) => {
            if (willLogout) {
                axios.post('https://mlaku-api.herokuapp.com/v1/auth/logout', '', {
                        withCredentials: true,
                    })
                    .then((res) => {
                        swal("Berhasil Logout!", {
                            text: "Logout Success!",
                            icon: "success",
                        }).then((res) => window.location.href = '/login');
                    })
                    .catch((err) => {
                        swal({
                            title: "Gagal Logut!",
                            text: "Logout Failed!",
                            icon: "error",
                            button: "Ok",
                        });
                    });
            }
        });
}

export {
    registerUser,
    loginUser,
    logoutUser
};