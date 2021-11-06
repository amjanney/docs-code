# context

## Context 的基础使用

'
Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言

Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决方案

```js
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return <PageLayout topBar={topBar} content={content} />;
}
```

## context 的使用方法

api

```
const MyContext = React.createContext(defaultValue);
<MyContext.Provider value={/* 某个值 */}>
MyClass.contextType = MyContext;
static contextType = MyContext;

<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```

## 动态 Context

通过事件改变 context 的值

## 在嵌套组件中更新 Context

在 createContext 中添加回调事件，使得 consumers 组件更新 context

## 消费多个 Context
