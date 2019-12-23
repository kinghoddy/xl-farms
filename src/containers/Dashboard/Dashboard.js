import React, { Component } from 'react';
import classes from './Dashboard.css';
import Card from "./card/card";

class Dashboard extends Component {

    render() {
        return (
            <div className={classes.Dashboard + ' container-fluid py-4 text-center text-capitalize'}>
                <div className="row">
                    <Card
                        header="total expenditure"
                        body="$12.99"
                        icon="computer"
                        footer="expenditure report"
                    />
                    <Card
                        header="total income"
                        body="$1200.99"
                        icon="phone"
                        footer="income report"
                    />
                    <Card
                        header="total farm stock"
                        body="$12.99"
                        icon="dashboard"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="shop"
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="account_balance_wallet "
                        footer="expenditure account"
                    />
                    <Card
                        header="expenditure"
                        body="$12.99"
                        icon="account_balance"
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