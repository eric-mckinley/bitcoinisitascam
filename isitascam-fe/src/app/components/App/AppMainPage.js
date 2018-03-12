import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import HeaderIcon from 'react-icons/lib/fa/line-chart';

var assign = require('object-assign');
var CryptoServiceActions = require('../../../actions/CryptoServiceActions');
var CryptoServiceStore = require('../../../store/CryptoServiceStore');



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
    verticalAlign: 'middle',
    marginLeft:10
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


export default class AppMainPage extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            details: {
                scam: true,
                difference: 0.0,
                description: "Unsure if it's a scam or not"
            }

    };
        this._onChange = this._onChange.bind(this)
 }

  componentDidMount () {
    CryptoServiceStore.addChangeListener(this._onChange);
    this.syncStatus();
  }

  componentWillUnmount () {
    CryptoServiceStore.removeChangeListener(this._onChange);
  }

    render() {
        var cryptoDetails = this.state.details;
        return (
            <Paper style={paperstyle} zDepth={3} rounded={false}>
                <div style={hstyle}>
                    <HeaderIcon style={iconstyle} />
                    <span style={htext}>{cryptoDetails.status}</span>
                </div>
                <div style={bstyle}>
                    <p>
                        As stated above, {cryptoDetails.currency} {cryptoDetails.status}.
                    </p>
                    <p>
                    The answer was derived from looking at the currency price of ${cryptoDetails.nowPrice} compared to previous
                    price of ${cryptoDetails.lastPrice}. We noted a {cryptoDetails.percentageChange}% shift in price.
                    </p>
                    <p>
                    Once the algorithm ran to completion we were able to the declare: {cryptoDetails.status}
                    </p>
                </div>
                <div style={fstyle}>
                    <span style={ftext}>Crypto Answers</span>
                </div>
            </Paper>
        );
    }

  syncStatus () {
    CryptoServiceActions.fetchStatus('bitcoin');
  }

  _onChange () {
    this.setState({details: CryptoServiceStore.getState().details});
  }
}
