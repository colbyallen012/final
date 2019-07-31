import React, {Component} from 'react';
import './App.css';
import { getAnimals } from './apiCalls'


class App extends Component{

  componentDidmount() {
    getAnimals()
  }

  render () {
    return (
      <div className='app'>
        <h1>Animal Rescue</h1>
      </div>
    )
  }
}

export default App;