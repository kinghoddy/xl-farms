import React, { Component } from 'react';
import classes from './Spreadsheet.css';

function date() {
    var dateDom = document.getElementById('date');
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return `${day} - ${month} - ${year}`
}
class Spreadsheet extends Component {
    render() {
        return (
            <div className={classes.Spreadsheet}>
                <nav className=" navbar  bg-dark  navbar-dark">
                    <div className="container text-white">
                        <a href="#dashboard" className="btn btn-outline-light"><i className="fa fa-angle-left"></i> Previous</a>
                        <p className=" mb-0 text-uppercase">
                            <span className="h5 font-weight-bold">New Report </span><span id="date" className="h5 mx-3">{date()}</span>
                        </p>

                        <a href="#summary" className="btn btn-outline-light">Next <i className="fa fa-angle-right"></i></a>
                    </div>
                </nav>
                <div className="container-fluid ">
                    <div className="table-responsive ">
                        <table className="table table-bordered table-condensed table-hover">
                            <thead>
                                <tr>
                                    <th rowspan="2">S/N</th>
                                    <th rowspan="2">PRODUCT</th>
                                    <th rowspan="2">Opening</th>
                                    <th rowspan="2">Received</th>
                                    <th rowspan="2">Total</th>
                                    <th colspan="2">Sales</th>
                                    <th rowspan="2">Induction</th>
                                    <th colspan="2">Unilevel</th>
                                    <th rowspan="2">Stepout</th>
                                    <th colspan="2">Superdealers</th>
                                    <th rowspan="2">Bonus</th>
                                    <th rowspan="2">Food Salary</th>
                                    <th colspan="2">Ember</th>
                                    <th rowspan="2">Closing</th>
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
                            <tbody id="tbody" className="wow fadeInUp "></tbody>
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