import React, { useEffect, useState } from 'react';
import Mysingleorder from '../Mysingleorder/Mysingleorder';

const MyAllOrders = () => {
    const [users, setUser] = useState();
    useEffect(() => {
        fetch('https://warm-spire-28182.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [])
    return (
        <div>
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
                        user={user}
                    ></Mysingleorder>)
                }
            </table>
        </div>
    );
};

export default MyAllOrders;