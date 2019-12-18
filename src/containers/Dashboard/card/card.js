import React from "react";
import classes from "./card.css";

const card = props => (
    <div className="col-md-6 col-lg-3 py-2 text-center">
        <div className={"card text-capitalize"}>
            <div className={"card-header"}>
                <h5>{props.header}</h5>
            </div>
            <div className={"card-body"}>
                <i className={"material-icons " + classes.icon}>{props.icon}</i>
                <h2>{props.body}</h2>
            </div>
            <div className={"card-footer"}>
                <a href="./" className="btn btn-block btn-dark">{props.footer}</a>
            </div>
        </div>
    </div>
)


export default card