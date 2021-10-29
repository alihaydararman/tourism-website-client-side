import React from 'react';
import Login from '../Login/Login';
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='bodyf container'>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row"><img src="https://i.pinimg.com/originals/7d/19/dd/7d19dd5e4538d7a6b81fb7153ba887a7.png" alt="" className='logo' /> </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"><img src="https://expertvagabond.com/wp-content/uploads/inspiring-travel-quotes-guide-900x600.jpg.webp" alt="" className="image" /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h2>Please Login</h2>
                                    <div className="facebook text-center mr-3">
                                        <div className="fa fa-facebook"></div>
                                    </div>
                                    <div className="twitter text-center mr-3">
                                        <div className="fa fa-twitter"></div>
                                    </div>
                                    <div className="linkedin text-center mr-3">
                                        <div className="fa fa-linkedin"></div>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">Or</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Email Address</h6>
                                </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="d" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row px-3"> <button type="submit" className="btn btn-blue text-center">Login</button><Login></Login>  </div>


                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy;2021. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;