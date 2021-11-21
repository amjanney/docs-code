### 3.1 作用域链与值存储

- 函数组件的 render: 每次函数组件的 Render 意味着这个函数的再次执行:

```jsx
// 触发函数组件的render
// 在学习hooks之前，我们只能考虑到通过外层组件更新来触发内部函数组件的render
function Count(props) {
  let count = 0;
  console.log(`函数组件render了,当前count值为${count}`);
  return (
    <div>
      <div onClick={() => count++}>点我使count ++;</div>
      <div onClick={props.reRender}>点我使父组件更新，从而引发本组件更新</div>
    </div>
  );
}
```

- 问题: 每次 render 后，整个函数组件重新执行，count 值会被重置，如何维护 count 值?
- 闭包: 函数特性——函数可以沿着作用域链访问外部变量。
- 实践 1: 变量提升到外部作用域，通过外部作用域来存储与维护变量值

```jsx
// 模块_Counter
const insObj = {
    current: 0;
};
const addCount = ()=> {
    insObj.current ++;
}
function Counter(){
    console.log(`函数组件render了,当前count值为${insObj.current}`)
    return <div onClick={addCount}>+</div>
}
```

- 实践 2: 外层包裹一层函数作用域，通过外部函数作用域来储存与维护变量值

```jsx
// 是
function counterCreator(props){
    const insObj = {
        current: 0;
    };
    const addCount = ()=> {
        insObj.current ++;
    }
    return function Counter(props){
        console.log(`函数组件render了,当前count值为${insObj.current}`)
        return <div onClick={addCount}>+</div>
    }
}
const Counter = counterCreator(props);
```

- useRef

```jsx
import React, { useRef } from 'react';
function Demo() {
  const countRef = useRef(0);
  return <div>{countRef.current}</div>;
}
```

- 功能类比 class 组件的实例属性

```jsx
class Demo extends React.Component {
  count = 0;
  render() {
    return <div>{this.count}</div>;
  }
}
```

当然，这只是 useRef 的基础功能之一。

### 3.2 useState

- 特殊的实例属性 state 与 this.setState

```jsx
// this.setState: 更新实例属性state的同时，引发组件render
class Demo extends Component {
  state = {
    count: 0,
  };
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return <div>{count}</div>;
  }
}
```

- useState

```jsx
import React, { useRef } from 'react';
function Demo() {
  // setCount: 更新维护值count的同时，引发组件render
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}
```

- useState 的注意点
  当使用 useState 维护复杂(复合)类型的状态时，每次更新的值不会与原来的值合并(即不会 merge)。

```jsx
import React, { useRef } from 'react';
function Demo(){
    // setCount: 更新维护值count的同时，引发组件render
    const [state, setState] = useState({
        count: 0,
        otherState: 0;
    });
    console.log(`组件render啦，此时state为：${state}`)
    return (
        <div onClick={()=>setCount({
            count: state.count ++;
        })}>
            {count}
        </div>
    )
}
```

可以发现更新后的 state 的值为{count: 1}, 原来的 otherState 值不见了，我们可以结合结构运算符使用:

```jsx
    ()=>setCount({
        ...state,
        count: state.count ++;
    })
```

但在之后，我们将使用更优雅的代码范式。

### 3.3 副作用

- 概念： 什么是副作用(effect)? 我们暂时理解为 UI 无关的业务逻辑。

一个简单的例子 - 我们渲染的值来自于后端服务提供的接口。要知道：在类组件中我们是通过生命周期来处理的，但在函数式组件要如何处理？

```jsx
// some error code
```

- useEffect:

```jsx
// useEffect(callback,observer?)
// some code
```

- callback
- observer
- 生命周期模拟
- 副作用可控

### 3.4 memo - useRef/useCallback/useMemo

- why memo?: 函数组件每次更新都会重新执行函数本身，组件内部定义的变量与函数都会再次初始化定义。
- useRef: 变量记忆

- useCallback: 函数记忆

- useMemo: 计算结果记忆，甚至 UI 记忆

### 3.5 自定义钩子——ui 与业务逻辑分离，以保证函数组件的纯净。

- UI 组件: UI 组件应该保证组件的纯粹，这将使我们维护与复用 UI 变得更加方便
- 在 class 组件中我们是怎么做的？—— 状态提升。容器组件蕴含业务逻辑，UI 组件只关心渲染。

```jsx
class CountContainer extends Component{
    // ...业务逻辑函数封装
    render（){
        return (
            <>
                <Counter
                    Count={this.state.count}
                    countContrulor={this.countContrulor}
                />
            </>
        )
    }
}
// ...
```

优点: 保证了 UI 组件的纯净，业务逻辑在容器组件中统一处理;
缺点: 状态维护在容器组件中，状态更新意味着自容器组件从外往里更新，增加了 reRender 成本。

- 在函数式组件中？
  我们当然也可以使用状态提升，如:

```jsx
// ...
```

我们更期望将 reRender 成本颗粒化到单一组件，当然要同时保证 UI 组件的纯净

```jsx
// effect.js
export const useCountContrulor = (init) => {
  const [count, setCount] = useState(init || 0);
  const countContrulor = () => {
    // ...which use setCount
  };
  return {
    count,
    countContrulor,
  };
};
// Counter.tsx
function Counter() {
  const { count, countContrulor } = useCountContrulor();
  return <div>someUI lib count someEventHanle use countContrulor</div>;
}
```

### 3.6 other react hooks

- useLayoutEffect
- useContext
- useReducer

### 3.7 记忆 hooks——单链表与 hooks 使用限制

- 单链表 与 链表节点
- 单链表节点丢失引发导致链表遍历中断
- hooks 的使用限制

### 3.8 hooks 补充

- useReducer 与 useState: 惰性初始化与 hook 内部性能优化
- 极致优雅: UI 与副作用(业务逻辑)分离的代码范式
- 三方库: 项目中常用的三方库自定义 hook
- 自定义副作用 hook 封装

### 3.9 hooks 学习总结

- 函数组件结合 hooks 对比类组件
- 代码的设计、性能与可维护性
- 面向对象？函数式编程？react 框架的设计思想

更多 hooks 信息清除参考官方文档：https://reactjs.org/docs/hooks-reference.html
