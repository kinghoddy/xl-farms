import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './sidenavitems.css'

const sidenavitems = props => (
    <NavLink to={"/" + props.link}
    onClick={props.clicked}
        className={" list-group-item list-group-item-action " + classes.list_group_item}
        activeClassName={classes.active} >
        {props.children}
    </NavLink>
)

export default sidenavitems