import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
// import { Input, Button, Upload, TextArea, Gap } from '../../components';
import Axios from 'axios';
import "./addObjectTourism.css";
import { createObjectTourism } from '../../utils/ObjectTourismHandler';

const AddObjectTourism = () => {
  const [destinationName, setDestinationName] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [openDay, setOpenDay] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  const onSubmit = () => {
    console.info('destinationName:', destinationName);
    console.info('image:', image);

    const objectTourism = {
      destinationName,
      address,
      image,
      imagePreview,
      description,
      openTime,
      openDay,
      contactNumber,
    };

    createObjectTourism(objectTourism);
  }
  return (
    <main className='container add-object-wrapper'>
      <h1>Create Object Tourism</h1>
      <div className='container mb-5 mt-5 form-wrapper'>
        <Form>
          <FormGroup>
            <Label>Destination Name</Label>
            <Input value={destinationName} onChange={e => setDestinationName(e.target.value)} required />
          </FormGroup>

          <FormGroup>
            <Label>Address</Label>
            <Input value={address} onChange={e => setAddress(e.target.value)} required />
          </FormGroup>

          <FormGroup>
            <Label for="image">Image Destination</Label>
            {image && <img className="preview d-block mb-3" src={imagePreview} alt="preview" />}
            <Input id="image" name="image" type="file" onChange={e => onImageUpload(e)} required />
            <FormText>&#8505; Tampilkan foto terbaik dari Destination Wisata yang ingin datambahkan.</FormText>
          </FormGroup>

          <FormGroup>
            <Label for="description">Deskripsi</Label>
            <textarea className="form-control" name="description" id="description" rows="10" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            <FormText>&#8505; Berikan deskripsi informasi dari objek wisata yang ditambahkan agar orang lain tertarik untuk mengunjunginya.</FormText>
          </FormGroup>

          <FormGroup>
            <Label>Open Time</Label>
            <Input value={openTime} onChange={e => setOpenTime(e.target.value)} required />
          </FormGroup>

          <FormGroup>
            <Label>Open Day</Label>
            <Input value={openDay} onChange={e => setOpenDay(e.target.value)} required />
          </FormGroup>

          <FormGroup>
            <Label>Contact Number</Label>
            <Input value={contactNumber} onChange={e => setContactNumber(e.target.value)} required />
          </FormGroup>

          <div className="d-flex justify-content-end">
            <Button color="success" className="mt-4 px-4 py-2" onClick={onSubmit}>Add</Button>
          </div>
        </Form>
      </div>
    </main>
  )
}

export default AddObjectTourism;
