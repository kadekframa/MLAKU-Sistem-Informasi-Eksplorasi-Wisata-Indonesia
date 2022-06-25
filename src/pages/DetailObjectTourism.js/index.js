import React, {useState, useEffect} from 'react';
import { getDetailObjectTourism } from '../../utils/ObjectTourismHandler';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
// import { Gap } from '../../components';
import {useParams} from 'react-router-dom';
import './detailObjectTourism.css'


const DetailObjectTourism = () => {
  const [data, setData] = useState({});
  const getParams = useParams();
  useEffect(() => {
    console.info('params: ', getParams.id);
    getDetailObjectTourism(getParams.id)
      .then(response => {
        console.info(response.data);
        setData(response.data);
      })
      .catch(err => {
        console.info('error: ', err);
      })
  }, [])
  return (
      <main className="container detail-wrapper">
  
        <div className="row justify-content-center">

          <div className="col-md-6 image-wrapper">
            <img src={`http://localhost:4000/${data.image}`} alt="Image_Tourism" className="image-object-tourism mb-3" />
          </div>

          <div className="col-6 me-auto">
            <Breadcrumb>
              <BreadcrumbItem>
                Yogyakarta
              </BreadcrumbItem>
              <BreadcrumbItem className='object_tourism_breadcrumb' active>
                {data.dest_name}
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="mb-3">{data.dest_name}</h1>
            <p className=""><i>{data.address}</i></p>
            <p className=""><i>{data.open_day}</i></p>
            <p className=""><i>{data.open_time}</i></p>
            <p className=""><i>{data.contact_number}</i></p>
            {/* <p className="text-start text-secondary">Ditulis oleh {data.author.name}</p> */}
            
            
          </div>

        </div>

        <div className='col m-1'>
          <h3 className='mb-4 my-2'>Information</h3>
          <p className="information-desc">
              {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}, {data.desc}
          </p>
        </div>
  
      </main>
  )
}

export default DetailObjectTourism;
