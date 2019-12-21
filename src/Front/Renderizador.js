import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import AppCopia from './AppCopia';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import './App.css';

const Renderizador = () => {
    return <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/copia' component={AppCopia} />
                    <Route exact path='/404' component={NotFound} />
                    <Redirect from='*' to='/404'/>
                </Switch>
            </Layout>
            
           </BrowserRouter>
}

export default Renderizador;