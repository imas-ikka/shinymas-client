'use strict'

const {app, BrowserView, BrowserWindow} = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({
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

  // let view = new BrowserView({
  //   webPreferences: {
  //     nodeIntegration: false,
  //     webviewTag: true
  //   }
  // });
  // win.setBrowserView(view);
  // view.setBounds({
  //   x: 0,
  //   y: 0,
  //   width: 1136,
  //   height: 670
  // });
  // view.webContents.loadURL('file://' + __dirname + '/index.html');
  // view.webContents.loadURL('https://shinycolors.enza.fun/');
});


// macOSの場合全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
})
