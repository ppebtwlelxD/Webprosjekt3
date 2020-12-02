import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Header/styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#"></a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="mian_nav_bar_list">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home&nbsp;<i class="fas fa-home">
                            </i> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Community</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Social</a>
                    </li>
                    <li className="nav-item">
                        <a  onclick="markdeshop()" className="nav-link text-white markedbutton" href="#">Market</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <ul className="navbar-nav mr-right mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Profile&nbsp;<i class="fas fa-user-circle"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;