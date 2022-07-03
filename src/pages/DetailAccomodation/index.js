import React, { useState, useEffect } from 'react';
import { getDetailAccomodation, deleteObjectTourism } from '../../utils/AccomodationHandler';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { actionButtonCreator } from '../../utils/templates/DetailsAccomodationHelper';
import Gap from '../../components/atoms/Gap';
import './detailAccomodation.css'


const DetailAccomodation = (props) => {
    const [Accomodation, setAccomodation] = useState({});
    const [user, setUser] = useState(null);

    const getParams = useParams();

    useEffect(() => {
        getDetailAccomodation(getParams.id)
            .then(response => {
                setAccomodation(response.data);
            })
            .catch(err => {
                console.info('error: ', err);
            });

        if (props.user && Accomodation) {
            setUser(props.user);
        }
    }, [props, Accomodation])

    let actionMenu;
    if (Accomodation) {
        if (user) {
            if (user._id === Accomodation.author.user_id) {
                actionMenu = actionButtonCreator(Accomodation);
            }
        }

        return (
            <main className="container detail-wrapper-accomodation">

                <div className="row justify-content-center">
                    <Gap height={40} />
                    <div className="col-md-6 image-wrapper-accomodation">
                        <img src={`http://localhost:4000/${Accomodation.image}`} alt="Image_Accomodation" className="image-accomodation mb-3" />
                    </div>

                    <div className="col-6 me-auto">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                Accomodation
                            </BreadcrumbItem>
                            <BreadcrumbItem className='accomodation_breadcrumb' active>
                                {Accomodation.accomodation_name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="mb-3">{Accomodation.accomodation_name}</h1>
                        <h5 className="">Location:</h5>
                        <p className=""><i>{Accomodation.address}</i></p>
                        <h5 className="">Day Open:</h5>
                        <p className=""><i>{Accomodation.open_day}</i></p>
                        <h5 className="">Time Open:</h5>
                        <p className=""><i>{Accomodation.open_time}</i></p>
                        <h5 className="">Contact Number:</h5>
                        <p className=""><i>{Accomodation.contact_number}</i></p>


                    </div>

                </div>

                <div className='col m-1'>
                    <h3 className='mb-4 my-2'>Information</h3>
                    <p className="information-accomodation-desc">
                        {Accomodation.desc}
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

export default DetailAccomodation;
