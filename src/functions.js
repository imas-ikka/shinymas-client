const w = require('electron').remote.getCurrentWindow();
let countFullScreenPushed = 0;

//閉じるボタンイベント
document.getElementById("close_icon").addEventListener("click", () => {
  w.close();
  console.log("clicked exit");
}, false);

//タッチスクリーン対応
document.getElementById("close_icon").addEventListener('touchStart', () => {
  w.close()
}, false);


//最大化ボタンイベント
document.getElementById("fullscreen_icon").addEventListener("click", () => {
  console.log("clicked exit");
  w.setFullScreen(true);
  const titleBar = document.getElementById("titlebar");
  titleBar.style.display = "none";
  document.getElementById("web_view").style.top = 0;
}, false);

//タッチスクリーン対応
document.getElementById("fullscreen_icon").addEventListener('touchStart', () => {
  w.setFullScreen(true);
  const titleBar = document.getElementById("titlebar");
  titleBar.style.display = "none";
  document.getElementById("web_view").style.top = 0;
}, false);

//最大化後Esc押下で元に戻る
document.addEventListener("keydown", (evt) => {
  evt = evt || window.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key == "Escape" || evt.key == "Esc");
  } else {
    isEscape = (evt.keyCode == 27);
  }
  const wv = document.getElementById("web_view");
  if (isEscape&& wv.style.top === "0px") {
    wv.style.top = "30px";
    document.getElementById("titlebar").style.display = "flex";
    w.setFullScreen(false);
  }
}, false);

//リロードボタンのイベント
document.getElementById("reload_icon").addEventListener("click", () => {
  document.getElementById("web_view").reload();
}, false);

document.getElementById("reload_icon").addEventListener('touchStart', () => {
  document.getElementById("web_view").reload();
}, false);
//スクリーンショット機能実装テスト
function test(){
  w.capturePage();
}
