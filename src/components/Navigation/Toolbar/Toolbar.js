import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => (
    <nav className={"navbar bg-white fixed-top navbar-light border-bottom " + classes.Toolbar}>
        <button className="btn" onClick={props.clicked}>
            <i className="material-icons">menu</i>
        </button>
        <a href="./" className={"navbar-brand d-flex " + classes.brand}>
            <Logo />
            <div>
                <span>XtraLarge Farms</span>
                <span>Accounting</span>
            </div>
        </a>
        <div className="d-flex align-items-center">
            <i className="material-icons">account_circle</i>
            <p className={classes.user}>Welcome back Odunmilade</p>
        </div>
        <NavItems
            cName='navbar-nav'
        />
    </nav >
)

export default toolbar