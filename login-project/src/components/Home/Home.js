import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='d-flex justify-content-center'>
            <h3>Click for LogIn</h3>
            <Link to="/login" className="rounded text-withe fw-bold fs-5">
           Login
           </Link>
        </div>
    );
};

export default Home;