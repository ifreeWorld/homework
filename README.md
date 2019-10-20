# homework

## 思路

拿到作业后，发现是要实现一个响应式的单页面。看到4种设计图的设计区别不是特别大，于是决定用一套代码来实现Desktop HD、Desktop、Tablet、Phone 4种分辨率的页面。
由于不能使用第三方框架和库进行开发，就使用HTML、CSS编写界面元素和样式，这里并没有采用grid布局（感觉不需要采用grid布局），用原生JS处理界面的交互逻辑，webpack处理前端工程化，jest做单元测试。

## 工程化

主要采用webpack、Babel，用less增加css开发效率

## 测试

主要采用Jest

## 测试

主要采用Jest

## 界面截图

见snapshot文件夹

## 使用

### 开发环境

```bash
npm i
npm run dev
```
浏览器访问localhost:9000进入页面

### 生产环境

```bash
npm run build
```