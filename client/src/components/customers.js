import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './customers.css';
const idPick = 11;

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      firstOpen: false
    };
  }

  componentDidMount() {
    fetch('/api/addressList')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }
  addClick(){
    fetch('/api/create')
    window.location.reload();
  }
  deleteClick(){
    fetch('/api/delete', idPick)
    window.location.reload();
  }
  handleFirstSpoiler=e=>{
    this.setState({firstOpen: !this.state.firstOpen})
  }
  render() {
    return (
      <div>
        {this.state.customers.map(customer =>
          <li key={customer.id} onClick ={this.handleFirstSpoiler}>{customer.firstDepartment}
          {this.state.firstOpen&&(<p>{customer.secondDepartmentName} {customer.name} {customer.emailAddress} {customer.phoneNumber}</p>)}
          </li>
        )}
        <Button color= 'teal' onClick={this.addClick}> Add </Button>
        <Button color = 'teal'> Change </Button>
        <Button color = 'teal' onClick={this.deleteClick}> Delete </Button>
      </div>
    );
  }
}

export default Customers;
