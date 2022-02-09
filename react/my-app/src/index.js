import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
// import Game from './main-concepts/game';
// import JSX from './main-concepts/jsx';
// import Comp from './main-concepts/comp';
// import Clock from './main-concepts/Clock';
// import HandleClick from './main-concepts/handleClick';
// import Greeting from './main-concepts/Greeting';
// import NameForm from './main-concepts/Form';
// import Calculator from './main-concepts/Calculator';
// import Children from './main-concepts/Children';
// import WarningBanner from './main-concepts/WarningBanner';
// import FilterableProductTable from './main-concepts/FilterableProductTable';
// import ContextTest from './advanced-guides/context/my-context';
// import App from './advanced-guides/context/my-contexts';
// import Theme from './advanced-guides/context/theme.js';
// import App from './advanced-guides/error-boundary';
// import App from './advanced-guides/hoc';
// import App from './advanced-guides/portals/modal';
// import App from './advanced-guides/refs';
// import App from './advanced-guides/render-props/MouseTracker';
// import App from './advanced-guides/render-props/MouseTracker3';
// import App from './hooks';
// import App from './address';
import App from './dumi-ui';


// import App from './redux/counter/counter';
// import store from './redux/counter/store';
// import reducer from './redux/counter/reducer';
// import App from './router'
// import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// router
// ReactDOM.render(
//   <BrowserRouter>
//     <Counter />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// const stroe = createStore(reducer)
// // redux
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
<<<<<<< HEAD
=======

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
>>>>>>> master

ReactDOM.render(<App />, document.getElementById('root'));

// function Welcome(props) {
//   return <h1>hello, {props.name}</h1>;
// }

// const Ele = <Welcome name='guojianli' />;

// ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello react!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// ReactDOM.render(<Clock increment={1} />, document.getElementById('root'));

// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
