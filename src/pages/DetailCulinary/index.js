import React, { useState, useEffect } from 'react';
import { getDetailCulinary, deleteCulinary } from '../../utils/CulinaryHandler';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { actionCulinaryButtonCreator } from '../../utils/templates/DetailsCulinaryHelper';
import './detailCulinary.css'


const DetailCulinary = (props) => {
    const [Culinary, setCulinary] = useState({});
    const [user, setUser] = useState(null);

    const getParams = useParams();

    useEffect(() => {
        getDetailCulinary(getParams.id)
            .then(response => {
                setCulinary(response.data);
            })
            .catch(err => {
                console.info('error: ', err);
            });

        if (props.user && Culinary) {
            setUser(props.user);
        }
    }, [props, Culinary])

    let actionMenu;
    if (Culinary) {
        if (user) {
            if (user._id === Culinary.author.user_id) {
                actionMenu = actionCulinaryButtonCreator(Culinary);
            }
        }

        return (
            <main className="container detail-wrapper-culinary">

                <div className="row justify-content-center">

                    <div className="col-md-6 image-wrapper-culinary">
                        <img src={`http://localhost:4000/${Culinary.image}`} alt="Culinary" className="image-culinary mb-3" />
                    </div>

                    <div className="col-6 me-auto">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                Yogyakarta
                            </BreadcrumbItem>
                            <BreadcrumbItem className='culinary_breadcrumb' active>
                                {Culinary.culinary_name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="mb-3">{Culinary.culinary_name}</h1>
                        <p className=""><i>{Culinary.address}</i></p>
                        <p className=""><i>{Culinary.open_day}</i></p>
                        <p className=""><i>{Culinary.open_time}</i></p>
                        <p className=""><i>{Culinary.contact_number}</i></p>


                    </div>

                </div>

                <div className='col m-1'>
                    <h3 className='mb-4 my-2'>Information</h3>
                    <p className="information-culinary-desc">
                        {Culinary.desc}
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

export default DetailCulinary;
