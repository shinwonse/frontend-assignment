const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, // test: 로더를 적용할 파일 유형 (일반적으로 정규식 사용)
      //   exclude: /\.module\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      //   // use: 해당 파일에 적용할 로더의 이름, 뒤쪽의 로더가 먼저 실행됨
      //   // 여기서는 css-loader를 통과하면서 css 파일을 자바스크립트 파일에 끼워넣고 style-loader를 통과하면서 html 파일에 스타일 태그를 끼워넣는다.
      // },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(svg|png)/,
        type: 'asset/resource',
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // webpack-dev-server v4.0.0부터는 HMR이 default로 설정되어있다.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles/'),
      assets: path.resolve(__dirname, './src/assets/'),
    },
  },
};
