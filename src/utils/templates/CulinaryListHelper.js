import CulinaryCard from '../../components/CulinaryCard';

const createCulinaryList = (dataCulinary) => {
    return dataCulinary.map(culinary => {
        return (
            <div className='col-md-4 d-flex align-items-start justify-content-center'>
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
    return (
        <a href="/add-culinary" className="btn btn-success py-2">
            Add Culinary
        </a>
    )
}



export { createCulinaryList, addCulinaryButtonCreator };