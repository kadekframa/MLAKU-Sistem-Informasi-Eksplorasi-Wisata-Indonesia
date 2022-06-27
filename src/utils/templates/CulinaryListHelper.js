import {Link} from 'react-router-dom';
import CulinaryCard from '../../components/CulinaryCard';

const createCulinaryList = (dataCulinary) => {
    return dataCulinary.map(culinary => {
        return (
            <div className='col-md-4'>
                <CulinaryCard
                    key={culinary._id}
                    id={culinary._id}
                    culinary_name={culinary.culinary_name}
                    address={culinary.address}
                    image={`http://localhost:4000/${culinary.image}`}
                />
            </div>
        )
    })
} 

const addCulinaryButtonCreator = () => {
    return(
        <Link to="/culinary/add" className='btn btn-success'>Add Culinary</Link>
    )
}



export {createCulinaryList, addCulinaryButtonCreator};