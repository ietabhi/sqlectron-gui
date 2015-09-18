import React, {Component, PropTypes} from 'react';

import {Color} from '../styles/vars.js';

const style = {
  base: {
    fontSize: 14,
    lineHeight: '24px'
  },

  secondary: {
    color: Color.text.secondary
  }
}

@Radium
export default class Body extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    secondary: PropTypes.bool

  }

  render() {
    const {secondary} = this.props;

    return <span style={[style.base, secondary && style.secondary]}>
      {this.props.children}
    </span>;
  }

};
