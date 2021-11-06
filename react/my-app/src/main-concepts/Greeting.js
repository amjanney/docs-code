import React from 'react';

function NameList(props) {
  const list = props.list;
  const listItems = list.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <div>
      <h1>hello,</h1>
      {list.length > 0 && (
        <div>
          <h2>login nane:</h2>
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
  );
}

function UserGreeting() {
  const list = ['janney', 'jack', 'ferry'];
  return (
    <div>
      <h1>welcome back!</h1>
      <NameList list={list} />
    </div>
  );
}

function GuestGreeting() {
  return <h1>please sign up!</h1>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={() => this.handleLogout()} />
        ) : (
          <LoginButton onClick={() => this.handleLogin()} />
        )}
      </div>
    );
  }
}

export default LoginControl;
