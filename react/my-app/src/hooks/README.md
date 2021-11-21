```js
import React from 'react';

const Child = (props) => {
  // const { count } = props;
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
    this.setState(({ count }) => ({
      count: count + 1,
    }));
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
```

上面的这个代码中，我的父组件 render 了两次，count 值 2
