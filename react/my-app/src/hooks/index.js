// 业务逻辑与UI分离,逻辑单独封住一个hook

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>子组件的count值：{count}</div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

export default App;
