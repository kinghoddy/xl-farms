import React from 'react';
import classes from './SideIcon.css'

const sideIcon = props => (

    <a href={"/" + props.link}
        className={" page-links justify-content-center list-group-item " + classes.list_group_item}>
        <i className={props.class}>{props.children}</i>
    </a>
)

export default sideIcon