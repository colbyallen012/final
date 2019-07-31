import React, {Component} from 'react';
import './App.css';
import { getAnimals, getDonations, addNewDonation } from './apiCalls';
import { connect } from 'react-redux';
import { showAnimals, showDonations } from './actions'
import AnimalContainer from './AnimalContainer'
import DonationContainer from './DonationContainer'
import DonationForm from './DonationForm'


class App extends Component{

  componentDidMount() {
    getAnimals()
    .then(animals => this.props.showAnimals(animals))

    getDonations()
    .then(donations => this.props.showDonations(donations))
  }

  addDonation = (state) => {
    addNewDonation(state)
  }

  render () {
    return (
      <div className='app'>
        <h1>Animal Rescue</h1>
        <DonationForm donate={this.addDonation}/>
        <DonationContainer donations={this.props.donations} />
        <AnimalContainer animals={this.props.animals} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  animals: store.animals,
  donations: store.donations
})

const mapDispatchToProps = dispatch => ({
  showAnimals: (animals) => dispatch(showAnimals(animals)),
  showDonations: (donations) => dispatch(showDonations(donations))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);