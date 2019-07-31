import React, {Component} from 'react';
import './App.css';
import { getAnimals, getDonations } from './apiCalls';
import { connect } from 'react-redux';
import { showAnimals } from './actions'
import AnimalContainer from './AnimalContainer'


class App extends Component{

  componentDidMount() {
    getAnimals()
    .then(animals => this.props.showAnimals(animals))

    getDonations()
  }

  render () {
    return (
      <div className='app'>
        <h1>Animal Rescue</h1>
        <AnimalContainer animals={this.props.animals} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  animals: store.animals
})

const mapDispatchToProps = dispatch => ({
  showAnimals: (animals) => dispatch(showAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);