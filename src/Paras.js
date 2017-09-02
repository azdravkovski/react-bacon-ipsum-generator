import React, { Component } from 'react';

export default class Paras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, function() {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input className='form-control' type='number' min='1' value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}