import React from 'react'
import { Link } from  'react-router'
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { render } from 'react-dom'
import {Grid, Row, Col} from 'react-bootstrap/lib';
import HomeIcon from 'react-icons/lib/fa/home';
import AlgoIcon from 'react-icons/lib/fa/rocket';
import InfoIcon from 'react-icons/lib/fa/info-circle';
import StatusIcon from 'react-icons/lib/fa/line-chart';
import ApiIcon from 'react-icons/lib/ti/cog-outline';
import StoryIcon from 'react-icons/lib/ti/document-text';

export default class AppSideMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const docsUrl = process.env.DOCS_URL;

        return (
            <div>
                <AppBar showMenuIconButton={ false } title="Crypto Analysis"/>
                <MenuItem onClick={this.props.closeit} containerElement={<Link to="/"/>} leftIcon={<HomeIcon />}>Home</MenuItem>
                <MenuItem onClick={this.props.closeit} containerElement={<Link to="/status"/>} leftIcon={<StatusIcon />}>Bitcoin Status</MenuItem>
                <MenuItem onClick={this.props.closeit} containerElement={<Link to="/algorithm"/>} leftIcon={<AlgoIcon />}>The Algorithm</MenuItem>
                <MenuItem onClick={this.props.closeit} containerElement={<Link to="/story"/>} leftIcon={<StoryIcon />}>Origin Story</MenuItem>
                <MenuItem onClick={this.props.closeit} containerElement={<Link to="/info"/>} leftIcon={<InfoIcon />}>Develop</MenuItem>
                <MenuItem onClick={this.props.closeit} containerElement={<a href={docsUrl}>x</a>} leftIcon={<ApiIcon />}>Api Contract</MenuItem>
            </div>
        );
    }
}
