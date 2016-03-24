# React.js Get Started

下载 React StarterKit: [http://facebook.github.io/react/downloads.html](http://facebook.github.io/react/downloads.html)

解压缩以后，在命令行进入 `react-xxxxx` 目录，执行：

```bash
python -m SimpleHTTPServer
```

然后打开浏览器，访问 [http://localhost:8000/examples/](http://localhost:8000/examples/) 既可以运行各种示例。


## 创建自己的 React 应用

首先安装 NodeJS: [https://nodejs.org/](https://nodejs.org/) 。

接下来创建一个目录（后文称为 `APP_ROOT_DIR`）。打开命令行窗口，进入 `APP_ROOT_DIR`，输入命令：

```bash
npm init
```

按照提示输入应用的名字等信息。命令执行完成后，会创建 `APP_ROOT_DIR/package.json` 文件。

接下来用 `npm` 命令安装所有需要的包：

> 这里使用了来自淘宝的 npm 源: [http://npm.taobao.org/](http://npm.taobao.org/)

```bash
sudo -H npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install --save react react-dom autobind-decorator
cnpm install --save-dev babel-cli babel-preset-react babel-preset-es2015 \
    webpack webpack-dev-server css-loader style-loader \
    babel-loader babel-core
```

这些包的用途：

-   `react` 和 `react-dom` 包含了 React 的库文件，参考 [http://facebook.github.io/react/](http://facebook.github.io/react/)
-   `webpack` 用于实现模块化，参考 [https://webpack.github.io/](https://webpack.github.io/)
-   `babel` 用于编译 JSX 文件，参考 [http://babeljs.io/](http://babeljs.io/)


### 创建应用程序骨架文件

为了更好的组织文件，还需要创建下列目录：

```bash
mkdir src
mkdir public_hmtl
mkdir public_hmtl/build
```

-   `src`: 用于放置所有源代码文件
-   `public_hmtl`: 能够通过浏览器访问的文件放在这个目录中
-   `public_html/build`: 从 `src` 编译的结果放入这个目录

添加入口文件 `APP_ROOT_DIR/public_html/index.html`，内容如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My App</title>
  </head>
  <body>
    <div id="app-content"></div>
    <script type="text/javascript" src="build/bundle.js"></script>
  </body>
</html>
```

添加源代码文件 `APP_ROOT_DIR/src/index.jsx`，内容如下：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Content from "./content.jsx";

class MyApp {
    run() {
        let mountNode = document.getElementById('app-content');
        ReactDOM.render(<Content />, mountNode);
    }
}

let myapp = new MyApp();
myapp.run();
```

添加源代码文件 `APP_ROOT_DIR/src/Content.jsx`, 内容如下：

```javascript
import React from 'react';

export default class Content extends React.Component {
    render() {
        return <h1>hello world</h1>;
    }
}
```

记得修改 `APP_ROOT_DIR/package.json` 文件，将其中的 `"main": "index.js"` 改为 `"main": "src/index.jsx"`。

在 `APP_ROOT_DIR` 中创建文件 `webpack.config.js`，内容如下：

```javascript
var path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "public_html/build"),
        filename: "bundle.js",
        publicPath: "build"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
};
```

### 在浏览器中测试

执行命令：

```bash
./node_modules/.bin/webpack-dev-server --content-base public_html
```

然后在浏览器中访问 [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) 即可看到执行结果。



