import React from 'react';
import SideNavItems from './Sidenavitems/sidenavitems'
import SideIcon from './SideIcon/SideIcon'
import classes from './Sidenav.css'
const sidenav = props => {
    let isToggled = props.open;
    let setClass = [classes.Sidenav, classes.close];
    let backdrop = [classes.backdrop, classes.hidden];

    if (isToggled) {
        setClass = [classes.Sidenav, classes.close];
        backdrop = [classes.backdrop, classes.hidden];

    } else {
        setClass = [classes.Sidenav, classes.open];
        backdrop = [classes.backdrop, classes.shown];

    }
    setClass = setClass.join(' ');
    backdrop = backdrop.join(' ')

    return (
        <React.Fragment>

            <div className={backdrop} onClick={props.clicked}></div>
            <div className={setClass}>
                <div className={classes.list_group + " list-group list-group-flush text-uppercase"}>
                    <SideNavItems clicked={props.close} link="dashboard">Admin Dashboard</SideNavItems>
                    <SideNavItems clicked={props.close} link="farm-account">farm account</SideNavItems>
                    <SideNavItems clicked={props.close} link="factory account">factory account</SideNavItems>
                    <SideNavItems clicked={props.close} link="spreadsheet">branch account</SideNavItems>
                    <SideNavItems clicked={props.close} link="logout"> add  new  users </SideNavItems>
                    <SideNavItems clicked={props.close} link="logout">products list</SideNavItems>
                    <SideNavItems clicked={props.close} link="logout">all reports</SideNavItems>
                    <SideNavItems clicked={props.close} link="logout">logout</SideNavItems>
                </div>
                <div className={classes.SideIcons}>
                    <div className={" list-group list-group-flush"}>
                        <SideIcon link="dashboard" class="material-icons">dashboard</SideIcon>
                        <SideIcon link="farm-account" class="fa fa-dog"></SideIcon>
                        <SideIcon link="factory-account" class="material-icons">group_work</SideIcon>
                        <SideIcon link="spreadsheet" class="fa fa-code-branch"></SideIcon>
                        <SideIcon link="supervisor-account" class="material-icons">supervisor_account</SideIcon>
                        <SideIcon link="list" class="material-icons">list</SideIcon>
                        <SideIcon link="reports" class="material-icons">library_books</SideIcon>
                        <SideIcon link="logout" class="material-icons">account_circle</SideIcon>
                    </div>
                </div>
            </div>
        </React.Fragment>
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
