window.onload = function(){
draw();
};

function draw(){
var title = "JavaScript 脱出ゲーム";
var startBtn = "Play";
var mouseX;
var mouseY;
var view = 0;
var mDown = [0,0];
var mUp = [0,0];
var mouseP = -1;
//debug
//var textNo = 4;
var textNo = -1;
var textMode = false;
var click = false;
//var buttonflg = [];
var buttonflg = false;
var buttonflg2 = false;
var buttonflg3 = false;
var buttonflg4 = false;
var itemflg = [];
var iselect = false;
var iSelFlg = [];
var iZoomFlg = [];
var iSelNo = null;
var zoom = false;
 var zoomNo = null;
var eventPlay = false;
var eventflg = null;
var QuantityText = 1;
var TextStart = false;
var newkey = false;
var ending = false;
var testevent = false;
var alwaysText = false;
var alwaysText2 = false;
var alwaysText3 = false;
var alwaysText4 = false;
var textPlay = false;
var clear = 0;
var clear1 = 0;
var clear2 = 0;

var check1 = false;
var check2 = false;
var check3 = false;

var pass1 = 0;
var pass2 = 0;
var pass3 = 0;

var panel1get = false;
var panel2get = false;
var panel3get = false;

var doramnum = 0;
var doramnum2 = 0;
var doramnum3 = 0;
var doramnum4 = 0;
var dentakucount = 0;
var dentakuText = ["","","",""];

var audios = {"door": new Audio("./sound/knocking_an_iron_door1.mp3"),
              "open": new Audio("./sound/locking_a_wooden_door1.mp3"),
              "button": new Audio("./sound/turning_a_lock1.mp3"),
              "get": new Audio("./sound/poka03.mp3"),
              "shakin": new Audio("./sound/shakin1.mp3"),
              "don": new Audio("./sound/surprise.mp3")
              };
for(var i in audios){
    audios[i].load();
}
var now_audio_num = "";

var open = false;

var canvas = document.getElementById("escape");
if ( ! canvas || ! canvas.getContext ) { return false; }
var cx = canvas.getContext("2d");

cx.font = "20px 'Century Gothic'";
cx.fillText(title,110,156);
cx.fillText(startBtn,250,306);

setInterval(printView, 50);

 //playボタンのクリック
canvas.addEventListener("mousedown", mouseDownHandler, false);

function mouseDownHandler(e) {
        if(!e) e = window.event;
        //alert("e.button = " + e.button + "\ne.which = " + e.which);

    if(e.button == 0 || e.button == 1){
     var rect = e.target.getBoundingClientRect();
     mouseX =  Math.floor(e.clientX - rect.left);
    mouseY =  Math.floor(e.clientY - rect.top);
    
    mDown = [mouseX,mouseY];

    if(textMode == false && zoom == false){
      ImageTable();
    }

    click = true;
    }
}

//canvas.addEventListener("mouseup", mouseUpHandler, false);
canvas.onmouseup = mouseUpHandler;
function mouseUpHandler(e) {
        if(!e) e = window.event;
        //alert("e.button = " + e.button + "\ne.which = " + e.which);

    if(e.button == 0 || e.button == 1){
     var rect = e.target.getBoundingClientRect();
     mouseX =  Math.floor(e.clientX - rect.left);
    mouseY =  Math.floor(e.clientY - rect.top);
    
    mUp = [mouseX,mouseY];
    //printView();
}}

canvas.onmousemove = mouseMoveListner;
function mouseMoveListner(e) {
    //表示クリア
    //cx.clearRect(0, 0, 65, 32);
    cx.clearRect(550, 0, 250, 200);
    //座標調整
    adjustXY(e);

    //テキストの描画
    cx.globalAlpha = 1;
    cx.fillStyle = "#666666";
    cx.font = "12px Arial";
    //debug
    cx.fillText("X座標：" + mouseX, 550, 12);
    cx.fillText("Y座標：" + mouseY, 550, 24);
    //cx.fillText("textend ：" + textend , 550, 36);
    cx.fillText("textNo：" + textNo, 550, 48);
    cx.fillText("textMode ：" + textMode , 550, 60);
    cx.fillText("testevent ：" + testevent , 550, 72);
    cx.fillText("dentakucount : "+ dentakucount, 550,84);
    cx.fillText("pass1 : "+ pass1, 550,96);
    cx.fillText("pass2 : "+ pass2, 550,110);
    cx.fillText("pass3 : "+ pass3, 550,125);
    cx.fillText("alwaysText ：" + alwaysText , 550, 137);
    cx.fillText("doramnum ：" + doramnum , 550, 150);
    cx.fillText("check1 ：" + check1 , 550, 163);
    cx.fillText("check2 ：" + check2 , 550, 176);
    cx.fillText("panel3get ：" + panel3get , 550, 189);
    //cx.fillText("clear ：" + clear , 550, 202);
    cx.fillText("iSelNo ：" + iSelNo , 550, 202);
    //cx.fillText("pass1 ：" + pass1 , 550, 202);
    
    /*
    if(textMode == false){
      ImageTable();
      ItemTable();
    }else{
    document.body.style.cursor = "pointer";
    }*/
}

function adjustXY(e) {
    var rect = e.target.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
}

function printView(){
    
    var img = new Image();
    var itemimg = new Image();
  
    if(view == 1){
      img.src = "./img/heya1.jpg";
      itemimg.src = "./img/pass/pass1.png";
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      if(panel1get == false){
      	cx.drawImage(itemimg,200,256,40,40);
      }
      	moveBt();
      	itemBar();
      }
    }else if(view == 11){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya1-1.jpg";
      itemimg.src = "./img/pass/pass2.png";
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      if(panel2get == false){
      	cx.drawImage(itemimg,400,130,40,40);
      }
      	moveBtBottom();
      	itemBar();
      }
    }else if(view == 12){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya1-2.jpg";
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      }
    }else if(view == 13){
      img = new Image();
      
      //if(clear2 == 0){
      img1 = new Image();
      img2 = new Image();
      img3 = new Image();
      itemimg = new Image();
      img.src = "./img/pass/paneru.png";
      img.onload = function(){
      	if(clear2 == 0){
      	cx.drawImage(img, 0, 56,550,400);
      }
      
      //パネルをあてはめる
      if(pass1 == 92){
      	img1.src = "./img/pass/pass1.png";
      	cx.drawImage(img1,77,207,100,100);
      	itemflg[92] = false;
      }else if(pass2 == 92){
      	img2.src = "./img/pass/pass1.png";
      	cx.drawImage(img2,224,207,100,100);
      	itemflg[92] = false;
      }else if(pass3 == 92){
      	img3.src = "./img/pass/pass1.png";
      	cx.drawImage(img3,368,207,100,100);
      	itemflg[92] = false;
      }

      if(pass1 == 90){
      	img1.src = "./img/pass/pass2.png";
      	cx.drawImage(img1,77,207,100,100);
      	itemflg[90] = false;
      }else if(pass2 == 90){
      	img2.src = "./img/pass/pass2.png";
      	cx.drawImage(img2,224,207,100,100);
      	itemflg[90] = false;
      }else if(pass3 == 90){
      	img3.src = "./img/pass/pass2.png";
      	cx.drawImage(img3,368,207,100,100);
      	itemflg[90] = false;
      }

      if(pass1 == 91){
      	img1.src = "./img/pass/pass3.png";
      	cx.drawImage(img1,77,207,100,100);
      	itemflg[91] = false;
      }else if(pass2 == 91){
      	img2.src = "./img/pass/pass3.png";
      	cx.drawImage(img2,224,207,100,100);
      	itemflg[91] = false;
      }else if(pass3 == 91){
      	img3.src = "./img/pass/pass3.png";
      	cx.drawImage(img3,368,207,100,100);
      	itemflg[91] = false;
      }

      if(clear2 > 1 && clear2 < 5){
      	img1.src = "./img/pass/clearpass1.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear2 > 5 && clear2 < 25){
      	img1.src = "./img/pass/clearpass2.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear2 > 25 && clear2 < 40){
      	img1.src = "./img/pass/clearpass3.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear2 > 40 && clear2 < 55){
      	img1.src = "./img/pass/clearpass4.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear2 > 55 && clear2 <= 100){
      	img1.src = "./img/pass/clearpass.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	clear2 = 100;
      	}
      if(clear2 == 105){
      	img1.src = "./img/pass/clearpass0.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	//clear2 = 105;
      }
      if(clear2 != 0 && clear2 <= 75){
      	clear2 +=2;
      	}
      	moveBtBottom();
      	itemBar();
      }
    }
    
    else if(view == 2){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya2.jpg";
      itemimg.src = "./img/penchi.gif";
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      if(itemflg[1] != true){
      	cx.drawImage(itemimg,200,256,40,40);
      }
      if(buttonflg == true){
      	buttonflg = false;
      	buttonflg2 = false;
      	buttonflg3 = false;
      	buttonflg4 = false;
      }
      	moveBt();
      	itemBar();
      }
    }
    //view 21 パスワード入力画像
    else if(view == 21){
      img = new Image();		

            if(clear == 0){
      img1 = new Image();
      img2 = new Image();
      img3 = new Image();
      img4 = new Image();
      img.src = "./img/pass-01.jpg";
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	img1.src = "./img/no/no"+dentakuText[3]+".png";
      	cx.drawImage(img1,82,144,80,70);
      	img2.src = "./img/no/no"+dentakuText[2]+".png";
      	cx.drawImage(img2,184,144,80,70);
      	img3.src = "./img/no/no"+dentakuText[1]+".png";
      	cx.drawImage(img3,283,144,80,70);
      	img4.src = "./img/no/no"+dentakuText[0]+".png";
      	cx.drawImage(img4,379,144,80,70);
      	moveBtBottom();
      	itemBar();
      	}}
      	
      if(clear > 1 && clear < 5){
      	img.src = "./img/clear1.png";
      	img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	itemBar();
      	}}
      if(clear > 5 && clear < 25){
      	img.src = "./img/clear2.png";
      	img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	itemBar();
      	}}
      if(clear > 25 && clear < 40){
      	img.src = "./img/clear3.png";
      	img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	itemBar();
      	}}
      if(clear > 40 && clear < 100){
      	img.src = "./img/clear.png";
      	img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      	}}
      if(clear != 0 && clear <= 65){
      	clear +=2;
      	}
      if(clear == 100){
      	img.src = "./img/clear0.png";
      	img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      	}}
    }

    //ドラム画面
    else if(view == 22){
      img = new Image();
      img1 = new Image();
      img2 = new Image();
      img3 = new Image();
      img4 = new Image();

      img.src = "./img/doram/doram.png";
      img.onload = function(){
      	if(clear1 == 0){
      	cx.drawImage(img, 0, 56,550,400);
      	img1.src = "./img/no/no"+doramnum+".png";
      	cx.drawImage(img1,60,210,80,80);
      //ドラム２番目の画像処理
      	img2.src = "./img/no/no"+doramnum2+".png";
      	cx.drawImage(img2,185,210,80,80);
      //ドラム3番目の画像処理
      	img3.src = "./img/no/no"+doramnum3+".png";
      	cx.drawImage(img3,310,210,80,80);
      //ドラム4番目の画像処理
      	img4.src = "./img/no/no"+doramnum4+".png";
      	cx.drawImage(img4,430,210,80,80);
      }

      if(clear1 > 1 && clear1 < 5){
      	img1.src = "./img/doram/doramclear1.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear1 > 5 && clear1 < 25){
      	img1.src = "./img/doram/doramclear2.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear1 > 25 && clear1 < 40){
      	img1.src = "./img/doram/doramclear3.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear1 > 40 && clear1 < 55){
      	img1.src = "./img/doram/doramclear4.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	}
      if(clear1 > 55 && clear1 <= 100){
      	img1.src = "./img/doram/doramclear.png";
      	cx.drawImage(img1, 0, 56,550,400);
      	clear1 = 100;
      	}
      if(clear1 != 0 && clear1 <= 75){
      	clear1 +=2;
      	}
      	moveBtBottom();
      	itemBar();
      }
    }

    else if(view == 3){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya3.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBt();
      	itemBar();
      }
    }

    //view = 31 トッポ拡大
    else if(view == 31){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/toppo1.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      }
    }

    //view = 32 トッポの中から・・・
    else if(view == 32){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/toppo2.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      }
    }

    //view = 33 ドライバー画像
    else if(view == 33){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/toppo3.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      }
    }

    else if(view == 4){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya4.jpg";
      itemimg.src = "./img/pass/pass3.png";
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      if( panel3get == false){
      	cx.drawImage(itemimg,80,230,40,40);
      }
      	moveBt();
      	itemBar();
      }
    }
    
    //view=41 黒板の文字拡大
    else if(view == 41){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/mon1.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      }
    }

    //view=6 出口
    else if(view == 5){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya5.jpg";
      //itemimg.src = "./img/kagi.gif";
    //  cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      if(textNo < 3){
      	textMode = true;
      	firsttext();
      }else{
      	textMode = false;
      }
      /*if(itemflg[0] != true){
      	cx.drawImage(itemimg,125,286,40,40);
      }*/
      if(alwaysText == true){
      textWindow();
      }
      	moveBt();
      	itemBar();
      }
    }
    
    //ドアノブ
    else if(view == 51){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/doanobu2.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	//moveBt();
      	itemBar();
      }
    }

    //ゴミ箱
    else if(view == 52){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya5-2.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	moveBtBottom();
      	itemBar();
      }
    }
    
    //脱出画面
    else if(view == 6){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/heya5-3.jpg";
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	//moveBt();
      	itemBar();
      }
    }

    else if(view == 61){
      img = new Image();
      itemimg = new Image();
      img.src = "./img/dassyutu.jpg"
      //cx.clearRect(0, 0, 600, 600);
      img.onload = function(){
      	cx.drawImage(img, 0, 56,550,400);
      	//moveBt();
      	//itemBar();
      }
    }
}

  function moveBt(){
      cx.beginPath();
      cx.moveTo(4, 256);
      cx.lineTo(25, 241);
      cx.lineTo(25, 271);
      cx.closePath();
      /* 三角形を塗りつぶす */
      cx.fillStyle = "#ffffff";
      cx.fill();
      
      cx.beginPath();
      cx.moveTo(546, 256);
      cx.lineTo(521, 241);
      cx.lineTo(521, 271);
      cx.closePath();
      /* 三角形を塗りつぶす */
      cx.fillStyle = "#ffffff";
      cx.fill();
      /*
      cx.beginPath();
      cx.moveTo(260, 426);
      cx.lineTo(290, 426);
      cx.lineTo(275, 451);
      cx.closePath();
      cx.fillStyle = "#ffffff";
      cx.fill();*/
  }

  
  function moveBtBottom(){

      cx.beginPath();
      cx.moveTo(260, 426);
      cx.lineTo(290, 426);
      cx.lineTo(275, 451);
      cx.closePath();
      /* 三角形を塗りつぶす */
      cx.fillStyle = "#ffffff";
      cx.fill();
  }
  
  function itemBar(){
      /*var about = "？";
      cx.lineWidth = 3;
      cx.fillStyle = 'rgba(105, 105, 105, 1.0)';
      cx.fillRect(0,0,550,55);
      cx.beginPath();
      cx.strokeStyle = "#ffffff";
      cx.arc(530,30,17,0,2*Math.PI,true);
      cx.stroke();
      cx.fillStyle = "#ffffff";
      cx.font = "30px 'ＭＳ ゴシック'";
      cx.fillText(about,515,40);
*/
      cx.lineWidth = 2;
      cx.fillStyle = 'rgba(105, 105, 105, 1.0)';
      cx.fillRect(0,0,550,55);
      cx.fillStyle = 'rgba(205, 105, 105, 1.0)';
      cx.fillRect(510,0,40,55);

      cx.beginPath();
      cx.strokeStyle = "#ffffff";
      cx.arc(527,13,11,0,2*Math.PI,true);
      cx.stroke();
      cx.closePath();
      cx.beginPath();
      cx.arc(527,13,9,0,2*Math.PI,true);
      cx.stroke();
      cx.closePath();
      cx.beginPath();
      cx.moveTo(536, 17);
      cx.lineTo(547, 26);
      cx.moveTo(533, 21);
      cx.lineTo(543, 30);
      cx.moveTo(543, 30);
      cx.lineTo(547, 30);
      cx.moveTo(547, 30);
      cx.lineTo(547, 26);
      cx.stroke();
      cx.closePath();

      var about = "About";
      cx.fillStyle = "#ffffff";
  cx.font = "11px 'Century Gothic'";
  cx.fillText(about,515,41);
      about = "Item";
      cx.fillText(about,515,53);

      PrintItem();
      ItemTable();
      PrintZoomItem();
      PrintEvent();
  }

  function textWindow(){
  
      cx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      cx.fillRect(0,336,550,456);
      cx.fillStyle = "#ffffff";
  cx.font = "30px 'Century Gothic'";
  }

function firsttext(){

    textWindow();
    var text;

    switch(textNo){
    case 0: 
    text = "閉じこめられた……";
    cx.fillText(text,10,366);
    break;
    case 1: 
    text = "どうしよう？";
    cx.fillText(text,10,366);
    break;
    case 2: 
    text = "マジやばい";
    cx.fillText(text,10,366);
    break;
    case 3: 
    break;
    }

    if(click == true && textMode == true){
    textNo++;
    click = false;
    }

}


//////////////////////////////////////////////
//アイテムバーに入手したアイテム表示
function PrintItem(){
  var itemimg0 = new Image();
  var itemimg1 = new Image();
  var itemimg92 = new Image();
  var itemimg90 = new Image();
  var itemimg91 = new Image();
  var itemimg114 = new Image();
  var itemimg117 = new Image();
  
  if(itemflg[0] == true){
      if(newkey == false){
      itemimg0.src = "./img/kagi.gif";
      }else{
      itemimg0.src = "./img/nicekey.gif";
      }
        cx.drawImage(itemimg0,14,6,40,40);
      }
      

  if(itemflg[1] == true){
      itemimg1.src = "./img/penchi.gif";
        cx.drawImage(itemimg1,64,6,40,40);
      }
  
  if(itemflg[114] == true){
      itemimg114.src = "./img/keydaia.png";
        cx.drawImage(itemimg114,264,6,40,40);
      }

  if(itemflg[117] == true){
      itemimg117.src = "./img/hasami.png";
        cx.drawImage(itemimg117,314,6,40,40);
      }

  if(itemflg[92] == true){
        itemimg92.src = "./img/pass/pass1.png";
        cx.drawImage(itemimg92,114,6,40,40);
      }
  if(itemflg[90] == true){
      itemimg90.src = "./img/pass/pass2.png";
        cx.drawImage(itemimg90,164,6,40,40);
      }
  if(itemflg[91] == true){
      itemimg91.src = "./img/pass/pass3.png";
        cx.drawImage(itemimg91,214,6,40,40);
      }
}

//アイテムバーのアイテム選択
function SelectItem(xmin,ymin,xmax,ymax,itemNo){

  if(itemflg[itemNo] == true){
  

      if(eventPlay == false){
      if(mDown[0] > xmin && mDown[0] < xmax){
        if(mDown[1] > ymin && mDown[1] < ymax){

        if(iselect == false){
        iselect = true;
        iSelFlg[itemNo] = true;
        iSelNo = itemNo;

        if(zoom == false){
        iZoomFlg[itemNo] = true;}

        }else if(iselect == true && iSelFlg[itemNo] == true){
        iselect = false;
        iSelFlg[itemNo] = false;
        iSelNo = null;

        if(zoom == false){
        iZoomFlg[itemNo] = false;}

        }else if(iselect == true && iSelFlg[itemNo] != true){
        //iselect = false;
        iSelFlg[itemNo] = true;
        iSelFlg[iSelNo] = false;

        if(zoom == false){
        iZoomFlg[itemNo] = true;
        iZoomFlg[iSelNo] = false;}

        iSelNo = itemNo;
        }
        mDown = [-1,-1];
        mouseP = -1;

        }
      }
      }

      if( zoomNo == itemNo && iZoomFlg[zoomNo] == true && zoom == true ){
        cx.strokeStyle = 'rgb(0,255,0)';
        cx.strokeRect(xmin-1,ymin-1,41,41);

        var text = "zoom";
        cx.fillStyle = 'rgb(0,255,0)';
    cx.font = "15px 'Century Gothic'";
    cx.fillText(text,xmin,ymax-5);
      }

      if( iSelFlg[itemNo] == true && iselect == true ){
        cx.strokeStyle = 'rgb(255,0,0)';
        cx.strokeRect(xmin-1,ymin-1,41,41);
      }
/*

      if(mouseP == -1){
      if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
        document.body.style.cursor = "pointer";
        mouseP = viewNo;
      }else{
        document.body.style.cursor = "default";
      }}
      else if(mouseP == viewNo){
      if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
        document.body.style.cursor = "pointer";
      }else{
        document.body.style.cursor = "default";
        mouseP = -1;
      }}*/

  }

}

function ZoomItem(xmin,ymin,xmax,ymax){

if( iZoomFlg[iSelNo] == true && zoom == false){

      if(mDown[0] > xmin && mDown[0] < xmax){
        if(mDown[1] > ymin && mDown[1] < ymax){

      zoom = true;

  }}

 }
}

//アイテム拡大表示
function PrintZoomItem(){

 if(zoom == true){
  var itemimgZ = new Image();

      //cx.fillStyle = 'rgba(105, 105, 105, 1.0)';
      cx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      cx.fillRect(90,56,410,366);
  
  if(iZoomFlg[0] == true){
      if(newkey == false){
      itemimgZ.src = "./img/kagi.gif";
      }else{
      itemimgZ.src = "./img/nicekey.gif";
      }
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 0;
        //かぎ拡大時のせりふ１，２
      if(newkey == false){
        EventSwitchText(128,172,397,360,12);
        EventSwitchText(218,62,402,170,13);
      }else{
        //いいかぎ拡大時のせりふ１，２
        EventSwitchText(92,63,399,371,16);
      }
      }
      

  if(iZoomFlg[1] == true){
      itemimgZ.src = "./img/penchi.gif";
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 1;
        //ペンチ拡大時のせりふ１，２
        EventSwitchText(98,64,198,190,14);
        EventSwitchText(137,156,360,347,14);
        EventSwitchText(196,76,397,155,15);
      }
  
  if(iZoomFlg[114] == true){
      itemimgZ.src = "./img/keydaia.png";
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 114;
        EventSwitchText(112,82,246,343,115);
        EventSwitchText(250,123,395,315,116);
      }

  if(iZoomFlg[117] == true){
      itemimgZ.src = "./img/hasami.png";
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 117;
        EventSwitchText(99,64,399,366,119);
      }

  if(iZoomFlg[92] == true){
      itemimgZ.src = "./img/pass/pass1.png";
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 92;
        EventSwitchText(100,65,400,365,98);
      }
  if(iZoomFlg[90] == true){
      itemimgZ.src = "./img/pass/pass2.png";
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 90;
        EventSwitchText(100,65,400,365,93);
      }
  if(iZoomFlg[91] == true){
      itemimgZ.src = "./img/pass/pass3.png";
        cx.drawImage(itemimgZ,100,66,300,300);
        zoomNo = 91;
        EventSwitchText(100,65,400,365,94);
      }
        EventEnd();

        cx.strokeStyle = 'rgb(255,0,0)';
        cx.strokeRect(469,58,30,30);
        cx.beginPath();
        cx.moveTo(470, 58);
        cx.lineTo(499, 86);
        cx.moveTo(499, 58);
        cx.lineTo(470, 86);
        cx.closePath();
        cx.stroke();

      if(mDown[0] > 466 && mDown[0] < 499){
        if(mDown[1] > 57 && mDown[1] < 89){
        zoom = false;
        iZoomFlg[zoomNo] = false;
      if(iselect == true){
        iZoomFlg[iSelNo] = true;}
  }}

  }
}

//落ちてるアイテム入手
function GetItem(xmin,ymin,xmax,ymax,itemNo){
  
  if(itemflg[itemNo] == null && eventPlay == false){
      if(mDown[0] > xmin && mDown[0] < xmax){
        if(mDown[1] > ymin && mDown[1] < ymax){
        itemflg[itemNo] = true;
        mouseP = -1;

        eventPlay = true;
        eventflg = itemNo;
        textPlay = true;
      mDown = [null,null];
        }
      }
      /*
      if(mouseP == -1){
      if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
        document.body.style.cursor = "pointer";
        mouseP = viewNo;
      }else{
        document.body.style.cursor = "default";
      }}
      else if(mouseP == viewNo){
      if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
        document.body.style.cursor = "pointer";
      }else{
        document.body.style.cursor = "default";
        mouseP = -1;
      }}*/
}
}

function ChangeImage(xmin,ymin,xmax,ymax,viewNo) {
      var bool = [false,false];
/*
      if(mouseP == -1){
      if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
        document.body.style.cursor = "pointer";
        mouseP = viewNo;
      }else{
        document.body.style.cursor = "default";
      }}
      else if(mouseP == viewNo){
      if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
        document.body.style.cursor = "pointer";
      }else{
        document.body.style.cursor = "default";
        mouseP = -1;
      }}
*/
      if(eventPlay == false){

      if(mDown[0] > xmin && mDown[0] < xmax){
        if(mDown[1] > ymin && mDown[1] < ymax){
        bool[0] = true;
        }
      }

      if(bool[0] == true){
      mDown = [null,null];
      view = viewNo;
      mouseP = -1;
      }
}
}

//イベント表示
function PrintEvent(){
  if(eventPlay == true){

      var text;
      //var img = new Image();
      //var itemimg = new Image();

      switch(eventflg){
      case 0: //鍵入手時の台詞
      audioPlayEvent("get",0);
      textWindow();
      text = "どこかの鍵だ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "鍵を手に入れた。";
      cx.fillText(text,10,396);
      break;

      case 1: //ペンチ入手時の台詞
      audioPlayEvent("get",1);
      textWindow();
      text = "ペンチだ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "ペンチを手に入れた。";
      cx.fillText(text,10,396);
      break;

      //とりあえず11番まではアイテム用台詞

      case 11: //出入り口ドア
      textWindow();
      if(newkey == false &&iSelFlg[0] == true ){
      audioPlayEvent("door",11);
      text = "この鍵じゃ合わないみたいだ……";
      cx.fillText(text,10,366);
      text = "持ち物をよくしらべてみよう。";
      cx.fillText(text,10,396);
      cx.fillStyle = 'rgb(255, 255, 0)';
      cx.font = "18px 'Century Gothic'";
      text = "アイテムを選択した状態で右上のAbout Itemボタンをクリック。";
      cx.fillText(text,10,426);
      cx.font = "20px 'Century Gothic'";
      }
      if(newkey == false &&iSelFlg[114] == true ){
      audioPlayEvent("door",11);
      text = "この鍵じゃ合わないみたいだ……";
      cx.fillText(text,10,366);
      }
      if(newkey == false &&itemflg[0] != true && iSelFlg[114] != true){
      audioPlayEvent("door",11);
      text = "鍵がかかっていて開かない……";
      cx.fillText(text,10,366);
      }
      if(newkey == false &&itemflg[0] == true && iSelFlg[0] != true || newkey == true && iSelFlg[0] != true){
      audioPlayEvent("door",11);
      text = "鍵がかかっていて開かない……";
      cx.fillText(text,10,366);
      text = "さっきの鍵を使ってみよう。";
      cx.fillText(text,10,396);
      cx.fillStyle = 'rgb(255, 255, 0)';
      cx.font = "18px 'Century Gothic'";
      text = "アイテムをクリックしてから調べる事でアイテムが使用できます。";
      cx.fillText(text,10,426);
      cx.font = "20px 'Century Gothic'";
      }

      if(newkey == true && iSelFlg[0] == true){
      if(TextStart == false){
      QuantityText = 6;
      TextStart = true;
      }
      if(QuantityText == 6){
      text = "さっきつくった鍵で出られるはず……";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 5){
      text = "！！";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 4){
      text = "これは…";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 3){
      view = 51;
      audioPlayEvent("don","11_3");
      text = "手動で鍵が開けられるドアノブ！！！";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 2){
      audioPlayEvent("open","11_2");
      cx.fillStyle = 'rgb(255, 255, 0)';
      text = "鍵を開けた。";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 1){
      audioPlayEvent("shakin","11_1");
      view = 6;
      text = "やったー";
      cx.fillText(text,10,366);
      ending = true;
      }
      }
      break;


      case 12: //かぎ拡大時の文章１
      textWindow();

      if(iSelFlg[1] == true){

      if(TextStart == false){
      QuantityText = 5;
      TextStart = true;
      }
      if(QuantityText == 5){
      text = "……！！そうだ！";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 4){
      text = "開けられる鍵が無いのなら";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 3){
      text = "自分で作ればいい！";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 2){
      cx.fillStyle = 'rgb(255, 255, 0)';
      text = "鍵をペンチで捻じ曲げて、形を変えた！";
      cx.fillText(text,10,366);
      newkey = true;
      }
      if(QuantityText == 1){
      audioPlayEvent("shakin","12");
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "鍵穴に合う良い鍵を手に入れた！";
      cx.fillText(text,10,366);
      }

      }else if(itemflg[1] == true){
      //ペンチ入手時台詞変更
      text = "そうだ、さっきのペンチを使えば･･････";
      }else{
      text = "どこの鍵だろう？";
      }
      cx.fillText(text,10,366);
      break;

      case 13: //かぎ拡大時の文章２
      textWindow();
      text = "カギって書いてある";
      cx.fillText(text,10,366);
      break;

      case 14: //ペンチ拡大時の文章１
      textWindow();
      if(itemflg[0] == true){
      text = "これをさっきのカギに使えば･･････";
      }else{
      text = "ペンチだ。";
      }
      cx.fillText(text,10,366);
      break;

      case 15: //ペンチ拡大時の文章2
      textWindow();
      text = "ペンチって書いてある";
      cx.fillText(text,10,366);
      break;

      case 16: //いい鍵拡大時の文章2
      textWindow();
      text = "この鍵で脱出だ！";
      cx.fillText(text,10,366);
      break;

      case 17: //test
      textWindow();
      text = "壁";
      cx.fillText(text,10,366);
      break;

      //ドラムロール1番目の上が押されたら
      case 3:  
      audioPlayEvent("button",3);
        doramnum ++;
        if( doramnum == 10){
        doramnum = 0;
        }
        eventflg = -1;
      break;

      //ドラム①の下を押されたとき
      case 4:
      audioPlayEvent("button",4);
        doramnum --;
        if( doramnum == -1){
        doramnum = 9;
        }
        eventflg = -1;
      break;
      
      //ドラムロール2番目の上が押されたら
      case 5:  
      audioPlayEvent("button",5);
        doramnum2 ++;
        if( doramnum2 == 10){
        doramnum2 = 0;
        }
        eventflg = -1;
      break;

      //ドラム②の下を押されたとき
      case 6:
      audioPlayEvent("button",6);
        doramnum2 --;
        if( doramnum2 == -1){
        doramnum2 = 9;
        }
        eventflg = -1;
      break;

      //ドラムロール3番目の上が押されたら
      case 7:  
      audioPlayEvent("button",7);
        doramnum3 ++;
        if( doramnum3 == 10){
        doramnum3 = 0;
        }
        eventflg = -1;
      break;

      //ドラム3の下を押されたとき
      case 8:
      audioPlayEvent("button",8);
        doramnum3 --;
        if( doramnum3 == -1){
        doramnum3 = 9;
        }
        eventflg = -1;
      break;

      //ドラムロール4番目の上が押されたら
      case 9:  
      audioPlayEvent("button",9);
        doramnum4 ++;
        if( doramnum4 == 10){
        doramnum4 = 0;
        }
        eventflg = -1;
      break;

      //ドラム4の下を押されたとき
      case 10:
      audioPlayEvent("button",10);
        doramnum4 --;
        if( doramnum4 == -1){
        doramnum4 = 9;
        }
        eventflg = -1;
      break;

      case 90: 
      audioPlayEvent("get",90);
      textWindow();
      text = "変な黄色い四角い物体だ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "四角い物体(黄色)を手に入れた。";
      cx.fillText(text,10,396);
      panel2get = true;
      break;

      case 91: 
      audioPlayEvent("get",91);
      textWindow();
      text = "変な青い四角い物体だ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "四角い物体(青)を手に入れた。";
      cx.fillText(text,10,396);
      panel3get = true;
      break;

      case 92:
      audioPlayEvent("get",92);
      textWindow();
      text = "変な赤い四角い物体だ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "四角い物体(赤)を手に入れた。";
      cx.fillText(text,10,396);
      panel1get = true;
      break;

      case 93:
      textWindow();
      text = "黄色のピースだな";
      cx.fillText(text,10,366);
      text = "どこかにはめるのかな？";
      cx.fillText(text,10,396);
      break;

      case 94:
      textWindow();
      text = "青色のピースだな";
      cx.fillText(text,10,366);
      text = "どこかにはめるのかな？";
      cx.fillText(text,10,396);
      break;

      case 98: 
      textWindow();
      text = "赤いピースだな";
      cx.fillText(text,10,366);
      text = "どこかにはめるのかな？";
      cx.fillText(text,10,396);
      break;
      
      //左の画像はめ込み
      case 95:
      audioPlayEvent("button",95);
      if(pass1 != 0){
      itemflg[pass1] = true;
      pass1 = 0;
      }else{
      if(iSelFlg[92] == true && pass2 != 92 && pass3 != 92){
        pass1 = 92;
      }else if(iSelFlg[90] == true && pass2 != 90 && pass3 != 90){
        pass1 = 90;
      }else if(iSelFlg[91] == true && pass2 != 91 && pass3 != 91){
        pass1 = 91;
        check1 = true;
      }
      }
      break;
      
      //中央の画像はめ込み
      case 96:
      audioPlayEvent("button",96);
      if(pass2 != 0){
      itemflg[pass2] = true;
      pass2 = 0;
      }else{
      if(iSelFlg[92] == true && pass1 != 92 && pass3 != 92){
        pass2 = 92;
      }else if(iSelFlg[90] == true && pass1 != 90 && pass3 != 90){
        pass2 = 90;
        check2 = true;
      }else if(iSelFlg[91] == true && pass1 != 91 && pass3 != 91){
        pass2 = 91;
      }}
      break;

      //右の画像はめ込み
      case 97:
      audioPlayEvent("button",97);
      if(pass3 != 0){
      itemflg[pass3] = true;
      pass3 = 0;
      }else{
      if(iSelFlg[92] == true && pass1 != 92 && pass2 != 92){
        pass3 = 92;
        check3 = true;
      }else if(iSelFlg[90] == true && pass1 != 90 && pass2 != 90){
        pass3 = 90;
      }else if(iSelFlg[91] == true && pass1 != 91 && pass2 != 91){
        pass3 = 91;
      }}
      break;

      case 111://スイッチ①
      audioPlayEvent("button",111);
      if(dentakucount < 4){
      dentakuText.unshift(1);
      dentakucount++;
      }
      break;
      
      case 222://スイッチ②
      audioPlayEvent("button",222);
      if(dentakucount < 4){
      dentakuText.unshift(2);
      dentakucount++;
      }
      break;

      case 333://スイッチ③
      audioPlayEvent("button",333);
      if(dentakucount < 4){
      dentakuText.unshift(3);
      dentakucount++;
      }
      break;

      case 444://スイッチ④
      audioPlayEvent("button",444);
      if(dentakucount < 4){
      dentakuText.unshift(4);
      dentakucount++;
      }
      break;

      case 555://スイッチ5
      audioPlayEvent("button",555);
      if(dentakucount < 4){
      dentakuText.unshift(5);
      dentakucount++;
      }
      break;

      case 666://スイッチ6
      audioPlayEvent("button",666);
      if(dentakucount < 4){
      dentakuText.unshift(6);
      dentakucount++;
      }
      break;

      case 777://スイッチ7
      audioPlayEvent("button",777);
      if(dentakucount < 4){
      dentakuText.unshift(7);
      dentakucount++;
      }
      break;

      case 888://スイッチ8
      audioPlayEvent("button",888);
      if(dentakucount < 4){
      dentakuText.unshift(8);
      dentakucount++;
      }
      break;

      case 999://スイッチ9
      audioPlayEvent("button",999);
      if(dentakucount < 4){
      dentakuText.unshift(9);
      dentakucount++;
      }
      break;

      case 1000:
      audioPlayEvent("button",1000);
      if(dentakucount < 4){
      dentakuText.unshift(0);
      dentakucount++;
      }
      break;

      case 112://消去
      audioPlayEvent("button",112);
      dentakuText = ["","","",""];
      dentakucount = 0;
      break;
      
      case 113://決定
      audioPlayEvent("button",113);
      clear = 1;
      break;

      case 110://決定2
      audioPlayEvent("button",110);
        textWindow();
        cx.fillStyle = 'rgb(0, 255, 0)';
        text = "間違っています";
        cx.fillText(text,10,366);
      break;

      case 114://鍵入手daiya
      audioPlayEvent("get",114);
      textWindow();
      text = "鍵だ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "ダイヤの鍵を手に入れた。";
      cx.fillText(text,10,396);
      itemflg[114] = true;
      clear = 100;
      break;

      case 115:
      textWindow();
      text = "鍵だな";
      cx.fillText(text,10,366);
      text = "何処のカギだろうか？";
      cx.fillText(text,10,396);
      break;

      case 116:
      textWindow();
      text = "ダイヤって書いてある";
      cx.fillText(text,10,366);
      break;

      case 117://ハサミを入手
      audioPlayEvent("get",117);
      textWindow();
      text = "カギだ。";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "カギを手に入れた。";
      cx.fillText(text,10,396);
      itemflg[0] = true;
      clear2 = 105;
      break;

      case 118://ドラム　2525となった時に発生する
      audioPlayEvent("button",118);
      clear1 = 2;
      break;
      
      case 119:
      audioPlayEvent("get",119);
      textWindow();
      text = "何処にでもあるハサミだ";
      cx.fillText(text,10,366);
      break;

      case 120:
      textWindow();
      text = "何かの計算式だな...";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "上の式と下の式をかけるのか?";
      cx.fillText(text,10,396);
      break;

      case 121:
      clear2 = 2;
      pass1 = null;
      pass2 = null;
      pass3 = null;
      break;
      
      case 122:
      textWindow();
      cx.fillStyle = 'rgb(255, 0, 0)';
      text = "信号機なのか？";
      cx.fillText(text,10,366);
      break;

      case 123:
      audioPlayEvent("door",123);
      textWindow();
      text = "鍵がかかっている";
      cx.fillText(text,10,366);
      cx.fillStyle = 'rgb(0, 255, 0)';
      text = "鍵穴がダイヤの形だ";
      cx.fillText(text,10,396);
      break;

      case 124:
      audioPlayEvent("open",124);
      textWindow();
      text = "鍵が開いた";
      cx.fillText(text,10,366);
      open = true;
      itemflg[114] = false;
      break;

      case 125:
      textWindow();
      text = "ゴミ箱の中には何もないみたいだ……";
      cx.fillText(text,10,366);
      break;
      
      case 126:
      textWindow();
      if(TextStart == false){
      QuantityText = 2;
      TextStart = true;
      }
      if(QuantityText == 2){
      text = "TOPPOの中にドライバーが……！";
      cx.fillText(text,10,366);
      }
      if(QuantityText == 1){
      audioPlayEvent("get",126);
      text = "これはこのままにしておこう";
      cx.fillText(text,10,366);
      }
      break;
      
      case 25: //testテキスト常時表示
      alwaysText = true;
      break;
      case 26: //testもとに戻す
      alwaysText = false;
      break;
      }
  }

  //テキストイベントでないとき
  if(textPlay == false){
      eventPlay = false;
  }
}

//テキストのないイベント管理
function EventSwitch(xmin,ymin,xmax,ymax,eventNo){
  
  if(eventPlay == false){
  if(mDown[0] > xmin && mDown[0] < xmax){
      if(mDown[1] > ymin && mDown[1] < ymax){

      eventPlay = true;
      eventflg = eventNo;
      mDown = [null,null];
        }
      }
  }
}

//テキストのあるイベント管理
function EventSwitchText(xmin,ymin,xmax,ymax,eventNo){
  
  if(eventPlay == false){
  if(mDown[0] > xmin && mDown[0] < xmax){
      if(mDown[1] > ymin && mDown[1] < ymax){

      eventPlay = true;
      eventflg = eventNo;
      mDown = [null,null];
      textPlay = true;
        }
      }
  }
}

function EventEnd(){

  if(eventPlay == true){
  if(mDown[0] > 0 && mDown[0] < 1000){
      if(mDown[1] > 0 && mDown[1] < 1000){

  QuantityText--;

  if(QuantityText == 0){
  eventPlay = false;
  eventflg = -1;
  QuantityText = 1;
  TextStart = false;
  textPlay = false;
  now_audio_num = "";
      if(ending == true){
      view = 61;
      }
  }
      mDown = [null,null];
        }
      }
  }
}

//行動管理
function ImageTable(){

      if(view == 0){
        //ChangeImage(250,286,300,309,1);
        ChangeImage(0,0,550,455,5);
      }

      //view 1 コンセントのある部屋
      if(view == 1){
        ChangeImage(4,241,25,271,4);
        ChangeImage(521,241,546,271,5);
        ChangeImage(210,344,260,360,11);
        GetItem(200,256,240,295,92);
      }else if(view == 11){
        ChangeImage(257,422,293,453,1);
        GetItem(400,130,440,170,90);
      if(iSelFlg[114] == true && open == false){
        EventSwitchText(145,250,380,395,124);
      }else if(iSelFlg[114] != true && open == false){
        EventSwitchText(145,250,380,395,123);
      }
      if(open == true){
        ChangeImage(145,250,380,395,12);
      }

      }else if(view == 12){
        ChangeImage(190,190,500,345,13);
        ChangeImage(257,422,293,453,11);
      }else if(view == 13){
        ChangeImage(257,422,293,453,12);
      if(clear2 < 2){
        EventSwitch(77,204,176,306,95);
        EventSwitch(222,204,325,306,96);
        EventSwitch(368,204,470,306,97);
      }
      if(check1 == true && check2 == true && check3 == true && clear2 < 2){
        EventSwitch(238,332,313,382,121);
        }
      
      if(clear2 == 100){
        EventSwitchText(22,74,464,370,117);
        }
      }

      //view 2 白い模様のある部屋
      if(view == 2){
        ChangeImage(4,241,25,271,5);
        ChangeImage(521,241,546,271,3);
        ChangeImage(50,265,65,282,21);
        //ChangeImage(190,195,202,202,22);

        //ペンチ入手
        GetItem(200,256,240,296,1);
      }

      //view 21 白い模様拡大
      if(view == 21){
        ChangeImage(257,422,293,453,2);//(左x,上y,右x,下y,表示画像)
      //パス①ボタン
        EventSwitch(35,255,80,285,111);
      //pass 2
        EventSwitch(90,255,135,285,222);
      //pass3
        EventSwitch(145,255,190,285,333);
      //pass4
        EventSwitch(35,300,80,330,444);
        EventSwitch(90,300,135,330,555);
        EventSwitch(145,300,190,330,666);
        EventSwitch(35,340,80,370,777);
        EventSwitch(90,340,135,370,888);
        EventSwitch(145,340,190,370,999);
        EventSwitch(90,380,135,415,1000);

      //消去ボタンが押されたとき
        EventSwitch(145,380,190,415,112);
      //決定ボタンが押された時
      if(clear == 0 && dentakuText[3] == 5 && dentakuText[2] == 0 && dentakuText[1] == 4 && dentakuText[0] == 0){
        EventSwitch(35,380,80,415,113);
      }else if(clear == 0 && dentakuText[3] != 5 && dentakuText[2] != 0 && dentakuText[1] != 4 && dentakuText[0] != 0){
        EventSwitchText(35,380,80,415,110);
      }
      if(clear > 40 && clear < 90){
        EventSwitchText(205,170,390,345,114);
      }
  }
      
      
      //　ドラム拡大
      if(view == 22){
        ChangeImage(257,422,293,453,5);
      //ドラム①の上が押された時の処理
        EventSwitch(50,90,150,180,3);
      //ドラム①の下が押された時の処理
        EventSwitch(50,324,150,410,4);
      
      //ドラムロール2番目の上が押された時の処理
        EventSwitch(175,90,275,180,5);
      //ドラム②の下が押された時の処理
        EventSwitch(175,324,275,410,6);

      //ドラム3の上が押された時の処理
        EventSwitch(300,90,400,180,7);
      //ドラム3の下が押された時の処理
        EventSwitch(300,324,400,410,8);

      //ドラム4の上が押された時の処理
        EventSwitch(425,90,525,180,9);
      //ドラム4の下が押された時の処理
        EventSwitch(425,324,525,410,10);

      if(clear1 == 0 && doramnum == 0 && doramnum2 == 0 && doramnum3 == 4 && doramnum4 == 7){
        EventSwitch(268,64,302,95,118);
      }else if(clear1 == 0){
        EventSwitchText(268,64,302,95,110);
      }
      if(clear1 == 100){
        EventSwitchText(90,133,451,370,120);
      }
  }
      
      //view 3 トッポ　窓の見える部屋
      if(view == 3){
        ChangeImage(4,241,25,271,2);
        ChangeImage(521,241,546,271,4);
        EventSwitchText(165,338,235,408,122);

      //view31 トッポの拡大
        ChangeImage(376,293,412,305,31);
      }
      if(view == 31){
        ChangeImage(131,217,379,303,32);
        ChangeImage(257,422,293,453,3);
      }
      if(view == 32){
        ChangeImage(144,201,459,348,33);
        ChangeImage(257,422,293,453,3);
      }
      if(view == 33){
        // ChangeImage(119,230,399,287,3);
        EventSwitchText(119,230,399,287,126);
        ChangeImage(257,422,293,453,3);
      }

      //view 4 黒板のある部屋
      if(view == 4){
        ChangeImage(4,241,25,271,3);
        ChangeImage(521,241,546,271,1);
        GetItem(80,230,120,270,91);
      //view4から黒板の拡大
        ChangeImage(347,219,386,252,41);
      }
      if(view == 41){
        ChangeImage(257,422,293,453,4);
      }

      

      //view5　出口のある部屋
      if(view == 5){
        ChangeImage(4,241,25,271,1);
        ChangeImage(521,241,546,271,2);
        ChangeImage(150,210,185,235,22)

        ChangeImage(111,369,202,436,52);	

        //ドアイベント
        EventSwitchText(271,88,402,452,11);
        //壁イベント
        EventSwitchText(36,54,135,218,17);
        
        
/*
        if(alwaysText == false){
        EventSwitch(140,216,185,237,25);
        }else{
        EventSwitch(140,216,185,237,26);
        }*/
      }

      //ゴミ箱
      if(view == 52){
        ChangeImage(257,422,293,453,5);
        EventSwitchText(124,206,360,335,125);
      }

      EventEnd();

}

function ItemTable(){

      //鍵
      SelectItem(14,6,54,46,0);
      //ペンチ
      SelectItem(64,6,104,46,1);
      //pass yellow
      SelectItem(164,6,204,46,90);
      //pass blue
      SelectItem(214,6,254,46,91);
      //pass red
      SelectItem(114,6,154,46,92);
      //keydaia
      SelectItem(264,6,304,46,114);
      //ハサミ
      //keydaia
      SelectItem(314,6,354,46,117);
      //アイテム拡大表示
      ZoomItem(510,0,550,55);
}

function audioPlayEvent(title,event_num){
    if(now_audio_num != event_num || now_audio_num == ""){
      now_audio_num = event_num;
      audios[title].play();
    }
}
//////////////////////////////////////////////

};
