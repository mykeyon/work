# 1.浏览器本地存储
    浏览器本地存储有cookie，localStorage，sessionStroage
        cookie:会将每次的请求内容携带在请求头，一起发回服务器。（一般存储的是用户信息，用户的登陆状态）

        localStorage和sessionStorage都是本地存储。但sessionStorage是会话存储，当页面关闭时候，存储的信息就失效。
        localStorage.clear() 清楚缓存
        localStorage.setItem(key,val) 设置本地缓存
        localStorage.getItem(key) 获取本地存储
        localStorage.removeItem(key)移除本地存储
# 2.常见的Http状态
    200：请求成功
    303：重定向
    304：缓存
    404：页面不存在
    500：服务器出错
# 3.bootstrap相应实现的原理
    媒体查询+百分比（栅格结构）
# 4.vue请求数据的方式
    一般是使用axios或者fetch
    数据请求的类型：
        get、post、head、push、put、delete、option...
# 5.如何优化页面，加快页面的加载速度
    1.合并CSS、JS文件
    2.使用精灵图，减少图片的请求次数(现在多数使用的是webpack将图片打包成base64格式的图片)
    3.使用静态资源cdn
    4.依赖加载，惰性加载
    5.异步加载，使用缓存
# 6.iframe的优缺点
    优点：
        1：能原封不动的将原网页的内容展示出来；
        2：多个网页调用iframe只需要改动iframe内容即可；
        3：封装公共的部分，头部，尾部
        4：遇到加载缓慢的图标广告时，可用iframe
    缺点：
        1：增加请求次数
        2：产生多页面，不易管理
        3：会产生滚动条
        4：对移动设备的兼容性比较差
# 7.http与https的区别
    //https相比http加密，以及请求的内容增多
    http与https都是超文本传输协议
    Http直接使用TCP传输协议，没有加密，直接明文传输，所以存在以下风险
        冒充风险
        篡改风险
        窃听风险
    Https是信息加密传输，配备身份证书，防止第三方伪造
# 8.vuex的属性
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
    vuex是为项目创建一个全局额组件，const store = new Vuex.Store({})
        通过 store.state来获取状态
        通过 store.commit来出发状态的变化
# 9. vue双向绑定的原理
    是通过数据劫持与发布实现的
        方法有：Object.defineProperty 和 Proxy
# 10. 数组合并
    [...arr1, ...arr2]
    arr1.concat(arr2)
# 11. call, apply, bind的区别
    都是改变函数的this指向
    call第一个参数为函数，其余参数是以字符串的形式传入
    apply第一个参数为函数，其余参数是以数组的形式传入的
# 12.为什么使用axios
    1.axios是从node创建的http请求
    2.支持promise的API
    3.提供了一些并发请求的接口
# 13. 真实dom和虚拟dom的区别
    真实dom很耗费性能。
    虚拟dom通过dif算法计算出开销最小的dom操作开销从而提升网页性能。
    https://github.com/livoras/blog/issues/13
# 14.怎么解决跨域
    1.通过反向代理
    2.使用script标签的src属性
# 15 箭头函数和普通函数的区别
    箭头函数是匿名函数
    箭头函数没有this的执行，指向它的调用者
# 16.怎么理解闭包
    闭包是通过函数的封装，可以在函数外调用函数里的方法以及函数指。
    闭包可以隐藏变量，减少全局变量的使用。缺点是可能造成内从的泄露。