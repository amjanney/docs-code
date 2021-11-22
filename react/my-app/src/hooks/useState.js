/**
 
你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑
Hook 将组件中相互关联的部分拆分成更小的函数

*/ 

import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>clicked me</button>
    </div>
  )
}

export default App;
