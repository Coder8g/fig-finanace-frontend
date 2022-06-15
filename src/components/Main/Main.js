import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeaderComponent from '../Header/Header';
import ProductContainer from '../../Containers/Event/Event';

function Main({ history, match }) {
    useEffect(() => {
    }, []);

    return (
        <div>
            <header>
                <HeaderComponent />
            </header>
            <div className="container">
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/events" />} />
                    <Route path="/events" component={ProductContainer} />
                    <Redirect to="/events" />
                </Switch>
            </div>
        </div>
    );
}

export default Main