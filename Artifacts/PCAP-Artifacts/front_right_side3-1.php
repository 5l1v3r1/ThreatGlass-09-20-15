<script type="text/javascript" src="http://img.koreatimes.com/js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="http://img.koreatimes.com/js/jquery.cookie.js"></script>
<script type="text/javascript" src="http://img.koreatimes.com/js/iepatch2.js"></script>
<body topmargin=0 leftmargin=0>
<script language="javascript">
function rotateBannerId(position){
    
    if      ($.cookie(position) == "0")  $.cookie(position,"1",{ expires: 7 });
    else if ($.cookie(position) == "1")	 $.cookie(position,"0",{ expires: 7 });
    else 	$.cookie(position,"0",{ expires: 7 });
}

function rotateBannerId2(position){
    if      ($.cookie(position) == "0")  $.cookie(position,"1",{ expires: 7 });
    else if ($.cookie(position) == "1")  $.cookie(position,"0",{ expires: 7 });
    //else if ($.cookie(position) == "2")  $.cookie(position,"0",{ expires: 7 });
    //else if ($.cookie(position) == "3")  $.cookie(position,"0",{ expires: 7 });
    else    $.cookie(position,"0",{ expires: 7 });
}

function rotateBannerId3(position){

	if (parseInt($.cookie(position)) <=50 )
		$.cookie(position, parseInt($.cookie(position)) + 1,{ expires: 7 });
	else 
		$.cookie(position, 1,{ expires: 7 });
}
</script>

<script language="javascript">
	if ($.cookie("front_right_side") == "0")
		$.cookie("front_right_side", "1", {
			expires : 7
		});
	else if ($.cookie("front_right_side") == "1")
		$.cookie("front_right_side", "0", {
			expires : 7
		});
	else
		$.cookie("front_right_side", "0", {
			expires : 7
		});
</script>

<STYLE type = "text/css">
	table {
		font-size: 9pt;
	}
	img {
		border: 0;
	}
</STYLE>

<a href='http://www.weeklyh.com' target=_blank><img src='http://img.koreatimes.com/banner/files/enewspaper/hmagazine.jpg' /></a>
