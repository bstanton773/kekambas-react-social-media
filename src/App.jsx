import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Register from './views/Register';
import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar';

export default function App() {

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    };


    return (
        <>
            <Navbar />
            <div className="container">
                <AlertMessage flashMessage={flashMessage} message={message} category={category} />
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                </Routes>
            </div>
        </>
    )
}
