var _duration = 500;
//$(document).ready(function (){
$(window).load(function(){
	jobsWrap();
	//jobsDesk();
});

function jobsDeskSlide(param) {
	switch(param) {
		case('prev'):
		
			_jobsDeskState--;
			if(_jobsDeskState <= 0) _jobsDeskState = 0;
			_jobsDeskUl.clearQueue().animate({
				top: '-'+(_jobsDeskHeight * _jobsDeskState)
			},0);
			break;
		case('next'):
		
			_jobsDeskState++;
			if (_jobsDeskState > _jobsDeskTotal -2) {
				_jobsDeskUl.clearQueue().animate({
					top: '-'+(_jobsDeskHeight * _jobsDeskState)
				},0, function() {
					_jobsDeskState = 0;
					_jobsDeskUl.css('top',_jobsDeskHeight *3+'px').clearQueue().animate({
						top: _jobsDeskState
					},0);
				});
			} else {
				_jobsDeskUl.clearQueue().animate({
					top: '-'+(_jobsDeskHeight * _jobsDeskState)
				},0);
			}
			break;
		default:
	}
}



var _jobsListAnchor = null;
var _jobsListArea = null;

function jobsWrap(no) {
	if(!document.getElementById('jobsWrap')) return false;
	_jobsListAnchor = $('#jobsWrap > .leftArea > .jobList li > a');
	_jobsListArea = $('#jobsWrap > .rightArea > div');
	jobsSet(no);
	
	_jobsListAnchor.click(function() {
		var _index = _jobsListAnchor.index(this);
		jobsSet(_index);
		return false;
	});
}
function jobsSet(no) {
	if(!no) no = 0;
	_jobsListAnchor.each(function(index, value) {
		if(index == no)
			$(this).attr('class','on');
		else
			$(this).attr('class','off');
	});
	
	_jobsListArea.each(function(index, value) {
		if(index == no)
			$(this).css('display','block');
		else
			$(this).css('display','none');
	});
}
var _expressBanner = new Array();
var _expressUl = null;
var _expressLi = null;
var _expressUp = null;
var _expressDown = null;
var _expressStart = null;
var _expressTimer = null;
var _expressCache = new Array();
var _expressTemp = null;
function expressBanner() {
	if(!document.getElementById('expressBanner')) return false;
	_express = $('#expressBanner');
	_expressUl = $('#expressBanner > .express');
	_expressLi = $('#expressBanner > .express > li');
	_expressUp = $('#expressBanner > .btn > .up, #expressBanner > .express > .n2 > .txt');
	_expressDown = $('#expressBanner > .btn > .down, #expressBanner > .express > .n4 > .txt');
	_expressLi.each(function(index, value) {
		_expressBanner[index] = [
						$(this).children('.img').attr('href'),
						$(this).children('.img').children('img').attr('src'),
						$(this).children('.img').children('img').attr('alt'),
						$(this).children('.txt').text()
					];
		_expressTemp = null;
		_expressTemp = document.createElement('img');
		_expressTemp.src = $(this).children('.img').children('img').attr('src');
		_expressCache.push(_expressTemp);
	});
}
