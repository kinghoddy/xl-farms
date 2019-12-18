import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Route path="" />
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
