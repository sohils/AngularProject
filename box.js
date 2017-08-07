document.getElementById("draw").addEventListener("click", myFunction);

function add(a, b) {
    return a + b;
}

function myFunction() {
  var b1 = document.getElementById("box1Text").value;
  var b2 = document.getElementById("box2Text").value;
  var b3 = document.getElementById("box3Text").value;
  var b4 = document.getElementById("box4Text").value;
  var arr =[parseInt(b1), parseInt(b2), parseInt(b3), parseInt(b4)];
  arr.sort(function(a, b){return b - a});
  var leftWidth =  ((arr[0] + arr[1]))/(arr.reduce((a, b) => a + b, 0));
  var totalWidth = parseFloat(window.getComputedStyle(document.getElementById("main")).width);
  leftWidth = Math.floor(leftWidth * totalWidth);
  var rightWidth = totalWidth-leftWidth;
  document.getElementById("box1").style.width=leftWidth;
  document.getElementById("box2").style.width=leftWidth;
  document.getElementById("box3").style.width=rightWidth;
  document.getElementById("box4").style.width=rightWidth;

  var leftTopHeight=Math.floor((arr[0])*totalWidth/(arr[0]+arr[1]));
  var leftBotHeight=totalWidth-leftTopHeight;
  document.getElementById("box1").style.height=leftTopHeight;
  document.getElementById("box2").style.height=leftBotHeight;

  var rightTopHeight=Math.floor((arr[2])*totalWidth/(arr[3]+arr[2]));
  var rightBotHeight=totalWidth-rightTopHeight;
  document.getElementById("box3").style.height=rightTopHeight;
  document.getElementById("box4").style.height=rightBotHeight;
  document.getElementById("test").innerHTML = arr;
}
