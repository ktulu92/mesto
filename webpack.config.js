const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
    entry: { main: './src/scripts/index.js' },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',

    
      
    
  },
  
    module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        loader: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/',
        
      },
      // добавили правило для обработки файлов
    {
      // регулярное выражение, которое ищет все файлы с такими расширениями
      test: /\.(png|svg|jpg|gif|woff2)$/,
      // при обработке этих файлов нужно использовать file-loader
      loader: 'file-loader'
    },
    // аналогично добавьте правило для работы с html
    {
      test: /\.html$/,
      loader: 'html-loader',
    }
      ],
     
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
       // путь к файлу index.html
    })
  ]  
}; 