import React from 'react';
import classes from './sidenavitems.css'

const sidenavitems = props => (
    <a href={"/" + props.link}
        className={" list-group-item list-group-item-action " + classes.list_group_item}  >
        {props.children}
    </a>
)

export default sidenavitems