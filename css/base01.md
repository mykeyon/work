https://www.cnblogs.com/qianguyihao/p/11823496.html
# 水平垂直居中
### 行内元素水平居中
    给其父元素设置：text-align: center;
### 行内元素垂直居中
    让文字的行高等于盒子的高度，可以让文本垂直居中
        .father{
            height: 30px;
            line-height: 30px;
        }
### margin: atuo; 的问题
    在css中，让元素水平居中是。如果是一个行内元素，可以让其父元素设置text-align: center; 如果是一个块级元素，可以设置：margin: auto; 或者： margin: 0 auto;

#####第一种方法
    使用绝对定位position: absolute;
    <style>
        .father{
            height: 500px;
            background-color: cyan;
            position: relative;
        }
        .son{
            height: 200px;
            width: 200px;
            background-color: purple;
            margin: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -100px;
            margin-top: -100px;
        }
    </style>
    <div class = "father">
        <div class = "son">子元素的内容</div>
    </div>
    这种写法的缺点是需要指明子元素的宽高。
##### 第二种方法
    使用绝对定位position: absolute + transform;
    <style>
        .father{
            height: 500px;
            background-color: cyan;
            position: relative;
        }
        .son{
            background-color: purple;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
    <div class = "father">
        <div class = "son">哈哈</div>
    </div>
    优点：子元素不需要定义高
##### 第三种 flex布局
    设置父元素：justify-content: center; 水平居中 align-items: center; 垂直居中
    <style>
        .father{
            height: 300px;
            background-color: cyan;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .son{
            background-color: purple;
        }
    </style>
    <div class = "father">
        <div class = "son">哈哈</div>
    </div>
##### 第四种 flex+margin: auto;
    这种方法也适合，左边固定，右边铺满
    <style>
        .father{
            display: flex;
            background-color: cyan;
            height: 300px;
        }
        .son{
            background-color: pureple;
            margin: auto;
        }
    </style>
    <div class = "father">
        <div class = "son">居中</div>
        <div>布局中</div>
    </div>
