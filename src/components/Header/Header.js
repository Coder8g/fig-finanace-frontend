import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="navbar-brand" to="/">
                        Fig Finanace Technical Assignment
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderComponent;
