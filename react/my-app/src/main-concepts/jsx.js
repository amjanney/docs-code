import React from 'react';

// class JSX extends React.Component {
//   render() {
//     return <h1>jsx</h1>;
//   }
// }

function formatterName(user) {
  return user.firstName + user.lastName;
}

function greeting(user) {
  if (user) {
    return <h1>Hello, {formatterName(user)}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'guo ',
  lastName: 'jianli',
};

const JSX = (
  <div>
    hello, {greeting(user)},{greeting()}
  </div>
);

export default JSX;
