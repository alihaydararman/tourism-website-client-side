import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://warm-spire-28182.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [serviceId])
    // let singleDetails = details.find(prod => parseInt(prod._id) === parseInt(serviceId))
    // if (typeof (singleDetails) == 'undefined') {
    //     singleDetails = '';
    // }
    return (
        <div className='container ' style={{ alignItems: 'center' }}>
            <h2>Service Details Id: {serviceId}</h2>

            <div class="card mb-3">
                <img src={details.img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{details.name}</h5>
                    <p class="card-text">{details.description}</p>
                    <h4 class="card-text"><small class="text-muted">Price :{details.price}</small></h4>
                    <h4 class="card-text"><small class="text-muted">Package :{details.packege}</small></h4>
                    <button className="btn btn-primary">Confirm Booking</button>
                </div>
            </div>


        </div>
    );
};

export default Details;