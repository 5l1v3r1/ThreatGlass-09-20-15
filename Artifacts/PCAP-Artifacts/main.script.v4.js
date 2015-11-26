<!--
var is_quick_search_open = false;
var menu_timerId = null;



function show_hide_service(objcls) {
	$(objcls).toggle();
}

function fn_go_search(tForm) {
	if(tForm.query.value.substr(0,2) != '%u')
		tForm.query.value=escape(tForm.q.value);
	return true;
}

function fn_main_move_button(bid,mtd) {
	var l_content = $("div."+bid).find(">span");
	var l_content_count = l_content.size();
	var l_sel_idx = 0;
	var l_mov_idx = 0;
	
	if(l_content_count > 1) {
		for(var i=0;i<l_content_count;i++) {
 			if(l_content.eq(i).css("display")!="none") { 
 				l_sel_idx = i;
 				break;
 			}
		}
		switch(mtd) {
			case "prev" :	l_mov_idx = l_sel_idx - 1;
							if(l_mov_idx < 0) l_mov_idx = l_content_count - 1;
							break;
			case "next" :	l_mov_idx = l_sel_idx + 1;
							if(l_mov_idx >= l_content_count) l_mov_idx = 0;
							break;
		}
		l_content.eq(l_sel_idx).hide();
		l_content.eq(l_mov_idx).show();
	}
}

