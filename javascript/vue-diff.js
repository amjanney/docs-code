/**
https://juejin.cn/post/6844904113587634184

当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。

同层比较

判断是否是同一个节点(sameNode)

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      )
    )
  )
}


不是，整个替换

是：

patchVNode
  - OldNode有字节点，Vnode没有 直接删除字节点
  - OldeNode没有字节点，Vnode有，直接添加字节点
  - 都有文本节点 直接替换掉文字内容
  - 都有子节点，进入 updateChildren 继续比较子节点 

updateChildren
 
  首尾指针法： oldStartIdx,newStartIdx, newEndIdx,oldEndIdx
  while循环不断遍历子节点



为什么 Vue 中不要用 index 作为 key

  key的作用：同一层级的一组节点，他们可以通过唯一的id进行区分。基于以上这两点假设，使得虚拟DOM的Diff算法的复杂度从O(n^3)降到了O(n)。


  节点reverse,没法复用节点，如果我们只是改变了节点的位置，而不是元素本身，key本来是可以复用的，性能损耗
  删除节点的场景 节点


 */
