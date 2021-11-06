import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeButton from './theme-button';

// function ToolBar(props) {
//   return <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>;
// }

// class Theme extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };
//   }

//   toggleTheme() {
//     this.setState((state) => ({
//       theme: state.theme === themes.light ? themes.dark : themes.light,
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>theme-context</h1>
//         <ThemeContext.Provider value={this.state.theme}>
//           <ToolBar changeTheme={this.toggleTheme.bind(this)} />
//         </ThemeContext.Provider>
//         <section>
//           {/* 这个组件没有订阅context，所以theme不会发生改变 */}
//           <ThemeButton>Button Theme</ThemeButton>
//         </section>
//       </div>
//     );
//   }
// }

function Content() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

export default Theme;
