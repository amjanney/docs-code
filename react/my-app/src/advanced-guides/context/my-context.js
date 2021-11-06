import React from 'react';
const ThemeContext = React.createContext('light');
class ContextTest extends React.Component {
  render() {
    return (
      <div>
        <h1>context</h1>
        <ThemeContext.Provider value='dark'>
          <ToolBar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

function ToolBar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context}></Button>;
  }
}

function Button(props) {
  return <button>{props.theme}</button>;
}

export default ContextTest;
