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

### 3、AJAX 的特点 

#### 1）AJAX 的优点 

① 可以无需刷新页面而与服务器端进行通信。 

② 允许你根据用户事件来更新部分页面内容。 

#### 2） AJAX 的缺点 

① 没有浏览历史，不能回退 

② 存在跨域问题(同源) 

③ SEO 不友好

### 4、AJAX 的使用

####  1）核心对象 

XMLHttpRequest，AJAX 的所有操作都是通过该对象进行的。

#### 2）使用步骤 

① 创建 XMLHttpRequest 对象 

var xhr = new XMLHttpRequest(); 

② 设置请求信息 

xhr.open(method, url); //可以设置请求头，一般不设置

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

③ 发送请求

xhr.send(body) //get 请求不传 body 参数，只有 post 请求使用

④ 接收响应

```
// xhr.responseXML 接收 xml 格式的响应数据

// xhr.responseText 接收文本格式的响应数据 

xhr.onreadystatechange = function (){ 

    if(xhr.readyState == 4 && xhr.status == 200){ 

    	var text = xhr.responseText; console.log(text);

    } 

}
```

