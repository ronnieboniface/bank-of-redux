export const depositMoney = (amount) => {
  return {
    type: 'DEPOSIT',
    payload: amount
  };
};


export const withdrawlMoney = (amount) => {
  return {
    type: 'WITHDRAWL',
    payload: amount
  };
};