const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = [
  {
    mode: 'production',
    context: srcPath,
    entry: './SlotPicker.js',
    output: {
      path: distPath,
      filename: 'SlotPicker.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ],
    },
    resolve: {
      alias: {
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      }
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: './assets', to: 'assets' },
        ],
      }),
    ],
    externals: {
      // Don't bundle react or react-dom      
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
      }
    }
  },
  {
    mode: 'production',
    context: srcPath,
    entry: './TimeSlot.js',
    output: {
      path: distPath,
      filename: 'TimeSlot.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
      ],
    },
  },
  {
    mode: 'production',
    context: srcPath,
    entry: './lang.js',
    output: {
      path: distPath,
      filename: 'lang.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
      ],
    },
  },
]
