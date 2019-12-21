import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => (
    <nav className={"navbar fixed-top navbar-expand navbar-light bg-white " + classes.Toolbar}>
        <button className="btn py-0 bg-light text-primary d-flex align-items-center " onClick={props.clicked}>
            <i className="material-icons">menu</i>
        </button>
        <div className="container-fluid">

            <a href="./" className={"ml-sm-5 navbar-brand d-flex align-items-center " + classes.brand}>
                <Logo />
                <p className="text-center">
                    Xtralarge Farms <br /> <span> -Accounting-</span>
                </p>
            </a>
            <div className="navbar-collapse " id="navbarSupportedContent">
                <NavItems />
            </div>
        </div>
    </nav >
)

export default toolbar