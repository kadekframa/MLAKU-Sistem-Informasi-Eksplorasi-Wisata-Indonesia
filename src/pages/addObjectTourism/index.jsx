import React from "react";
import './addObjectTourism.css'
import Button from "../../components/atoms/Button";

const AddObjectTourism = () => {
    return (
        <div className="main">
            <div class="addGambarContainer">
                <i class="fa-solid fa-image fa-3x" id="icon"></i>
                <h5>Tambahkan Gambar</h5>
            </div>

            <div class="container">
                <div class="containerKiri">
                    <h2 id="judul">Nama Destinasi</h2>

                    <div class="dropdownContainer">
                        <div class="dropdown1">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategori
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="##">Action</a></li>
                                    <li><a class="dropdown-item" href="##">Another action</a></li>
                                    <li><a class="dropdown-item" href="##">Something else here</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="dropdown2">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Kota
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="##">Action</a></li>
                                    <li><a class="dropdown-item" href="##">Another action</a></li>
                                    <li><a class="dropdown-item" href="##">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="inputContainer">
                        <div class="input-group">
                            <input type="text" id="name" required class="inputOne"></input>
                            <label for="name" class="input-label-one"> Alamat</label>
                        </div>

                        <div class="input-group">
                            <input type="text" id="name" required class="inputTwo"></input>
                            <label for="name" class="input-label-two"> Deskripsi tempat wisata...</label>
                        </div>
                    </div>

                    <div class="jamOperasi">
                        <div class="dropdown3">
                            <div class="dropdown">
                                <h4 id="jamBuka">Jam Buka</h4>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    10:00
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="##">Action</a></li>
                                    <li><a class="dropdown-item" href="##">Another action</a></li>
                                    <li><a class="dropdown-item" href="##">Something else here</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="dropdown4">
                            <div class="dropdown">
                                <h4 id="jamTutup">Jam Tutup</h4>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    17:00
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="##">Action</a></li>
                                    <li><a class="dropdown-item" href="##">Another action</a></li>
                                    <li><a class="dropdown-item" href="##">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="containerKanan">
                    <div class="jadwalBuka">
                        <h4 id="hariBuka">Hari Buka</h4>
                        <span>
                            <h4 id="harisatu">Senin-Jumat</h4>
                            <h4 id="haridua">Senin-Sabtu</h4>
                        </span>
                        <span>
                            <h4 id="haritiga">Senin-Minggu</h4>
                            <h4 id="hariempat"> Setiap Hari</h4>
                        </span>
                    </div>

                    <div class="contactPerson">
                        <h4>Kontak yang bisa dihubungi</h4>
                        <div class="addIcon1">
                            <a href="##" id="addIcon1">
                                <i class="fa-solid fa-user-plus"></i>
                            </a>
                        </div>

                        <div class="inputContainer1">
                            <div class="input-group">
                                <input type="text" id="name" required class="inputnama1"></input>
                                <label for="name" class="input-label-name1"> Nama </label>
                            </div>
                            <div class="input-group" id="inputhp1">
                                <input type="text" id="name" required class="inputhp1"></input>
                                <label for="name" class="input-label-hp1"> Nomor HP </label>
                            </div>
                        </div>

                    </div>

                    <div class="sewaTourGuide">
                        <h4>Sewa Tour Guide</h4>
                        <div class="addIcon2">
                            <a href="##" id="addIcon2">
                                <i class="fa-solid fa-user-plus"></i>
                            </a>
                        </div>
                        <div class="inputContainer2">
                            <div class="input-group">
                                <input type="text" id="name" required class="inputnama2"></input>
                                <label for="name" class="input-label-name2"> Nama </label>
                            </div>
                            <div class="input-group">
                                <input type="text" id="name" required class="inputhp2"></input>
                                <label for="name" class="input-label-hp2"> Nomor HP </label>
                            </div>
                        </div>

                    </div>

                    <div class="save">
                        <Button children="Simpan" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddObjectTourism; 