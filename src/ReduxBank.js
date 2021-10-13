import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS LINE IS ONLY NECESSARY WHEN PASSING IN AN OBJECT AS THE SECOND ARGUMENT TO CONNECT
// import { depositMoney, withdrawlMoney } from './actions/accountActions';

class ReduxBank extends Component {
  state = {
    amount: 0
  };

  setAmount = (e) => {
    this.setState({
      amount: parseInt(e.target.value)
    });
  };


  desposit = () => {
    return this.props.depositMoney(this.state.amount);
  };

  withdrawl = () => {
    return this.props.withdrawlMoney(this.state.amount);
  };


  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Redux Bank</h1>

          $<input type="number" name="amount" onChange={this.setAmount} value={this.state.amount} />

          <div>
            <button type="button" onClick={this.desposit}>Deposit</button>
            <button type="button" onClick={this.withdrawl}>Withdrawl</button>
          </div>


          <h2>Your Account Balance is: $ {this.props.balance}</h2>

      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // WHEN WE CALL this.props.depositMoney, THAT ACTION IS DISPATCHED TO THE REDUCER
    depositMoney: (amount) => dispatch({ type: 'DEPOSIT', payload: amount }),
    withdrawlMoney: (amount) => dispatch({ type: 'WITHDRAWL', payload: amount })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxBank);

// THIS LINE CAN ALSO BE WRITTEN AS:
// export default connect(mapStateToProps, { depositMoney, withdrawlMoney })(ReduxBank);
