import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {
    state = {
        title: 'stae title'
    }
    postDataHandler = () => {

        axios.get('http://localhost:3000/vendor/Post.json')
            .then(response => {
                console.log(response);
            })
    }
    render() {
        return (
            <div>
                {this.props.children}
                <input type="text" placeholder="some post" />
                <button onClick={this.postDataHandler} >click me</button>
            </div>
        )
    }
}



export default Post