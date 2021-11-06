import React from 'react';
import { ThemeContext } from './theme-context';

// class ThemeButton extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     let props = this.props;
//     let theme = this.context;
//     console.log(this.prop);
//     return (
//       <button {...props} style={{ backgroundColor: theme.background }}></button>
//     );
//   }
// }

// ThemeButton.contextType = ThemeContext;

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeButton;
