import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ loggedIn, logUserOut}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Kekambas Social Media</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        { loggedIn ? (
                            <>
                                <Link className="nav-link" to="/create">Create</Link>
                                <Link className="nav-link" to="/" onClick={() => logUserOut()}>Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" to="/register">Register</Link>
                                <Link className="nav-link" to="/login">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
