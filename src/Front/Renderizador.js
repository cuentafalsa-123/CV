import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import PresentacionPage from './pages/PresentacionPage';
import SkillsPage from './pages/SkillsPage';
import ExperienciaPage from './pages/ExperienciaPage';
import FormacionPage from './pages/FormacionPage';
import NotFound from './components/NotFound';
import ContactoPage from './pages/ContactoPage';

const Renderizador = () => {
    return <BrowserRouter>
            <Layout>
                    <Switch>
                        <Route exact path='/presentacion' component={PresentacionPage} />
                        <Route exact path='/skills' component={SkillsPage} />
                        <Route exact path='/experiencia' component={ExperienciaPage} />
                        <Route exact path='/formacion' component={FormacionPage} />
                        <Route exact path='/404' component={NotFound} />
                        <Route exact path='/contacto' component={ContactoPage} />
                        <Redirect from='*' to='/presentacion'/>
                    </Switch>
            </Layout>            
           </BrowserRouter>
}

export default Renderizador;