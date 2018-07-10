import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import HeaderIcon from 'react-icons/lib/fa/book';
import {blue300, blue200, indigo900} from 'material-ui/styles/colors';

import ContentData from './ContentData';

var CodeMirror = require('react-codemirror');

const styles = {
  chip: {
    margin: 1,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

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

export default class StoryPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

             var options = {
                        lineNumbers: true
                    };
        var thesis = `
Are Crypto Currencies a Scam.
by Ivor Kweshteon

If the dollar price of one crypto currency is lower than the previous day we can deduce that all confidence
has been lost in the currency and it is a scam.

As this proof holds true in all cases we may inversely confirm that if the dollar price is higher than the previous
day that the currency is not a scam.

Quod erat demonstrandum
        `;

        return (
                <Paper style={paperstyle} zDepth={3} rounded={false}>
                    <div style={hstyle}>
                        <HeaderIcon style={iconstyle} />
                        <ContentData pageName="story" blockName="title" spanTag={true} />
                    </div>
                    <div style={bstyle}>
                        <ContentData pageName="story" blockName="section1"/>
                        <CodeMirror value={thesis} options={options} />
                        <ContentData pageName="story" blockName="section2"/>
                    </div>
                    <div style={fstyle}>
                        <span style={ftext}>Crypto Answers</span>
                    </div>
                </Paper>
        );
    }
}
