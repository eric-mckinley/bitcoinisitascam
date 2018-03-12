import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import TiFlowSwitch from 'react-icons/lib/ti/flow-switch';
require('codemirror/mode/javascript/javascript');
var CodeMirror = require('react-codemirror');

import AlgoCode from './AlgoCode';

const iconstyle = {
    width: 70,
    height: 70,
    verticalAlign: 'middle'
};

const paperstyle = {
    margin: 20,
    padding: 5,
    textAlign: 'left',
    display: 'block',
};

const hstyle = {
    fontSize: 36,
    height: 80,
    borderBottom: '1px solid #ccc'
};


const htext = {
    verticalAlign: 'middle'
};


const fstyle = {
    height: 60,
    color: 'grey',
    padding: 20,
    borderTop: '1px solid #eee'
};

const ftext = {
    verticalAlign: 'middle',
    marginLeft: 5
};

const bstyle = {
    padding: 20,
    fontSize: 16
};

const btext = {
    verticalAlign: 'middle',
    marginLeft: 5
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 4,
    marginBottom: 12,
    fontWeight: 400,
  },
};



export default class AlgoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a'
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(value) {
       this.setState({
          value: value
        });
    }

    render() {
        var jscode = `
module.exports = {

  evaluateIsItAScam: function (currentPrice, previousPrice) {
    return currentPrice <  previousPrice;
  }
};
        `;
        var javacode = `
public class IsItAScam {
    public boolean evaluateIsItAScam(double currentPrice, double previousPrice) {
        return currentPrice <  previousPrice;
    }
}
        `;
        var phpcode = `
<?php
function evaluate_is_it_a_scam($currentPrice, $previousPrice)
{
    return currentPrice < previousPrice;
}
?>
        `;

        return (
            <Paper style={paperstyle} zDepth={3} rounded={false}>
                <div style={hstyle}>
                    <TiFlowSwitch style={iconstyle} />
                    <span style={htext}>Algorithm</span>
                </div>
                <div style={bstyle}>
                          <p>
                          Contributions from the open source community have led to the following implementations of the theorised algorithm.
                          </p>

                          <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                          >
                            <Tab label="JS" value="a">
                                <AlgoCode codetitle="Javascipt" codetype="javascript" codetext={jscode}/>
                            </Tab>
                            <Tab label="Java" value="b">
                                <AlgoCode codetitle="Java" codetype="javascript" codetext={javacode}/>
                            </Tab>
                            <Tab label="Php" value="c">
                                <AlgoCode codetitle="Php" codetype="php" codetext={phpcode}/>
                            </Tab>
                          </Tabs>





                </div>
                <div style={fstyle}>
                    <span style={ftext}>Crypto Answers</span>
                </div>
            </Paper>
        );
    }
}
