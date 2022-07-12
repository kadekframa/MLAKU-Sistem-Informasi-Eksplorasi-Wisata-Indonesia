import React, { useState, useEffect } from 'react';
import { getDetailCulinary, deleteCulinary } from '../../utils/CulinaryHandler';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { actionButtonCreator } from '../../utils/templates/DetailsCulinaryHelper';
import Gap from '../../components/atoms/Gap';
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
                actionMenu = actionButtonCreator(Culinary);
            }
        }

        return (
            <main className="container detail-wrapper-culinary">

                <div className="row justify-content-center">
                    <Gap height={40} />
                    <div className="col-md-6 image-wrapper-culinary">
                        <img src={`https://mlaku-api.herokuapp.com/${Culinary.image}`} alt="Culinary" className="image-culinary mb-3" />
                    </div>

                    <div className="col-6 me-auto">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                Culinary
                            </BreadcrumbItem>
                            <BreadcrumbItem className='culinary_breadcrumb' active>
                                {Culinary.culinary_name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="mb-3">{Culinary.culinary_name}</h1>
                        <h5 className="">Location:</h5>
                        <p className=""><i>{Culinary.address}</i></p>
                        <h5 className="">Day Open:</h5>
                        <p className=""><i>{Culinary.open_day}</i></p>
                        <h5 className="">Time Open:</h5>
                        <p className=""><i>{Culinary.open_time}</i></p>
                        <h5 className="">Contact Number:</h5>
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
                <Gap height={20} />
            </main>
        )
    } else {
        return (
            <p className='loading-text'>Loading...</p>
        )
    }

}

export default DetailCulinary;
