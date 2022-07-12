import React, { useState, useEffect } from 'react';
import { getDetailObjectTourism } from '../../utils/ObjectTourismHandler';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { actionButtonCreator } from '../../utils/templates/DetailsObjectTourismHelper';
import Gap from '../../components/atoms/Gap';
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
          <Gap height={40} />
          <div className="col-md-6 image-wrapper">
            <img src={`https://mlaku-api.herokuapp.com/${ObjectTourism.image}`} alt="Image_Tourism" className="image-object-tourism mb-3" />
          </div>

          <div className="col-6 me-auto">
            <Breadcrumb>
              <BreadcrumbItem>
                Object Tourism
              </BreadcrumbItem>
              <BreadcrumbItem className='object_tourism_breadcrumb' active>
                {ObjectTourism.dest_name}
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="mb-3">{ObjectTourism.dest_name}</h1>
            <h5 className="">Location:</h5>
            <p className=""><i>{ObjectTourism.address}</i></p>
            <h5 className="">Time Open:</h5>
            <p className=""><i>{ObjectTourism.open_day}</i></p>
            <h5 className="">Day Open:</h5>
            <p className=""><i>{ObjectTourism.open_time}</i></p>
            <h5 className="">Contact Number:</h5>
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
        <Gap height={20} />
      </main>
    )
  } else {
    return (
      <p className='loading-text'>Loading...</p>
    )
  }

}

export default DetailObjectTourism;
