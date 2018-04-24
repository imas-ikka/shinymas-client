// アプリケーション作成用のモジュールを読み込み
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
 
const path = require('path');
const url = require('url');
 
// メインウィンドウ
let mainWindow;
 

function createWindow() {
  // メインウィンドウを作成します
  mainWindow = new BrowserWindow({
    "width": 1136,
    "height": 664
  });
 
  // メインウィンドウに表示するURLを指定します
  // （今回はmain.jsと同じディレクトリのindex.html）
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
 
  // mainWindow.loadURL(url.format({
  //   pathname: path.join('shinycolors.enza.fun'),
  //   protocol: 'https:',
  //   slashes: true
  // }));

  // デベロッパーツールの起動
  //mainWindow.webContents.openDevTools();
 
  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
 
//  初期化が完了した時の処理
app.on('ready', createWindow);
 
// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', () => {
  // メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    Electron.session.defaultSession.clearCache(() => {})
    createWindow();
  }
});
