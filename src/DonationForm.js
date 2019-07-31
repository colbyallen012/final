import React, {Component} from 'react';

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

  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    )
  }
}

export default DonationForm;