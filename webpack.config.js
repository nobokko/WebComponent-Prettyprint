// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  // mode: 'production',
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  // エントリーポイントの設定
  entry: './src/ts/main.ts',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'NobokkoPrittyprint.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public', 'js')
  },
  resolve: {
    // 拡張子を配列で指定
    extensions: [
      '.ts', '.js',
    ],
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: 9876,
    inline: true,
    hot: true,
    host:"0.0.0.0"
  }
};