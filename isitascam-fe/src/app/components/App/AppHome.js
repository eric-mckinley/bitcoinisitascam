import React from 'react'
import {render} from 'react-dom'
import Paper from 'material-ui/Paper';
import HeaderIcon from 'react-icons/lib/fa/bitcoin';

import {withStyles} from 'material-ui/styles';
import {Grid, Row, Col} from 'react-bootstrap/lib';


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

export default class AppHome extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Mounting Home Page');
    }

    componentWillUnmount() {
        console.log('Unmounting Home Page');
    }

    render() {
        return (
            <Paper style={paperstyle} zDepth={3} rounded={false}>
                <div style={hstyle}>
                    <HeaderIcon style={iconstyle} />
                    <span style={htext}>Is it a Scam</span>
                </div>
                <div style={bstyle}>
                    <p>
                    Welcome to bitcoinisitascam
                    </p>
                    <p>
                    As the popularity and adoption of crypto currencies increase so do the questions. And no matter
                    whether you are a seasoned long term investor or a beginner wondering whether to dip your toe in the water
                    the biggest question is always: <strong>Is it a scam?</strong>
                    </p>
                    <p>
                    Basing our work off a forgotten thesis (see our origin story) a team of experts set about developing an algorithm
                    to answer the question.
                    </p>
                    <p>
                    We developed an api so the community can use the algorithm. Just as this website does for bitcoin,
                    everyone can get access to the latest version of the algorithm and provide definitive answers in
                    their own software products to the question:
                    </p>
                    <p>
                    Is it a scam?
                    </p>
                </div>
                <div style={fstyle}>
                    <span style={ftext}>Crypto Answers</span>
                </div>
            </Paper>
        );
    }
}
