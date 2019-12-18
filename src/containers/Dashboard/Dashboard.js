import React, { Component } from 'react';
import classes from './Dashboard.css';
import Card from "./card/card";

class Dashboard extends Component {

    render() {
        return (
            <div className={classes.Dashboard + ' container-fluid'}>
                <div className="row">
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="phone"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure account"
                    />
                </div>
            </div>
        )
    }
}



export default Dashboard