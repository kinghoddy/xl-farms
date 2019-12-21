import React from 'react';
import SideNavItems from './Sidenavitems/sidenavitems'
import SideIcon from './SideIcon/SideIcon'
import classes from './Sidenav.css'
const sidenav = props => {
    let isToggled = props.open;
    let setClass = [classes.Sidenav, classes.close]

    if (isToggled) {
        setClass = [classes.Sidenav, classes.close]

    } else {
        setClass = [classes.Sidenav, classes.open]

    }
    setClass = setClass.join(' ')

    return (
        <div className={setClass}>
            <div className={classes.list_group + " list-group list-group-flush text-uppercase"}>
                <SideNavItems>Admin Dashboard</SideNavItems>
                <SideNavItems>farm account</SideNavItems>
                <SideNavItems>factory account</SideNavItems>
                <SideNavItems> add  new  users </SideNavItems>
                <SideNavItems>products list</SideNavItems>
                <SideNavItems>all reports</SideNavItems>
                <SideNavItems>logout</SideNavItems>
            </div>
            <div className={classes.SideIcons}>
                <div className={" list-group list-group-flush"}>
                    <SideIcon>dashboard</SideIcon>
                    <SideIcon>face</SideIcon>
                    <SideIcon>supervisor_account</SideIcon>
                    <SideIcon>settings</SideIcon>
                </div>
            </div>
        </div>
    )
}
// }
// <div class="" id="sidebar-wrapper">
//     <div class="list-group list-group-flush">
//         <a href="#dashboard" class=" list-group-item list-group-item-action ">Admin Dashboard</a>
//         <a href="#farm-account" class="list-group-item list-group-item-action ">farm account</a>
//         <a href="#factory-account" class="list-group-item list-group-item-action ">factory account</a>
//         <a href="#branch-account" class="list-group-item list-group-item-action ">branch account</a>
//         <a href="#user" class="list-group-item list-group-item-action ">Add new users</a>
//         <a href="#product-list" class="list-group-item list-group-item-action ">product list</a>
//         <a href="#all-reports" class="list-group-item list-group-item-action ">all reports</a>
//         <a href="#logout" class="list-group-item list-group-item-action ">logout</a>
//     </div>
// </div>
export default sidenav
