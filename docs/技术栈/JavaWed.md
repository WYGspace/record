# JavaWed

## Tomcat

[官网](https://tomcat.apache.org/)

web容器 IIS

Tomcat 是 Apache 软件基金会一个项目，由 Apache、Sun 和部分公司和个人一起开发完善的轻量级 Web 应用服务器，是 Servlet 规范和 JSP 规范的开源实现。是免费开源的。

### Tomcat的安装与配置

1. 解压：不要放在带有中文、空格的路径上

2. 目录结构说明：

   | 目录    | 说明                                                         |
   | ------- | ------------------------------------------------------------ |
   | bin     | 可执行文件目录                                               |
   | conf    | 配置文件目录。这里最重要的文件是 server.xml。它是容器的主要配置文件。端口：默认8080。中文问题：URIEncoding="UTF-8" |
   | lib     | 存放lib目录                                                  |
   | logs    | 日志文件目录                                                 |
   | webapps | 项目部署目录                                                 |
   | work    | 工作目录                                                     |
   | temp    | 临时目录                                                     |

3. 配置环境变量，让Tomcat能够运行。因为tomcat是用Java语言来写的，因此需要JRE，所以需要配置JAVA_HOME

4. 启动tomcat【bin/startup.bat】，访问主页【localhost:8080】

## web Project 项目结构

```
com
 |-wyg
   	|-servlet/web/controller   放 servlet【接收页面的参数、返回参数给页面、控制页面跳转以及参数校验】
   	|-service            	   放服务层的接口【控制整个业务逻辑，如：增、改、删、查】
   	|    |-impl          	   服务接口的实现类
   	|-dao                	   数据库操作接口
   	|    |-impl          	   数据库操作接口的实现类
   	|-po                 	   数据的实体类【数据库的模型，就和MVC中的Models差不多】
   	|-vo                 	   页面的实体类
   	|-common             	   放公共的类
   	|-filter             	   过滤器
   	|-util               	   放工具类
```

## servlet

### servlet是什么

Servlet是sun公司提供的一门用于开发动态web资源的技术。 

Sun公司在其API中提供了一个servlet接口，用户若想用发一个动态web资源(即开发一个Java程序向 浏览器输出数据)，需要完成以下2个步骤： 

1、编写一个Java类，实现servlet接口。

2、把开发好的Java类部署到web服务器中。 

按照一种约定俗成的称呼习惯，通常我们也把实现了servlet接口的java程序，称之为Servlet

### servlet的调用过程及生命周期

Servlet程序是由WEB服务器调用，web服务器收到客户端的Servlet访问请求后： 

①Web服务器首先检查是否已经装载并创建了该Servlet的实例对象。如果是，则直接执行第④步， 否则，执行第②步。 

②装载并创建该Servlet的一个实例对象。 

③调用Servlet实例对象的init()方法。 

④创建一个用于封装HTTP请求消息的HttpServletRequest对象和一个代表HTTP响应消息的 HttpServletResponse对象，然后调用Servlet的service()方法并将请求和响应对象作为参数传递进去。 

⑤WEB应用程序被停止或重新启动之前，Servlet引擎将卸载Servlet，并在卸载之前调用Servlet的 destroy()方法。



servlet的生命周期：
    实例化 ------------→ Servlet 容器创建 Servlet 的实例
    ↓
    初始化 ------------→ 调用 init() 方法
    ↓
    服 务 ------------→ 调用 service() 方法（doGet()或者doPost()）
    ↓
    销 毁 ------------→ 调用 destroy() 方法
    ↓
    不可用------------→ 销毁实例并标记为垃圾收集