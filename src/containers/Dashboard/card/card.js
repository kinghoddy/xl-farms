import React from "react";
import classes from "./card.css";

const card = props => (
    <div className="col-lg-3 py-2 px-lg-2 col-md-6">
        <div className={"card pt-4 " + classes.Card}>
            <div className="card-body">
                <p className="m-0 font-weight-bold">{props.header} </p>
                <p className={"m-0 " + classes.cash}>{props.body}</p>
                <i className={classes.card_icon + " material-icons"}>{props.icon}</i>
            </div>
            <div class="card-footer bg-white ">
                <a href="#spreadsheet" class=" btn px-3 btn-dark">{props.footer}</a>
            </div>
        </div>
    </div>
)


export default card