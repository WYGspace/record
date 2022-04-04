# Ajax

## 一、原生AJAX

### 1、AJAX 简介

AJAX 全称为 Asynchronous JavaScript And XML，就是异步的 JS 和XML。

通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**。

AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

### 2、XML 简介

XML 可扩展标记语言。

XML 被设计用来传输和存储数据。

XML 和 HTML 类似，不同的是 HTML 中都是预定义标签，而 XML 中没有预定义标签，全都是自定义标签，用来表示一些数据。

```
比如说我有一个学生数据：
    name = "孙悟空" ; age = 18 ; gender = "男" ;
用 XML 表示：
    <student>
        <name>孙悟空</name>
        <age>18</age>
        <gender>男</gender>
    </student>
```

现在已经被 JSON 取代了。

```
用 JSON 表示：
{"name":"孙悟空","age":18,"gender":"男"}
```

