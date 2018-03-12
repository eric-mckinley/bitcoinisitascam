import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TiFlowSwitch from 'react-icons/lib/ti/flow-switch';

const style = {
    margin: 12,
};

const iconstyle = {
    width: 60,
    height: 60
};

const paperstyle = {
    margin: 20,
    padding: 5,
    textAlign: 'left',
    display: 'block',
};

export default class Page404 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Paper style={paperstyle} zDepth={3} rounded={false}>
                <TiFlowSwitch style={iconstyle} />
                YOU LOST MOFO
                <hr/>
                SUB
            </Paper>
        );
    }
}
