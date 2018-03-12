import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import HeaderIcon from 'react-icons/lib/fa/github';
import RaisedButton from 'material-ui/RaisedButton';
import {blue300, blue200, indigo900} from 'material-ui/styles/colors';

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


export default class AppInfoPage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount () {
        console.log('Mounting Info Page');
    }

    componentWillUnmount () {
        console.log('Unmounting Info Page');
    }

    render() {
        return (
                <Paper style={paperstyle} zDepth={3} rounded={false}>
                    <div style={hstyle}>
                        <HeaderIcon style={iconstyle} />
                        <span style={htext}>Infrastructure</span>
                    </div>

                    <div style={bstyle}>
                    <p>
                     <RaisedButton
                              href="https://github.com/eric-mckinley/bitcoinisitascam"
                              target="_blank"
                              label="View Github Project"
                              secondary={true}
                              style={{margin:5}}
                              icon={<HeaderIcon />}
                            />
                    </p>
                    <Chip backgroundColor={blue300} style={styles.chip}>
                        <Avatar size={32} color={blue300} backgroundColor={indigo900}>
                        BE
                        </Avatar>
                        Backend
                    </Chip>
                    <Chip backgroundColor={blue300} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                        FE
                        </Avatar>
                        Frontend
                    </Chip>
                    <Chip backgroundColor={blue300} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                        SU
                        </Avatar>
                        Swagger UI
                    </Chip>
                    <Chip backgroundColor={blue300} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                        WS
                        </Avatar>
                        Web Server
                    </Chip>
                    <Chip backgroundColor={blue300} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                        DI
                        </Avatar>
                        Deployment Infrastructure
                    </Chip>
                    <Chip backgroundColor={blue300} style={styles.chip}>
                        <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                        DI
                        </Avatar>
                        Local Development
                    </Chip>
                    </div>
                    <div style={fstyle}>
                        <span style={ftext}>Crypto Answers</span>
                    </div>
                </Paper>
        );
    }
}
