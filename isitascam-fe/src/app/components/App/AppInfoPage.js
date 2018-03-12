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
                              label="Github Project"
                              secondary={true}
                              style={{margin:5}}
                              icon={<HeaderIcon />}
                            />

                            The entire bitcoinisitascam code base is free to the community.
                            Details of the different parts are listed below.
                        </p>
                        <p>
                        <Chip backgroundColor={blue300} style={styles.chip}>
                            <Avatar size={32} color={blue300} backgroundColor={indigo900}>
                            BE
                            </Avatar>
                            Backend
                        </Chip>An ExpressJs server supporting the isitascam api and providing a javascript implementaion
                        of the Algorithm
                        </p>
                        <p>
                        <Chip backgroundColor={blue300} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                            FE
                            </Avatar>
                            Frontend
                        </Chip>
                        ReactJS App running on node js server. Uses following technologies: react-router, react-flux dispatcher,
                        materia-ui components.
                        </p>
                        <p>
                        <Chip backgroundColor={blue300} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                            SU
                            </Avatar>
                            Swagger UI
                        </Chip>
                        Standalone instance of SwaggerUI running on nginx web server. Used to visualize and document the isitascam api
                        </p>
                        <p>
                        <Chip backgroundColor={blue300} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                            WS
                            </Avatar>
                            Web Server
                        </Chip>
                        Nginx web server proxying the front end react ui, the swagger ui server and the backend api server as
                        well as providing static hosting for the api swagger contract
                        </p>
                        <p>
                        <Chip backgroundColor={blue300} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                            DI
                            </Avatar>
                            Deployment Infrastructure
                        </Chip>
                        Each above service built as containerized isolated docker images and deployed as single node kubernetes cluster on Google Cloud Projet
                        </p>
                        <p>
                        <Chip backgroundColor={blue300} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={indigo900}>
                            DI
                            </Avatar>
                            Local Development
                        </Chip>
                        Docker-compose deployment with local runtime editing of the front end container code using mounted volumes
                        </p>
                        </div>
                    <div style={fstyle}>
                        <span style={ftext}>Crypto Answers</span>
                    </div>
                </Paper>
        );
    }
}
