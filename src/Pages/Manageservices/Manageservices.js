import React, { useEffect, useState } from 'react';
import Manageservice from '../Manageservice/Manageservice';
import './Manageservices.css'


const Manageservices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://warm-spire-28182.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>Manage Services</h1>
            <div className='servicesm'>
                {
                    services.map(service => <Manageservice
                        key={service._id}
                        service={service}
                    ></Manageservice>)
                }
            </div>
        </div>
    );
};

export default Manageservices;