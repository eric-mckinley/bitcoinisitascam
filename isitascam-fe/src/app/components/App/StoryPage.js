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
                        <span style={htext}>Murder, suicide and a lost thesis</span>
                    </div>
                    <div style={bstyle}>
                        <p>
                            The bitcoinisitascam website has its humble origins in the lecture halls and computer labs of Drake University of Moines Iowa.
                            It was here during the late 2014 Autumn months that post graduate student Ivor Kweshteon knocked on his lecturers office door
                            with his proposed thesis title of 'Are crypto currencies legitimate?'
                        </p>
                        <p>
                            Luck would have it that Ivors professor was familiar with the world of digital currencies and had even spoke amongst his peers about
                            the possibility of some day categorizing Bitcoin as either good or bad. He believed such categorizing was within the grasp of this our
                            generation to the amusement of his colleagues.
                            Now in Ivor he had someone with the energy and vigour to search for answers.
                        </p>
                        <p>
                            As the winter months rolled in the lecturer and student set about looking for the answer. By the late night hum of the offices florescent
                            tubes a deep friendship was formed. By the time Christmas rolled around the professor had already planned to celebrate their
                            progress by extending an invititation to spend the holidays with his wife in their mountain cabin.
                        </p>
                        <p>
                            Investigators presume it was late on the night of the 25th that the events leading to the gruesome scene they found unfolded. The deep winter snow had
                            preserved the bodies well but no concrete reason could be given for the three nude bodies and the bloodied weather vein.
                        </p>
                        <p>
                            By the summer of 2015 the University was trying to move on from the scandal and consign it to the past. To that end when the
                            police investigators returned the confiscated contents of the professors office the administration promptly packed them away to
                            a forgotten part of a disused building.
                        </p>
                        <p>
                            I have had a lot of temp jobs, most are tedious but some provide ways to alleviate the boredom. In September 2017 working a construction job
                            on the north campus of Drake University I found sifting through the reams of forgotten student papers I had found provided me with such escapism.
                            Mixing concrete was never going to be my thing so discovering a lost archive in the rubble of the offices we were rebuilding was a blessing.
                        </p>
                        <p>
                            By the third week I had begun to lose interest in the boxes of neatly bound printouts. Study titles had begun to blur in my mind and barely grabbed my attention.
                            That was until I pulled out a plastic covered single page thesis:
                        </p>
                        <CodeMirror value={thesis} options={options} />
                        <p>
                            I have read and reread that theory a thousand times since that day and with the help of
                            the open source community have worked non stop to turn that theory into reality.
                        </p>
                        </div>
                    <div style={fstyle}>
                        <span style={ftext}>Crypto Answers</span>
                    </div>
                </Paper>
        );
    }
}
