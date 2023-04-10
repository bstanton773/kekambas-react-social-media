import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes >
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    )
}
