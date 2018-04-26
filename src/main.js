'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

// Electronの初期化完了後に実行
app.on('ready', function () {
  // メイン画面の表示。ウィンドウの幅、高さを指定
  mainWindow = new BrowserWindow({width: 1136, height: 670, frame: false, icon: './img_src/shinymas.ico', 'node-integration': false})
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

// macOSの場合全てのウィンドウが閉じたら終了
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit()
  }
})
