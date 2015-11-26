/* 뉴스 홈페이지 안내광고 정보 Tab 변�&#65533; */
function changeTab_classified( tabno ) {	
			  
	  var dTab1 = document.getElementById("d_class_tab1");
	  
	  if (dTab1 == null) return;
	  
	  var dTab2 = document.getElementById("d_class_tab2");
	  var dTab3 = document.getElementById("d_class_tab3");
	  var dTab4 = document.getElementById("d_class_tab4");
	  
	  var dTitle1 = document.getElementById("d_class_title1");
	  var dTitle2 = document.getElementById("d_class_title2");
	  var dTitle3 = document.getElementById("d_class_title3");
	  var dTitle4 = document.getElementById("d_class_title4");
	
		if( tabno == 1 ) {
			dTab1.style.display = "";
			dTab2.style.display = "none";
			dTab3.style.display = "none";
			dTab4.style.display = "none";
			
			dTitle1.style.backgroundColor="#ffffff"
			dTitle2.style.backgroundColor="#dfecd2"
			dTitle3.style.backgroundColor="#dfecd2"
			dTitle4.style.backgroundColor="#dfecd2"
		}
		else if( tabno == 2 ) {
			dTab1.style.display = "none";
			dTab2.style.display = "";
			dTab3.style.display = "none";
			dTab4.style.display = "none";
			
			dTitle1.style.backgroundColor="#dfecd2"
			dTitle2.style.backgroundColor="#ffffff"
			dTitle3.style.backgroundColor="#dfecd2"
			dTitle4.style.backgroundColor="#dfecd2"
		}
		else if( tabno == 3 ) {
			dTab1.style.display = "none";
			dTab2.style.display = "none";
			dTab3.style.display = "";
			dTab4.style.display = "none";
			
			dTitle1.style.backgroundColor="#dfecd2"
			dTitle2.style.backgroundColor="#dfecd2"
			dTitle3.style.backgroundColor="#ffffff"
			dTitle4.style.backgroundColor="#dfecd2"
		}
		else {
			dTab1.style.display = "none";
			dTab2.style.display = "none";
			dTab3.style.display = "none";
			dTab4.style.display = "";
			
			dTitle1.style.backgroundColor="#dfecd2"
			dTitle2.style.backgroundColor="#dfecd2"
			dTitle3.style.backgroundColor="#dfecd2"
			dTitle4.style.backgroundColor="#ffffff"
		}
		
}


/* 뉴스 홈페이지 사설/칼럼 정보 Tab 변�&#65533; */
function changeTab_editorial( tabno ) {	
			
	  var dTab1 = document.getElementById("d_editorial_tab1");
	  
	  if (dTab1 == null) return;
	  
	  var dTab2 = document.getElementById("d_editorial_tab2");
	  
	  var dTitle1 = document.getElementById("d_editorial_title1");
	  var dTitle2 = document.getElementById("d_editorial_title2");
	
		if( tabno == 1 ) {
			dTab1.style.display = "";
			dTab2.style.display = "none";
			
			dTitle1.style.backgroundColor="#ffffff"
			dTitle2.style.backgroundColor="#dfecd2"
		}
		else {
			dTab1.style.display = "none";
			dTab2.style.display = "";
			
			dTitle1.style.backgroundColor="#dfecd2"
			dTitle2.style.backgroundColor="#ffffff"
		}
}


function rotate_lottery()
{               
    document.images['event_blendObj'].src=eval("ev_img"+n+".src");
    document.images['event2_blendObj'].src=eval("ev2_img"+n+".src");
    //document.images['event3_blendObj'].src=eval("ev3_img"+n+".src");
        
    (n==maxLoops)?n=1:n++;
    setTimeout("b_rotate()",interval);
}


function checkYellowpage() {

	var form = document.searchYellowpage;

	String.prototype.trim = function() {return this.replace(/(^\s*)|(\s*$)|($\s*)/g, "");} 

	var keyword = form.yp_keyword.value;
	var zipcode = form.yp_zipcode.value;
	var branch = "";
		
	keyword = keyword.trim();
	zipcode = zipcode.trim();
	
	for(i=0;i<form.yp_radio.length;i++){
		if (form.yp_radio[i].checked){
			branch = form.yp_radio[i].value;
		}
	}
	
	if( (keyword.length == 0) && (zipcode.length == 0) ) {
		alert("Keyword�&#65533; 입력하세�&#65533;");
		return false;
	}

	form.action="http://yp.koreatimes.com/yp/searchResult.php?curLoc="+branch+"&keyword="+keyword+"&zipcode="+zipcode;
	form.submit();
}



function checkSearchArticle() {
	
	var specialChars='~`!@#$%%^&*-=+\|[{]};:\',<.>/?\"';
	var form = document.searchArticle;
			
	var str, i;
  
	str = form.key.value;
	
	var sURL = "";
	var keyword ="";
	var temp = "";
	var keyword_array = "'***'";
	var keyword_array_temp = "";
	var keyword_cnt = 0;
	
	
	if ( str.length < 2 ) {
		//alert("검색어�&#65533; 2글�&#65533; 이상 입력�&#65533; 주세�&#65533;!");
		alert("검색어를 2글자 이상 입력해 주세요!");
		return false;
	}
		
		
	for ( i=0; i<str.length; i++ ) {
		temp = str.charAt(i);
		
		if ( temp == " " ) {
			//alert("한단�&#65533; 검색만 가능합니다.");
			//return false;
			
			if (keyword_array_temp.length > 0){
				keyword_array = keyword_array + ",'" + keyword_array_temp + "'" ;
				keyword_cnt++;
			}
			keyword_array_temp = "";
						
		}


		
		/*if ( ( temp >= '가' && temp <= '�&#65533;' ) || ( temp >= 'A' && temp <= 'z' ) || ( temp >= '0' && temp <= '9' ) || temp == ' ') {		
			keyword = keyword + temp;
			if (temp != ' ' && temp != '') keyword_array_temp = keyword_array_temp+ temp;
		}
		else {
			alert("특수문자 검색은 불가�&#65533; 합니�&#65533;.");
			return false;
		}*/
		
		keyword = keyword + temp;
		if (temp != ' ' && temp != '') keyword_array_temp = keyword_array_temp + temp;
			
	}								

	if (keyword_array_temp.length > 0){
				keyword_array = keyword_array + ",'" + keyword_array_temp + "'" ;
				keyword_cnt++;
	}	
	
		
	form.key.value = keyword;
	form.key_array.value = keyword_array;
	form.key_cnt.value = keyword_cnt;
	
	//alert(form.key_array1.value);
	//alert(form.key_array2.value)
	
	for(j=0;j<form.search_radio.length;j++){
		if (form.search_radio[j].checked){		
			if (form.search_radio[j].value == "LOCAL")
				//sURL = "/search/?key="+str;
				sURL = "/search/";
			else
				sURL = "/search/searchGoogleResult.php?key="+str;
		}
	}
	
	//alert(str);
	form.action=sURL;
	form.submit();
}

		  
window.onload = function () {

	changeTab_classified(1);
	changeTab_editorial(1);

}
