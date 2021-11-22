/**
 
## 自定义hook

*/ 

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
