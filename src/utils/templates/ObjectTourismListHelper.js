import {Link} from 'react-router-dom';
import ObjectTourismCard from '../../components/ObjectTourismCard';

const createObjectTourismList = (dataObjectTourism) => {
    return dataObjectTourism.map(object => {
        return (
            <div className='col-md-4'>
                <ObjectTourismCard
                    key={object._id}
                    _id={object._id}
                    dest_name={object.dest_name}
                    address={object.address}
                    image={`http://localhost:4000/${object.image}`}
                />
            </div>
        )
    })
} 

const addObjectTourismButtonCreator = () => {
    return(
        <Link to="/object-tourism/add" className='btn btn-success'>Add Object Tourism</Link>
    )
}



export {createObjectTourismList, addObjectTourismButtonCreator};