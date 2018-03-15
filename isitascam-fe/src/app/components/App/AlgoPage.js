import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import TiFlowSwitch from 'react-icons/lib/ti/flow-switch';
require('codemirror/mode/javascript/javascript');
var CodeMirror = require('react-codemirror');

var assign = require('object-assign');
var AlgoServiceActions = require('../../../actions/AlgoServiceActions');
var AlgoServiceStore = require('../../../store/AlgoServiceStore');


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
            value: 0,
            algorithms: []
        }
        this._onCodeReceived = this._onCodeReceived.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

      componentDidMount () {
        AlgoServiceStore.addChangeListener(this._onCodeReceived);
        this.sync();
      }

      componentWillUnmount () {
         AlgoServiceStore.removeChangeListener(this._onCodeReceived);
      }



    handleChange(value) {
        let currentAlgos = this.state.algorithms;
       this.setState({
          value: value,
          algorithms: currentAlgos
        });
    }

    render() {



        var indents = [];
        for (var i = 0; i < this.state.algorithms.length; i++) {
          indents.push(<Tab key={i} label={this.state.algorithms[i].name} value={i}><AlgoCode codetitle={this.state.algorithms[i].name} codetype={this.state.algorithms[i].type} codetext={this.state.algorithms[i].codelines.join('\n')}/></Tab>);
        }


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
                            {indents}
                          </Tabs>
                </div>
                <div style={fstyle}>
                    <span style={ftext}>Crypto Answers</span>
                </div>
            </Paper>
        );
    }

      sync () {
        AlgoServiceActions.fetchAlgorithms();
      }

      _onCodeReceived () {

            this.setState(
                {
                    value: this.state.value,
                    algorithms: AlgoServiceStore.getState().codeAlgorithms
                }
            );
      }

}
