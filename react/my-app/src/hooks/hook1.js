import React from 'react';
// 在函数组件中，当他的父组件再次render的时候，子组件也会被重新的调用一次，但是无状态的函数子组件是无法维持它自身的状态
const Child = () => {
  let count = 0;
  count++;
  console.log(`Child触发了${count}次`);
  return <div>子组件的count：{count}</div>;
};

class App extends React.Component {
  state = {
    count: 1,
  };
  componentDidMount() {
    this.setState({
      count: 2,
    });
  }
  render() {
    const { count } = this.state;
    console.log(`render触发了${count}次`);
    return (
      <div>
        父组件的count：{count}
        <Child />
      </div>
    );
  }
}

export default App;

// 利用一个比包，保持数据的状态，数组的结构赋值
