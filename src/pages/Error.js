import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import '../sass/pages/_error.scss';


function Error () {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/', {replace: true});
    }
    return (
        <div className='top-parent'>
            <div className='content'>
                <Header />
                <main>
                    <div className='main-error'>
                        <div className='main-error__pages'>
                            <h1>404</h1>
                            <p>
                                Oups! This is not the web page you are lookinf for.
                            </p>
                            <Link to='/' onClick={handleClick}>
                                <span className='btn-error'> Please return to Home page</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Error;