import React from 'react'
const navItems = () => (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active d-flex mx-md-5">
            <i className="fa fa-2x fa-user mr-3"></i>
            <a className="nav-link" href="./users"> Welcome Odunmilade</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="./logout">Logout</a>
        </li>
    </ul>
)
export default navItems