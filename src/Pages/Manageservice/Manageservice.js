import React, { useState } from 'react';

const Manageservice = ({ service }) => {
    const [services, setServices] = useState([]);
    const handleDelete = id => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }
            });
    }
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={service.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <h5 className="card-title">{service.price}</h5>
                    <h5 className="card-title">{service.packege}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <button onClick={() => handleDelete(service._id)} className="btn btn-primary">DELETE</button>
                    <button className="btn btn-primary">UPDATE</button>
                </div>
            </div>
        </div>
    );
};

export default Manageservice;