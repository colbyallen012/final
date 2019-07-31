import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addDonation } from './actions'

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(),
      name: '',
      donation: 0
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value })    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.donate(this.state)
    this.props.addDonation(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            value={this.state.name}
            name='name'
            placeholder='Name'
            onChange={this.handleChange}
          />
          <input 
            type='number'
            value={this.state.donation}
            name='donation'
            placeholder='Donation Amount'
            onChange={this.handleChange}          
          />
          <button>Donate!</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addDonation: (donation) => dispatch(addDonation(donation))
})

export default connect(null, mapDispatchToProps)(DonationForm);