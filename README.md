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

```
$ command -v nvm
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

1. 將本專案從 GitHub Clone 到自己的本機

```
https://github.com/PoMingChen/AlphaCamp_C3_M3_Restaurant_List.git
```

2. 透過 npm 安裝所需的套件，並請留意 `package.json` 中的相依套件版本

```
npm i express@4.19.2
```

```
$ npm install express-handlebars
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

- 尚未實作

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- [PoMingChen](https://github.com/PoMingChen)

## License

- 無

## Acknowledgments

- [AlphaCamp](https://tw.alphacamp.co/) Instructor & TA
