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


/**

这个程序简单的实现了一个单项数据流的功能：基于state渲染view，当发生事件时，state更新，生成新的state，基于state重新渲染view

可以看出，react的工作流程都是依赖state，如果有很多组件需要共享state的时候，显然这样的写法就很难满足了。这时候就需要把共享的state提取出来放在特定的位置，让我们的组件之间能够共享这个state。

上面就是redux的思想

Redux 期望所有状态更新都是使用不可变的方式

比如一个对象：可以用...obj去复制对象，然后对新复制的对象进行修改


## 基础概念


1.action

一个具有type字段的普通对象

const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

2.action creator



 */