import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ReactDOM from 'react-dom';
import Detail from "./details";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/detail' component={Detail}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(

    <App/>,
    document.getElementById('root')
);

