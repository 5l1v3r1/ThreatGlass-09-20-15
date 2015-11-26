function scaleFont(val)
{
   var content, lineHeight;
   content = document.getElementById("content");
   if (val > 0){
       if (fontSize <= 18) {
           fontSize = fontSize + val;
           lineHeight = fontSize+Math.round(1.1*fontSize);
           content.style.fontSize = fontSize + "px";
       }

   } else {
       if (fontSize > 13) {
           fontSize = fontSize + val;
           lineHeight = fontSize+Math.round(1.1*fontSize);
           content.style.fontSize = fontSize + "px";
       }
   }
   var mydate = new Date;
   mydate.setDate(mydate.getDate()+1000);
	$.cookie("cur_font_size",fontSize,{ expires: 7 });
   //setCookie("cur_font_size", fontSize, mydate);
}

var fontSize = parseInt(getFontCookie());

function getFontCookie() {
   var cookie = $.cookie("cur_font_size");
   if ( cookie == null ) return 13;
   if ( cookie.length ) return cookie;
   else return 13;
}


function Point(iX, iY){
	this.x = iX;
	this.y = iY;
}

function fGetXY(aTag){
  var oTmp = aTag;
  var pt = new Point(0,0);
  do {
  	pt.x += oTmp.offsetLeft;
  	pt.y += oTmp.offsetTop;
  	oTmp = oTmp.offsetParent;
  } while(oTmp.tagName!="BODY");
  return pt;
}
