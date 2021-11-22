/**
 
## useEffect

它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。



*/ 

// 下面这个组件在 React 更新 DOM 后会设置一个页面标题

import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('111')
    document.title = `cliked ${count} times`
  })
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>clicked me</button>
    </div>
  )
}

export default App;
