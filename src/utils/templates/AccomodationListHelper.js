import AccomodationCard from '../../components/AccomodationCard';

const createAccomodationList = (dataAccomodation) => {
    return dataAccomodation.map(accomodation => {
        return (
            <div className='col-md-4 d-flex align-items-start justify-content-center'>
                <AccomodationCard
                    key={accomodation._id}
                    _id={accomodation._id}
                    accomodation_name={accomodation.accomodation_name}
                    address={accomodation.address}
                    image={`http://localhost:4000/${accomodation.image}`}
                />
            </div>
        )
    })
}

const addAccomodationButtonCreator = () => {
    return (
        <a href="/add-accomodation" className="btn btn-primary">
            Add Accomodation
        </a>
    )
}



export { createAccomodationList, addAccomodationButtonCreator };