import React from 'react'
import ReactDOM from 'react-dom'

import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link } from 'react-router'

import {pink600} from 'material-ui/styles/colors';
import {blue600} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import AppSideMenu from './AppSideMenu'
import {Grid, Row, Col} from 'react-bootstrap/lib';


import getMuiTheme from 'material-ui/styles/getMuiTheme';

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { browserHistory } from 'react-router';


const history = useBasename(createBrowserHistory)({
    basename: '/'
});

const muiTheme = getMuiTheme({

    appBar: {
        height: 60,
        color: blue600
    },
});

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    componentWillReceiveProps(nextProps) {
        // if we changed routes...
        if ((
                nextProps.location.key !== this.props.location.key &&
                nextProps.location.state &&
                nextProps.location.state.modal
            )) {
            // save the old children (just like animation)
            this.previousChildren = this.props.children
        }
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <div>
                    <AppBar onLeftIconButtonTouchTap={ this.handleToggle.bind(this) } title="Bitcoin, is it a scam ?" showMenuIconButton={ true }/>
                    {this.props.children}
                    <Drawer open={this.state.open}>
                        <AppSideMenu closeit={ this.handleClose.bind(this)}/>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default AppLayout
