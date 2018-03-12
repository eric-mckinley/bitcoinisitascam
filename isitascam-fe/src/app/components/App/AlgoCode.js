import React from 'react'
import { render } from 'react-dom'

import { withStyles } from 'material-ui/styles';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/php/php');
var CodeMirror = require('react-codemirror');

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class AlgoCode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

            var options = {
                lineNumbers: true,
                mode: this.props.codetype
            };

        return (
          <div>
            <h2 style={styles.headline}>{this.props.codetitle} Algorithm Implementation</h2>
            <p>
                <CodeMirror value={this.props.codetext} options={options} />
             </p>
          </div>
        );
    }
}
