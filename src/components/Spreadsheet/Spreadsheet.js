import React, { Component } from 'react';
import classes from './Spreadsheet.css';

import Row from './Row/Row';
import productJson from '../../assets/products.json';


//  creating multiple rows
let Rows = [];
let newRow;
productJson.product.forEach((cur,i) => {
    newRow = <Row products = {cur} sn ={i + 1} key={i} />
    Rows.push(newRow)
});


class Spreadsheet extends Component {
   
    date = ()=> {
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return `${day} - ${month} - ${year}`
    }
    products = ()=>{

    }
    render() {
        return (
            <div className={classes.Spreadsheet}>
                <nav className=" navbar  bg-dark  navbar-dark">
                    <div className="container text-white">
                        <a href="#dashboard" className="btn btn-outline-light"><i className="fa fa-angle-left"></i> Previous</a>
                        <p className=" mb-0 text-uppercase">
                            <span className="h5 font-weight-bold">New Report </span><span id="date" className="h5 mx-3">{this.date()}</span>
                        </p>

                        <a href="#summary" className="btn btn-outline-light">Next <i className="fa fa-angle-right"></i></a>
                    </div>
                </nav>
                <div className="container-fluid ">
                    <div className="table-responsive ">
                        <table className="table table-striped table-bordered table-condensed table-hover">
                            <thead>
                                <tr>
                                    <th rowSpan="2">S/N</th>
                                    <th rowSpan="2">PRODUCT</th>
                                    <th rowSpan="2">Opening</th>
                                    <th rowSpan="2">Received</th>
                                    <th rowSpan="2">Total</th>
                                    <th colSpan="2">Sales</th>
                                    <th rowSpan="2">Induction</th>
                                    <th colSpan="2">Unilevel</th>
                                    <th rowSpan="2">Stepout</th>
                                    <th colSpan="2">Superdealers</th>
                                    <th rowSpan="2">Bonus</th>
                                    <th rowSpan="2">Food Salary</th>
                                    <th colSpan="2">Ember</th>
                                    <th rowSpan="2">Closing</th>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody id="tbody" className="wow fadeInUp ">
                            {Rows.map((cur, i)=> cur)}
                            </tbody>
                            <tfoot id="tfoot" className=" bg-light">
                                <tr>
                                    <td></td>
                                    <td>
                                        <h4 className="m-0">Total:</h4>
                                    </td>
                                    <td id="opening_sum">0</td>
                                    <td id="received_sum">0</td>
                                    <td id="total_sum">0</td>
                                    <td id="salesPrice_sum">0</td>
                                    <td id="salesQuantity_sum">0</td>
                                    <td id="salesInduction_sum">0</td>
                                    <td id="unilevelPrice_sum">0</td>
                                    <td id="unilevelQuantity_sum">0</td>
                                    <td id="unilevelStepOut_sum">0</td>
                                    <td id="_sum">0</td>
                                    <td id="_sum">0</td>
                                    <td id="_sum">0</td>
                                    <td id="_sum">0</td>
                                    <td id="_sum">0</td>
                                    <td id="_sum">0</td>
                                    <td id="_sum">0</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Spreadsheet