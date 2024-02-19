- WebSocket
  WebSocket 是一种基于tcp协议实现的 具有全双工通信，保持长连接 应用层协议，建立Websocket需要使用http协议，之后不再需要

- 与之相近的Socket：
  Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。在设计模式中，Socket其实就是一个门面模式(外观模式)，它把复杂的TCP/IP协议族隐藏在Socket接口后面，对用户来说，一组简单的接口就是全部，让Socket去组织数据，以符合指定的协议。