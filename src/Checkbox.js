import React, { Component } from 'react';

export default class Checkbox extends Component {
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
        <input type='checkbox' id='start' className='form-control' name='start-with-ipsum' value='start' onChange={this.handleChange} style={{'margin-right': 10}}/>
        <label for='start'>Start with <em>bacon ipsum</em></label>
      </div>
    );
  }
}