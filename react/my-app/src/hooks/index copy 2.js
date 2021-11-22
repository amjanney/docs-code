// 业务逻辑与UI分离,逻辑单独封住一个hook

import React from 'react';

let obj = {
  count: 0,
};

let addCount = () => {
  console.log(obj.count);
  obj.count++;
};
const Child = () => {
  console.log(`Child触发了${obj.count}次`);
  return <div onClick={addCount}>子组件的count值：{obj.count}</div>;
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
        父组件的count值：{count}
        <Child />
      </div>
    );
  }
}

export default App;

// 利用一个比包，保持数据的状态，数组的结构赋值
