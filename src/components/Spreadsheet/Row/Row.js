import React from 'react';
import classes from './Row.css';



const Row = props => {
    
    let Options = []
    for (var i = 0; i < 50; i ++){
        let newOption = <option key={i}> {i} </option>
            Options.push(newOption)
    }
    return (
        <tr>
        <td>{props.sn}</td>
        <td className={classes.td}> {props.products} </td>
        <td>
            <select className="opening">
         {Options}               
            </select>
        </td>
        <td>
            <select className="received">
         {Options}               
            </select>
        </td>
        <td ><input className="total" type="number" disabled/></td>
        <td>
            <input className="salesPrice" type="number" placeholder="0"/>
        </td>
        <td>
            <select className="salesQuantity">
            {Options}            
            </select>
        </td>
        <td>
            <select className="salesInduction">
            {Options}            </select>
        </td>
        <td>
            <input type="number" className="unilevelPrice" placeholder="0" />
        </td>
        <td>
            <select className="unilevelQuantity">
         {Options}               
            </select>
        </td>
        <td>
            <select className="unilevelStepOut">
         {Options}               
            </select>
        </td>
        <td>
            <input type="number" placeholder="0" />
        </td>
        <td>
            <select className="quantity-superDeals">
         {Options}            
            </select>
        </td>
        <td>
            <select className="bonus">
         {Options}               
            </select>
        </td>
        <td>
            <select className="food-salary">
         {Options}               
            </select>
        </td>
        <td>
            <input type="number" placeholder="0" />
        </td>
        <td>
            <select className="quantity-ember">
         {Options}               
            </select>
        </td>
        <td>
            <select className="closing">
         {Options}               
            </select>
        </td>

    </tr>
    )

}

export default Row;