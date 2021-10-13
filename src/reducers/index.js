// THIS IS WHAT OUR ACCOUNT BALANCE STARTS AS.
const initialState = {
  balance: 25
};

const bankAccountReducer = (state = initialState, action) => {
  switch(action.type) {
    // IF WE DISPATCH AN ACTION WITH THE TYPE OF 'DESPOSIT', THIS IS HOW THE STATE WILL CHANGE.
    case 'DEPOSIT':
      return {
        balance: state.balance + action.payload
      };
    // IF WE DISPATCH AN ACTION WITH THE TYPE OF 'WITHDRAWL', THIS IS HOW THE STATE WILL CHANGE.
    case 'WITHDRAWL':
      return {
        balance: state.balance - action.payload
      };
    // IF WE DON'T DISPATCH ANY ACTIONS, OUR STATE WILL REMAIN UNCHANGED.
    default:
      return state;
  };
};

export default bankAccountReducer;