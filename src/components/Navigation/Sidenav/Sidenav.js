import React from 'react';
import SideNavItems from './Sidenavitems/sidenavitems'
import SideIcon from './SideIcon/SideIcon'
import classes from './Sidenav.css'
const sidenav = props => {
    let isToggled = props.open;
    let setClass = [classes.Sidenav, classes.open]

    if (isToggled) {
        setClass = [classes.Sidenav, classes.open]

    } else {
        setClass = [classes.Sidenav, classes.close]

    }
    setClass = setClass.join(' ')

    return (
        <div className={setClass}>
            <div className="list-group list-group-flush text-capitalize">
                <SideNavItems>dashboard</SideNavItems>
                <SideNavItems>factory account</SideNavItems>
                <SideNavItems>new user</SideNavItems>
                <SideNavItems>spread sheet</SideNavItems>
            </div>
            <div className={classes.SideIcons}>
                <div className="list-group list-group-flush">
                    <SideIcon>dashboard</SideIcon>
                    <SideIcon>face</SideIcon>
                    <SideIcon>supervisor_account</SideIcon>
                    <SideIcon>settings</SideIcon>
                </div>
            </div>
        </div>
    )
}
export default sidenav
