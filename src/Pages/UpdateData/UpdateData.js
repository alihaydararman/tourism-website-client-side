import React, { useEffect, useState } from 'react';
import './UpdateData.css'
import { useParams } from 'react-router';





const UpdateData = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://warm-spire-28182.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    const handleUpdateuser = e => {
        console.log(e)
    }

    return (

        <div className="addservice">
            <h2>Update Data</h2>
            <h3>Id:{serviceId}</h3>
            <form onSubmit={handleUpdateuser}>
                <input type="text" value={service.img} placeholder='Please submit img url' />
                <input type="text" value={service.name} placeholder="Enter your place name" />
                <input type="number" value={service.price} placeholder="Package Price" />
                <input type="text" value={service.packege} placeholder="Package Duration" />
                <textarea type="text" value={service.description} placeholder="Enter Description" style={{ width: '40%' }} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateData;