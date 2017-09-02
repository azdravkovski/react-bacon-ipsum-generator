import React, { Component } from 'react';
import { render } from 'react-dom';
import Output from './Output';
import Select from './Select';
import Paras from './Paras';
import Checkbox from './Checkbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      typeText: 'all-meat',
      startWithLorem: 0,
      text: ''
    };
    this.toggleMeat = this.toggleMeat.bind(this);
    this.handleParasNum = this.handleParasNum.bind(this);
    this.toggleBaconIpsum = this.toggleBaconIpsum.bind(this);
  }

  componentWillMount() {
    this.getText();
  }

  getText() {
    //this is where I fetch the data from the API
    const endpoint = 'https://baconipsum.com/api/?type=' + this.state.typeText + '&paras=' + this.state.paras + '&start-with-lorem=' + this.state.startWithLorem;

    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          text: data
        }, function () {
          console.log(this.state);
        });
      })
      .catch(function (error) {
        console.log('There was a problem with the fetch operation:' + error.message);
      });
  }

  toggleMeat() {
    this.setState({
      typeText: this.state.typeText ? 'meat-and-filler' : 'all-meat'
    }, this.getText);
  }

  handleParasNum(number) {
    this.setState({
      paras: number
    }, this.getText);
  }

  toggleBaconIpsum() {
    this.setState({
      startWithLorem: this.state.startWithLorem == 0 ? 1 : 0
    }, this.getText);
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>🥓 React Bacon Ipsum Generator 🥓</h1>
        <hr />
        <form className='form-inline'>
          <div className='form-group'>
            <label>How meaty do you want your ipsum?</label>
            <Select value={this.state.typeText} onChange={this.toggleMeat} />
          </div>
        </form>
         <form className='form-inline'>
          <div className='form-group'>
            <label>Paragraphs</label>
            <Paras value={this.state.paras} onChange={this.handleParasNum} />
          </div>
        </form>
        <form className='form-inline'>
          <div className='form-group'>
            <Checkbox value={this.state.startWithLorem} onChange={this.toggleBaconIpsum} />
          </div>
        </form>
        <Output value={this.state.text} />
        <footer className='text-center' style={{ 'position': 'static' }}>Made with 🥓 by <a href='https://www.github.com/azdravkovski'>Aleksandar Zdravkovski</a> </footer>
      </div>
    );
  }
}

export default App;