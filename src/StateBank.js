import React, { Component } from 'react';

class StateBank extends Component {

  state = {
    balance: 25,
    amount: 0
  };

  setAmount = (e) => {
    this.setState({
      ...this.state,
      amount: parseInt(e.target.value)
    });
  };


  deposit = () => {
    this.setState(prevState => {
      return {
        balance: prevState.balance + this.prevState.amount,
        amount: 0
      };
    });
  };

  withdrawl = () => {
    this.setState(prevState => {
      return {
        balance: prevState.balance - this.prevState.amount,
        amount: 0
      };
    });
  };

  render() {
    return (
      <div>
        <h1>State Bank</h1>

          $<input type="number" name="amount" onChange={this.setAmount} value={this.state.amount} />

          <div>
            <button type="button" onClick={this.deposit}>Deposit</button>
            <button type="button" onClick={this.withdrawl}>Withdrawl</button>
          </div>


          <h2>Your Account Balance is: $ {this.state.balance}</h2>

      </div>
    );
  }
}

export default StateBank;
