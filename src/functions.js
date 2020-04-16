const remote = require('electron').remote;
const ipc = require("electron").ipcRenderer;
const browserWindow = remote.getCurrentWindow();
const webView = document.getElementById("web_view");
const closeButton = document.getElementById("close_icon");
const fullScreenButton = document.getElementsByClassName("fullscreen")
const reloadButton = document.getElementById("reload_icon");
const viewArea = document.getElementById("viewArea");
const titleBar = document.getElementById("titlebar");


//閉じるボタンイベント
closeButton.addEventListener("click", () => {
  browserWindow.close();
}, false);

//タッチスクリーン対応
closeButton.addEventListener('touchStart', () => {
  browserWindow.close()
}, false);

//リロードボタンのイベント
reloadButton.addEventListener("click", () => {
  webView.reload();
}, false);

reloadButton.addEventListener('touchStart', () => {
  webView.reload();
}, false);

function fullScreen(){
  if(browserWindow.isFullScreen() == false){
    titleBar.style.display = "none";
    viewArea.style.top = 0;
    browserWindow.setFullScreen(true);
  }
  else{
    titleBar.style.display = "flex";
    viewArea.style.top = "30px";
    browserWindow.setFullScreen(false);
  }
}

//最大化ボタンイベント
for(let i = 0; i < fullScreenButton.length; i++){
  fullScreenButton[i].addEventListener("click", () => {
    fullScreen();
  }, false);
  //タッチスクリーン対応
  fullScreenButton[i].addEventListener("touchStart", () => {
    fullScreen();
  }, false);
}

//最大化後Esc押下で元に戻る
document.addEventListener("keydown", (evt) => {
  evt = evt || browserWindow.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key == "Escape" || evt.key == "Esc");
  } else {
    isEscape = (evt.keyCode == 27);
  }
  if (isEscape && webView.style.top === "0px") {
    webView.style.top = "30px";
    document.getElementById("titlebar").style.display = "flex";
    browserWindow.setFullScreen(false);
  }
}, false);

// document.getElementById("web_view").addEventListener("resize", () => {
//   ipc.send("SET_BOUNDS", {
//     x: webView.clientLeft,
//     y: webView.clientTop + 30,
//     width: webView.clientWidth,
//     height: webView.clientHeight
//   });
// }, false)

//ipc.send("SET_BOUNDS", {
//  x: webView.clientLeft,
//  y: webView.clientTop + 30,
//  width: webView.clientWidth,
//  height: webView.clientHeight
//});

// ipc.on("RETURN_BOUNDS", {
//   x: webView.clientLeft,
//   y: webView.clientTop + 30,
//   width: webView.clientWidth,
//   height: webView.clientHeight
// });
