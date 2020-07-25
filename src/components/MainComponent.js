import React, { Component } from 'react';
import Header from './Header';
import Body from './BodyComponent';
import Location from './Map';
import Display from './Display';
import Footer from './FooterComponent';
import AboutDanny from './AboutDanny';
import Menu from './Menu'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';




class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <React.Fragment>
                    <Body/>
                    <Display />
                </React.Fragment>
            )
        }
        return(
            <Router>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/noBolony' component={Display}/>
                    <Route path='/location' component={Location}/>
                    <Route path='/aboutdanny' component={AboutDanny} />
                    <Route path='/menu' component={Menu} />
                </Switch>
                <Footer />
            </div>
            </Router>
          )
        }
}

export default Main;