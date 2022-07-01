import React, { useState, useEffect } from 'react';
import { getDetailObjectTourism, deleteObjectTourism } from '../../utils/ObjectTourismHandler';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { actionButtonCreator } from '../../utils/templates/DetailsObjectTourismHelper';
import './detailObjectTourism.css'


const DetailObjectTourism = (props) => {
  const [ObjectTourism, setObjectTourism] = useState({});
  const [user, setUser] = useState(null);

  const getParams = useParams();

  useEffect(() => {
    getDetailObjectTourism(getParams.id)
      .then(response => {
        setObjectTourism(response.data);
      })
      .catch(err => {
        console.info('error: ', err);
      });

    if (props.user && ObjectTourism) {
      setUser(props.user);
    }
  }, [props, ObjectTourism])

  let actionMenu;
  if (ObjectTourism) {
    if (user) {
      if (user._id === ObjectTourism.author.user_id) {
        actionMenu = actionButtonCreator(ObjectTourism);
      }
    }

    return (
      <main className="container detail-wrapper">

        <div className="row justify-content-center">

          <div className="col-md-6 image-wrapper">
            <img src={`http://localhost:4000/${ObjectTourism.image}`} alt="Image_Tourism" className="image-object-tourism mb-3" />
          </div>

          <div className="col-6 me-auto">
            <Breadcrumb>
              <BreadcrumbItem>
                Yogyakarta
              </BreadcrumbItem>
              <BreadcrumbItem className='object_tourism_breadcrumb' active>
                {ObjectTourism.dest_name}
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="mb-3">{ObjectTourism.dest_name}</h1>
            <p className=""><i>{ObjectTourism.address}</i></p>
            <p className=""><i>{ObjectTourism.open_day}</i></p>
            <p className=""><i>{ObjectTourism.open_time}</i></p>
            <p className=""><i>{ObjectTourism.contact_number}</i></p>


          </div>

        </div>

        <div className='col m-1'>
          <h3 className='mb-4 my-2'>Information</h3>
          <p className="information-desc">
            {ObjectTourism.desc}
          </p>
        </div>

        <div col m-1>
          {actionMenu}
        </div>

      </main>
    )
  } else {
    return (
      <p className='loading-text'>Loading...</p>
    )
  }

}

export default DetailObjectTourism;
