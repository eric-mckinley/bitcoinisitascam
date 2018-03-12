import React from 'react'
import ReactDOM from 'react-dom'

import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link } from 'react-router'

import {pink600} from 'material-ui/styles/colors';
import {blue600} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppLayout from './AppLayout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

class AppTheme extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
		    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
		        <AppLayout test='1'/>
            </MuiThemeProvider>
		)
	}
}

export default AppTheme

ReactDOM.render( <App/>, document.getElementById( 'app' ) );
