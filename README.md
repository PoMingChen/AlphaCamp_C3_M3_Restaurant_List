# 我的餐廳清單

這個專案是 AlphaCamp 全端網頁課程，後端開發實作 M3 章節的實作作業。主要是透過 Node.js、Express 框架，練習一個簡易的餐廳清單應用程式（Web Applicaton）。

主要功能有：餐廳清單的瀏覽、餐廳細部介紹，以及透過搜尋功能（餐廳名稱或類別），來找到符合條件的餐廳。

- [ ]功能照片待捕上

## Getting Started

### Prerequisites

若要嘗試執行此份專案，環境部分您需要先準備以下（由於作者使用 macOS，以下指令以 macOS 為主）：

1. 安裝 Node Version Manager (nvm)

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.0/install.sh | bash
```

2. 使用 Node Version Manager (nvm) 安裝 node.js 並使用指定版本(`node.js @v18.15.0`)

```
$ nvm install 18.15.0
```

```
$ nvm use 18.15.0
```

3. 檢查是否有安裝成功，並確認 node.js 版本

```
node -v
```

### Installing

1. 將本專案從 GitHub Clone 到自己的本機，並切換到專案資料夾

```
https://github.com/PoMingChen/AlphaCamp_C3_M3_Restaurant_List.git
```

2. 透過 npm 安裝所需的套件，並請留意 `package.json` 中的相依套件版本

```
npm i express@4.19.2
```

```
$ npm install express-handlebars@7.0.4
```

```
npm install -g nodemon
```

## Running the tests

- 尚未實作

## Deployment

1. 啟動伺服器，執行 app.js 檔案

```
nodemon app.js
```

2. 開啟瀏覽器，並輸入以下網址 `http://localhost:3000`

## Built With

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [前端網頁頁面設計 1]（https://codepen.io/alpha-camp/pen/yrLbrZ）-由 AlphaCamp 提供
- [前端網頁頁面設計 2]（https://codepen.io/alpha-camp/pen/JVjNgG）-由 AlphaCamp 提供

## Contributing

- 無

## Versioning

- 無

## Authors

- [PoMingChen](https://github.com/PoMingChen)

## License

- 無

## Acknowledgments

- [AlphaCamp](https://tw.alphacamp.co/) 導師與助教群
