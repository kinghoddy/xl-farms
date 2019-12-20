import React from 'react';
import classes from './SideIcon.css';
import { NavLink } from 'react-router-dom';

const sideIcon = props => (

    <NavLink to={"/" + props.link}
        className={" page-links justify-content-center list-group-item " + classes.list_group_item}
        activeClassName={classes.active}>
        <i className={props.class}>{props.children}</i>
    </NavLink>
)

export default sideIcon