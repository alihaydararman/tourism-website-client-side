import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Orderpackage.css'

const Orderpackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset(data)
        axios.post('http://localhost:5000/orders', data)
            .then(result => {
                console.log(result.data);
                reset()
            })
    };
    const { user } = useAuth();
    return (
        <div className="container orderservice">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("displayName")} />
                <input defaultValue={user.email} {...register("email")} />
                <input type='date' {...register("firstName")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Orderpackage;