import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">primary</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" aria-current="page" href="#">Register</a>
                        <a className="nav-link text-white" href="#">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header