import React from 'react'
import ReactDOM from 'react-dom'

import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link } from 'react-router'

import {pink600} from 'material-ui/styles/colors';
import {blue600} from 'material-ui/styles/colors';
import AppMainPage from './AppMainPage'
import {Grid, Row, Col} from 'react-bootstrap/lib';

import { hashHistory } from 'react-router';
import { browserHistory } from 'react-router';
import AppInfoPage from "./AppInfoPage";
import AppHome from "./AppHome";
import AppLayout from "./AppLayout";
import AlgoPage from "./AlgoPage";
import StoryPage from "./StoryPage";
import Page404 from "./Page404";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle(){
        this.setState({open: !this.state.open});
    }

    handleClose(){
        this.setState({open: false});
    }

	render() {
		return (
            <Router history={hashHistory}>
                <Route path="/" component={AppLayout}>
                    <IndexRoute component={AppHome}/>
                    <Route path="/status" component={AppMainPage}/>
                    <Route path="/info" component={AppInfoPage}/>
                    <Route path="/story" component={StoryPage}/>
                    <Route path="/algorithm" component={AlgoPage}/>
                    <Route path="*" component={Page404} />
                </Route>
            </Router>
		)
	}
}

export default App

ReactDOM.render( <App/>, document.getElementById( 'app' ) );
