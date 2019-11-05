/* eslint-disable import/no-named-as-default */
import {NavLink, Route, Switch} from 'react-router-dom';
import React, {lazy, Suspense, StrictMode} from 'react';

import AboutPage from './AboutPage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import LoginPage from './Login/LoginPage';

const CssModuleTest = lazy(() => import('../components/CssModuleTest/CssModuleTest'));

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
    render() {
        const activeStyle = {color: 'blue'};
        return (
            <div>
                <StrictMode>
                    <div>
                        <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                        {' | '}
                        <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
                        {' | '}
                        <NavLink to="/css-module-test" activeStyle={activeStyle}>Css Module Test</NavLink>
                        {' | '}
                        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                        {' | '}
                        <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>
                    </div>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/fuel-savings" component={FuelSavingsPage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/css-module-test" component={CssModuleTest}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Suspense>
                </StrictMode>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);
