import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar';

export default function App() {

    // const now = new Date();

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true : false);
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    };

    function logUserIn(){
        setLoggedIn(true)
    };

    function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
        // localStorage.removeItem('tokenExp');
        flashMessage('You have logged out', 'success')
    };


    return (
        <>
            <Navbar loggedIn={loggedIn} logUserOut={logUserOut} />
            <div className="container">
                { message ? <AlertMessage flashMessage={flashMessage} message={message} category={category} /> : null}
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn}/>} />
                </Routes>
            </div>
        </>
    )
}
