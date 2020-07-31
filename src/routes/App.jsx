import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ListCoin from "../screens/ListCoin/ListCoin";


const App = () => {
    return (
        <div className="content-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route path="/list-coin" component={ListCoin} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
