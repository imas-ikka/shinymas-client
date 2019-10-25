let w = require('electron').remote.getCurrentWindow();
let countFullScreenPushed = 0;

//閉じるボタンイベント
document.getElementById("close_icon").onclick = function(){
  w.close()
};

//タッチスクリーン対応
document.getElementById("close_icon").addEventListener('touchStart', function(){
  w.close()
}, false);


//最大化ボタンイベント
document.getElementById("fullscreen_icon").onclick = function(){
  w.setFullScreen(true);
  const titleBar = document.getElementById("titlebar");
  titleBar.style.display = "none";
  document.getElementById("web_view").style.top = 0;
};

//タッチスクリーン対応
document.getElementById("fullscreen_icon").addEventListener('touchStart', function(){
  w.setFullScreen(true);
  const titleBar = document.getElementById("titlebar");
  titleBar.style.display = "none";
  document.getElementById("web_view").style.top = 0;
}, false);

//引用元 https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
//最大化後Esc押下で元に戻る
document.onkeydown = function(evt) {
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
};

//リロードボタンのイベント
document.getElementById("reload_icon").onclick = function(){
  document.getElementById("web_view").reload();
};

document.getElementById("reload_icon").addEventListener('touchStart', function(){
  document.getElementById("web_view").reload();
});
//スクリーンショット機能実装テスト
function test(){
  w.capturePage();
}
