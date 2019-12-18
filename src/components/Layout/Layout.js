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

    render() {
        return (
            <Aux>
                <Toolbar
                    clicked={this.toggleSideNav}
                />
                <div className={classes.wrapper}>
                    <Sidenav
                        open={this.state.showSideNav}
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