import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    return (
<input type='button' className={this.props.className} value= {this.props.label}/>
      )
  }
}

export default Button;
