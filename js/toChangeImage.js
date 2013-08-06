// Copyright 2013 stleon <leonst998@gmail.com>
$(document).ready(function(){
	function changeImage(obj){
		var img = obj.find("img");
		var bg = /^url\((['"]?)(.*)\1\)$/.exec(obj.css('background-image'));
		obj.css('background-image', 'url('+img.attr('src')+')');
		img.attr('src',bg ? bg[2] : "");
	}
	$(".img_change").mouseenter(
		function(){
			changeImage($(this));
		}
	);
	$(".img_change").mouseleave(
		function(){
			changeImage($(this));
		}
	);
});