import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidenav from '../Navigation/Sidenav/Sidenav'

class Layout extends Component {
    state = {
        showSideNav: true
    }
    toggleSideNav = () => {
        
        this.setState({
            showSideNav: !this.state.showSideNav
        })

    }
    closeSideNav = () => {
        if (window.innerWidth < 1030){
            this.setState({
                showSideNav: true
            })
        }else console.log('big');
        
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    clicked={this.toggleSideNav}
                />
                <div className={classes.wrapper}>
                    <Sidenav
                        open={this.state.showSideNav}
                        clicked={this.toggleSideNav}
                        close = {this.closeSideNav}
                    />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </div>
            </Aux >
        );

    }
}
export default Layout;