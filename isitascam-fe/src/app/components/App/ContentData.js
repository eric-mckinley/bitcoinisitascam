import React from 'react'
import { render } from 'react-dom'

var assign = require('object-assign');
var ContentServiceActions = require('../../../actions/ContentServiceActions');
var ContentServiceStore = require('../../../store/ContentServiceStore');

export default class ContentData extends React.Component {
    constructor(props) {
        super(props);
        this._onContentReceived = this._onContentReceived.bind(this)
         this.state = {
            htmlContent: "Loading ...."
        };
    }

  componentDidMount () {
    ContentServiceStore.addChangeListener(this._onContentReceived);
    this.syncContent();
  }

  componentWillUnmount () {
     ContentServiceStore.removeChangeListener(this._onContentReceived);
  }

    render() {

        return (
            <div dangerouslySetInnerHTML={{__html: this.state.htmlContent}} />
        );
    }

      syncContent () {
        ContentServiceActions.fetchContent(this.props.pageName, this.props.blockName);
      }

      _onContentReceived () {
        if(ContentServiceStore.getState().content[this.props.pageName][this.props.blockName]) {
            this.setState({htmlContent: ContentServiceStore.getState().content[this.props.pageName][this.props.blockName].html});
        }
      }
}
