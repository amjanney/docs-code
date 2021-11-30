/**

https://juejin.cn/post/6844904021308735502#heading-85
https://juejin.cn/post/6844904100035821575#heading-29

// 一、说一说从输入URL到页面呈现发生了什么？——网络篇

构建请求;

查找强缓存;

DNS解析;

建立TCP连接;

发送HTTP请求;

网络响应请求;

// 二、说一说从输入URL到页面呈现发生了什么？-解析算法篇

解析dom, css, js;

构建DOM树 - 标记化 - 建树算法;

样式计算 - 格式化 - 标准化 - 计算规则继承层叠;

生成布局树;

// 三、说一说从输入URL到页面呈现发生了什么？——渲染过程篇

建立图层树 -
  生成绘制列表 -
  合成线程 -
  绘制视口附近图快 -
  首次合成优化 -
  图快栅格化 -
  生成位图数据 -
  浏览器进程绘制 -
  显示 -
  显示显示器;

// 四、谈谈你对重绘和回流的理解。

## 回流

DOM结构的修改引发DOM几何尺寸变化的时候会发生回流的过程;

常见几何属性有width、height、padding、margin、left、top、border 等等

回流的流程：生成DOM树-计算样式-生成布局树-建图层数-绘制列表

## 重绘

当 DOM 的修改导致了样式的变化，并且没有影响几何属性的时候，会导致重绘(repaint)。

重绘的过程：在回流的基础上跳过了生成布局树和建图层树的阶段

结论：重绘不一定导致回流，但回流一定发生了重绘

## 实践意义

避免频繁使用 style，而是采用修改class的方式。
使用createDocumentFragment进行批量的 DOM 操作。
对于 resize、scroll 等进行防抖/节流处理。
添加 will-change: tranform ，让渲染引擎为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率。当然这个变化不限于tranform, 任何可以实现合成效果的 CSS 属性都能用will-change来声明。这里有一个实际的例子，一行will-change: tranform拯救一个项目，点击直达。


## 五、XSS 攻击

XSS(Cross-site-Script) 攻击是指浏览器中执行恶意脚本, 然后拿到用户的信息进行操作。主要分为存储型、反射型和文档型。防范的措施包括:

- 一个信念: 不要相信用户的输入，对输入内容转码或者过滤，让其不可执行。
- 两个利用: 利用 CSP，利用 Cookie 的 HttpOnly 属性。

## CSRF攻击

CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。

CSRF攻击一般会有三种方式:

自动 GET 请求
自动 POST 请求
诱导点击发送 GET 请求。
防范措施: 利用 Cookie 的 SameSite 属性、验证来源站点和CSRF Token。


 
// 六、HTTPS为什么让数据传输更安全？

HTTPS为什么让数据传输更安全？

HTTP是明文传输。中间的每一个环节都会第三方窃取数据，为了防范这样的攻击，引入了HTTPS

HTTPS并不是一个新的协议，像HTTP这样，它只是在HTTP和TCP之间建立了一个中间层

HTTP和TCP之间通信的时候需要将数据包进行加密操作，TCP拿到数据包以后需要解密，反之同理。

加密的实现：

对称加密算法：

非对称加密算法

合体大法（中间添加CA证书）：

- 浏览器生成 client_random 和加密方法传到服务端
- 服务端生成 server_random ，然后把加密方法和数字证书传到浏览器
- 浏览器通过了数字证书的认证，（只有通过了CA认证）生成 pre_random ,用公钥加密，传到服务端
- 服务端通过私钥解密，获得 pre_random,通过 client_random、server_random和pre_random联合生成一个 secret
- 浏览器也通过client_random、server_random和pre_random联合生成一个 secret
- 服务端和浏览器进行确认，secret是否一致，一致则验证通过，进行数据的传递
- 之后的传输都是用 secret 作为密钥进行加密解密
 
// 七、HTTP/1.0 和HTTP/2.0

HTTP/2.0优化

请求头压缩

多路复用

  二进制分帧-解决队头阻塞

  明文传输改成二进制传输

服务器推送

  浏览器请求一个 HTML 文件，服务器就可以在返回 HTML 的基础上，将 HTML 中引用到的其他资源文件一起返回给客户端，减少客户端的等待。


// 八、HTTP状态码

RFC 规定 HTTP 的状态码为三位数，被分为五类:

  1xx: 表示目前是协议处理的中间状态，还需要后续操作。
  2xx: 表示成功状态。
  3xx: 重定向状态，资源位置发生变动，需要重新请求。
  4xx: 请求报文有误。
  5xx: 服务器端发生错误。

具体状态码分析：

  101 Switching Protocols。在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码 101。

  200 OK是见得最多的成功状态码。通常在响应体中放有数据。
  204 No Content含义与 200 相同，但响应头后没有 body 数据。
  206 Partial Content顾名思义，表示部分内容，它的使用场景为 HTTP 分块下载和断点续传，当然也会带上相应的响应头字段Content-Range。

  301 Moved Permanently即永久重定向
  302 Found，即临时重定向。
  304 Not Modified: 当协商缓存命中时会返回这个状态码

  解释：
  301：比如你的网站从 HTTP 升级到了 HTTPS 了，以前的站点再也不用了，应当返回301，这个时候浏览器默认会做缓存优化，在第二次访问的时候自动访问重定向的那个地址。
  302: 而如果只是暂时不可用，那么直接返回302即可，和301不同的是，浏览器并不会做缓存优化。

  403 Forbidden: 这实际上并不是请求报文出错，而是服务器禁止访问，原因有很多，比如法律禁止、信息敏感。
  404 Not Found: 资源未找到，表示没在服务器上找到相应的资源。

  500 Internal Server Error: 仅仅告诉你服务器出错了
  501 Not Implemented: 表示客户端请求的功能还不支持。
  502 Bad Gateway: 服务器自身是正常的，但访问的时候出错了，啥错误咱也不知道。

 */