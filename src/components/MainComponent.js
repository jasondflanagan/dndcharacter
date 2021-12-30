import React, { Component } from 'react';
import RacesPage from './RacesPageComponent';
import ClassesPage from './ClassesComponent';
import CharacterBuilder from './CharacterBuilderComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/races' component={RacesPage} />
                    <Route path='/classes' component={ClassesPage} />
                    <Route path='/builder' component={CharacterBuilder} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;

