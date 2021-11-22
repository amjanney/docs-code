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

## 声明state

```js
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
}
```

## 读取state

```js
<p>You clicked {count} times</p>
```

## 更新state

```js
<button onClick={() => setCount(count + 1)}>
  Click me
</button>
```

## 声明多个state
```js
function ExampleWithManyStates() {
  // 声明多个 state 变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
}
```
## Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。

一般来说，在函数执行完成以后，变量就会”消失”。
而使用useState定义的变量，在函数退出后会被保留

## useEffect

React 组件中有两种常见副作用操作：需要清除的和不需要清除的

- 不需要清除的：在 React 更新 DOM 之后运行一些额外的代码。比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作
- 需要清除的：订阅外部数据源。这种情况下，清除工作是非常重要的，可以防止引起内存泄露

### useEffect的一些特性

useEffect会在每次渲染后执行。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

重新渲染，都会生成新的 effect,替换掉之前的

使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，

### 清除操作
effect 返回一个函数，React 将会在执行清除操作时调用它

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

## effect的逻辑分离

就像你可以使用多个 state 的 Hook 一样，你也可以使用多个 effect。这会将不相关逻辑分离到不同的 effect 中：

```js
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
``

