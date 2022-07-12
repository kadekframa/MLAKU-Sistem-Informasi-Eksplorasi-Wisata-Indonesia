import ObjectTourismCard from '../../components/ObjectTourismCard';

const createObjectTourismList = (dataObjectTourism) => {
    return dataObjectTourism.map(object => {
        return (
            <div className='col-md-4 d-flex align-items-start justify-content-center'>
                <ObjectTourismCard
                    key={object._id}
                    _id={object._id}
                    dest_name={object.dest_name}
                    address={object.address}
                    image={`https://mlaku-api.herokuapp.com/${object.image}`}
                />
            </div>
        )
    })
}

const addObjectTourismButtonCreator = () => {
    return(
        <a href="/add-object-tourism" className="btn btn-success py-2">
            Add Object Tourism
        </a>
    )
}



export {createObjectTourismList, addObjectTourismButtonCreator};