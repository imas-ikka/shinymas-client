'use strict'

const {app, BrowserView, BrowserWindow} = require('electron');

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1136,
    height: 670,
    // minWidth: 1136,
    // minHeight: 670,
    // maxWidth: 1136,
    // maxHeight: 670,
    frame: false,
    icon: './img_src/shinymas.ico',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });
  win.on('closed', () => {
    win = null;
  });

  win.loadURL('file://' + __dirname + '/index.html');
});


// macOSの場合全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
})
