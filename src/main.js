'use strict'

const {app, BrowserView, BrowserWindow, ipcMain} = require('electron');

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
      nodeIntegration: true
    }
  });
  win.on('closed', () => {
    win = null;
  });

  const view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL('file://' + __dirname + '/index.html');
  win.setBrowserView(view);
  
  view.setBounds({
    x: 0,
    y: 30,
    width: 1136,
    height: 640
  });
 /* 
  win.on('will-resize', () => {
    view.webContents.send("RETURN_BOUNDS", (_, {x, y, width, height}) => {
      view.setBounds({x, y, width, height});
    });
  });
  */

  ipcMain.on("SET_BOUNDS", (_, {x, y, width, height}) => {
    view.setBounds({x, y, width, height});
  });

  view.setAutoResize({
    width: true,
    height: true
  });

  view.webContents.loadURL("https://shinycolors.enza.fun/");
});


// macOSの場合全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
})
