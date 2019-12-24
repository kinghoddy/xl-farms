import React, { Component } from 'react';
import classes from './Row.css';



class Row extends Component {
    state = {
        total : 0
    }
    changedHandler = (e)=>{
     
        this.setState({
            total : +this.state.total + +e.target.value
        });
        this.props.changed(e.target.value)
    }
    render(){
    let Options = []
        for (var i = 0; i < 50; i ++){
            let newOption = <option value={i} key={i}>{i}</option>
                Options.push(newOption)
        }
        
    return (
        <tr>
        <td>{this.props.sn}</td>
        <td className={classes.td}> {this.props.products} </td>
        <td>
            <select className="opening" onChange={this.changedHandler}>
         {Options}               
            </select>
        </td>
        <td>
            <select className="received" onChange={this.changedHandler}>
         {Options}               
            </select>
        </td>
        <td ><input className="total" type="number" value={this.state.total} disabled/>
        </td>
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
}
export default Row;