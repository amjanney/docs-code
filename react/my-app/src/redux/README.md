[中文文档](http://cn.redux.js.org/introduction/getting-started)

```js
import React, {useState} from "react"

function Counter () {
    // state
    const [count, setCount] = useState(0);

    // action
    const increment = () => {
        setCount(prevCounter => prevCounter + 1)
    }
    // view UI
    return (
        <div>
            Value: {count} <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;
```

这个程序简单的实现了一个单项数据流的功能：基于state渲染view，当发生事件时，state更新，生成新的state，基于state重新渲染view

可以看出，react的工作流程都是依赖state，如果有很多组件需要共享state的时候，显然这样的写法就很难满足了。这时候就需要把共享的state提取出来放在特定的位置，让我们的组件之间能够共享这个state。

上面就是redux的思想

Redux 期望所有状态更新都是使用不可变的方式

比如一个对象：可以用...obj去复制对象，然后对新复制的对象进行修改


## 基础概念

1.action

一个具有type字段的普通对象

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

2.action creator

创建并返回一个 action 对象的函数

```js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```
3.Reducer

reducer 是一个纯函数，根据接受的action type去决定执行的处理事件，然后返回新的state

规则：

- 只能用state和axtion计算新的state
- 禁止直接对state作出修改，利用对象的不可变性，复制state，并对其进行修改
- 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码


```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}
```

reduer原理介绍

```js
const numbers = [2, 5, 8]

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem })
  return previousResult + currentItem
}

const initialValue = 0

const total = numbers.reduce(addNumbers, initialValue)
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total)
// 15
```

Array.reduce() 方法处理数组的方式是，一次处理数组中的每一项，并返回一个最终结果。您可以将其视为“将数组减少到一个值”。

redux中的reducer跟它的原理一样

```js
function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}

const actions = [
  { type: 'counter/increment' },
  { type: 'counter/increment' },
  { type: 'counter/decrement' }
]

const initialState = { value: 0 }

const finalResult = actions.reduce(counterReducer, initialState)
console.log(finalResult)
// {value: 3}
```

4.store

每个reducer产生的state会存到一个叫做store的对象中

```js

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

5.Dispatch

唯一能更新state的方法，接收一个action对象。store.getState()可以获取最新的state

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

dispatch出发一个事件，reducer监听这个事件，并且更新state

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```


redux的具体工作流程

- 初始启动：
  - 使用最顶层的 root reducer 函数创建 Redux store
  - store 调用一次 root reducer，并将返回值保存为它的初始 state
  - 当 UI 首次渲染时，UI 组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他- 们可以知道 state 是否已更改。
  
- 更新环节：
  - 应用程序中发生了某些事情，例如用户单击按钮
  - dispatch 一个 action 到 Redux store，例如 dispatch({type: 'counter/increment'})
  - store 用之前的 state 和当前的 action 再次运行 reducer 函数，并将返回值保存为新的 state
  - store 通知所有订阅过的 UI，通知它们 store 发生更新
  - 每个订阅过 store 数据的 UI 组件都会检查它们需要的 state 部分是否被更新。
  - 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页


