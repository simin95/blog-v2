---
title: http状态码
date: 2019-01-28 9:30:00
tags: 总结
---

# http状态码

###  2xx（成功） 
200 OK，表示从客户端发来的请求在服务器端被正确处理
201 OK，表示资源被成功创建，一般是post的返回的http-header
204 No content，表示请求成功，但响应报文不含实体的主体部分
205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容
206 Partial Content，进行范围请求

### 3xx （重定向） 
表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。

301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
302 found，临时性重定向，表示资源临时被分配了新的 URL
303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源
304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求

304 资源未修改 (当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期)



### 4xx（请求错误） 
这些状态代码表示请求可能出错，妨碍了服务器的处理。

400 bad request           请求内容缺少必要信息
401 unauthorized          未认证（登录）的请求
402 
403 forbidden             禁止访问
404 not found             请求资源未找到（或其他原因）
405 method not allowed    不允许此方法 

### 5xx（服务器错误）
500 internal sever error，表示服务器端在执行请求时发生了错误
501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

详细参考：[http-status-code](https://www.cnblogs.com/shanyou/archive/2012/05/06/2486134.html)

# http首部

### 通用首部
| 通用字段 | 作用 |
| :-: | :-: |
| Cache-Control |	控制缓存的行为 |
| Connection |	浏览器想要优先使用的连接类型，比如 keep-alive |
| Date |	创建报文时间 |
| Pragma |	报文指令 |
| Via |	代理服务器相关信息 |
| Transfer-Encoding |	传输编码方式 |
| Upgrade |	要求客户端升级协议 |
| Warning |	在内容中可能存在错误 |

### 请求首部
| 请求首部 |	作用 |
| :-: | :-: |
| Accept |	能正确接收的媒体类型
| Accept-Charset |	能正确接收的字符集
| Accept-Encoding |	能正确接收的编码格式列表
| Accept-Language |	能正确接收的语言列表
| Expect |	期待服务端的指定行为
| From |	请求方邮箱地址
| Host |	服务器的域名
| If-Match |	两端资源标记比较
| If-Modified-Since |	本地资源未修改返回 304（比较时间）
| If-None-Match |	本地资源未修改返回 304（比较标记）
| User-Agent |	客户端信息
| Max-Forwards |	限制可被代理及网关转发的次数
| Proxy-Authorization |	向代理服务器发送验证信息
| Range |	请求某个内容的一部分
| Referer |	表示浏览器所访问的前一个页面
| TE |	传输编码方式

### 响应首部
| 响应首部 |	作用 |
| :-: | :-: |
| Accept-Ranges |	是否支持某些种类的范围
| Age |	资源在代理缓存中存在的时间
| ETag |	资源标识
| Location |	客户端重定向到某个 URL
| Proxy-Authenticate |	向代理服务器发送验证信息
| Server |	服务器名字
| WWW-Authenticate |	获取资源需要的验证信息

### 实体首部
| 实体首部 |	作用 |
| :-: | :-: |
| Allow |	资源的正确请求方式 |
| Content-Encoding |	内容的编码格式
| Content-Language |	内容使用的语言
| Content-Length |	request body 长度
| Content-Location |	返回数据的备用地址
| Content-MD5 |	Base64加密格式的内容 MD5检验值
| Content-Range |	内容的位置范围
| Content-Type |	内容的媒体类型
| Expires |	内容的过期时间
| Last_modified |	内容的最后修改时间

