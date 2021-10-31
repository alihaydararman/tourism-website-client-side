import React, { useEffect, useState } from 'react';
import Mysingleorder from '../Mysingleorder/Mysingleorder';

const MyAllOrders = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://warm-spire-28182.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                console.log(data.users)
            })
    }, [])
    return (
        <div className='container'>
            <h1 className="bg-dark text-light">My All Booking Packege</h1><hr /><br />
            <table className="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                {
                    users.map(user => <Mysingleorder
                        key={user._id}
                        user={user}
                    ></Mysingleorder>)
                }
            </table><br /><br />
        </div>
    );
};

export default MyAllOrders;