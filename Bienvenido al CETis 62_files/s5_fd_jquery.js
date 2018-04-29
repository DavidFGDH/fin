var s5_fd_current_visible_div;

var s5_fd_top_inner_content;

(function($){


var s5_fd_visible_div = $("#s5_fd_div1");

window.s5_fd_toggle=function(newSrc){

	$("#s5_fd_div2").stop();
	$("#s5_fd_div1").stop();

	if(s5_fd_visible_div.attr('id') == $("#s5_fd_div1").attr('id')){

		s5_fd_current_visible_div = "s5_fd_div2";

		$("#s5_fd_image2")[0].src = newSrc;
		$('#s5_fd_div1').animate({opacity:0},{duration:600,easing:'linear',queue:false});
		$('#s5_fd_div2').animate({opacity:1},{duration:600,easing:'linear',queue:false});
		
		document.getElementById("s5_fd_div1").style.zIndex = "1";

		document.getElementById("s5_fd_div2").style.zIndex = "2";

		s5_fd_visible_div = $("#s5_fd_div2");

	}else{
		s5_fd_current_visible_div = "s5_fd_div1";

		$("#s5_fd_image1")[0].src = newSrc;

				$('#s5_fd_div1').animate({opacity:1},{'duration':600,easing:'linear',queue:false});
		$('#s5_fd_div2').animate({opacity:0},{duration:600,easing:'linear',queue:false});
		
		document.getElementById("s5_fd_div1").style.zIndex = "2";

		document.getElementById("s5_fd_div2").style.zIndex = "1";

		s5_fd_visible_div = $("#s5_fd_div1");

	}

}

})(jQuery);

//If the top images are not cached show the pre-loader div. The 700 millisecond delay is there give the page enough time to load the cached images, if they are not loaded after 700 milliseconds then the images are most likely not cached. s5_fd_image_cached is only set to yes when all top images have been loaded and the fade in process has started, if this process already begun the pre-loader will never show.
function s5_fd_image_cached_check() {
	if (s5_fd_image_cached == "no") {
	document.getElementById("s5_fd_loader").style.display = "block";
	}
}
window.setInterval("s5_fd_image_cached_check()",700);
	
	
var s5_fd_current = 0;

var s5_fd_hov = 0;

function s5_fd_hover() {
	s5_fd_hov = 1;
}

function s5_fd_hover_out() {
	s5_fd_hov = 0;
}


function s5_fd_revert_class_names() {

if (document.getElementById("s5_fd_1")) {
	document.getElementById("s5_fd_1").className = "";
}

if (document.getElementById("s5_fd_2")) {
	document.getElementById("s5_fd_2").className = "";
}

if (document.getElementById("s5_fd_3")) {
	document.getElementById("s5_fd_3").className = "";
}

if (document.getElementById("s5_fd_4")) {
	document.getElementById("s5_fd_4").className = "";
}

if (document.getElementById("s5_fd_5")) {
	document.getElementById("s5_fd_5").className = "";
}

if (document.getElementById("s5_fd_6")) {
	document.getElementById("s5_fd_6").className = "";
}

if (document.getElementById("s5_fd_7")) {
	document.getElementById("s5_fd_7").className = "";
}

if (document.getElementById("s5_fd_8")) {
	document.getElementById("s5_fd_8").className = "";
}

if (document.getElementById("s5_fd_9")) {
	document.getElementById("s5_fd_9").className = "";
}

}

function s5_fd1() {

	if (s5_fd_current != 1) {

		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top1_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top1_content;

		s5_fd_current = 1;

		s5_fd_toggle(s5_top1_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_1").className = "s5_fd_1_active s5_fd_active";
		
		if (s5_top1_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd1_click_top;
		}
		if (s5_top1_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box1_hyperlink != "") {
			document.getElementById("s5_fd_1").style.cursor = "pointer";
			document.getElementById("s5_fd_1").onclick = s5_fd1_click_box;
		}
		
	}

}

function s5_fd1_click_top() {
	if (s5_top1_target == "same") {
		window.location.href=s5_top1_hyperlink;
		}
	else {
		window.open(s5_top1_hyperlink);
	}
}

function s5_fd1_click_box() {
	if (s5_box1_target == "same") {
		window.location.href=s5_box1_hyperlink;
		}
	else {
		window.open(s5_box1_hyperlink);
	}
}


function s5_fd2() {

	if (s5_fd_current != 2) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top2_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top2_content;

		s5_fd_current = 2;

		s5_fd_toggle(s5_top2_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_2").className = "s5_fd_2_active s5_fd_active";
		
		if (s5_top2_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd2_click_top;
		}
		if (s5_top2_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box2_hyperlink != "") {
			document.getElementById("s5_fd_2").style.cursor = "pointer";
			document.getElementById("s5_fd_2").onclick = s5_fd2_click_box;
		}
		
	}

}

function s5_fd2_click_top() {
	if (s5_top2_target == "same") {
		window.location.href=s5_top2_hyperlink;
		}
	else {
		window.open(s5_top2_hyperlink);
	}
}

function s5_fd2_click_box() {
	if (s5_box2_target == "same") {
		window.location.href=s5_box2_hyperlink;
		}
	else {
		window.open(s5_box2_hyperlink);
	}
}


function s5_fd3() {

	if (s5_fd_current != 3) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top3_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top3_content;

		s5_fd_current = 3;

		s5_fd_toggle(s5_top3_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_3").className = "s5_fd_3_active s5_fd_active";
		
		if (s5_top3_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd3_click_top;
		}
		if (s5_top3_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box3_hyperlink != "") {
			document.getElementById("s5_fd_3").style.cursor = "pointer";
			document.getElementById("s5_fd_3").onclick = s5_fd3_click_box;
		}
		
	}

}

function s5_fd3_click_top() {
	if (s5_top3_target == "same") {
		window.location.href=s5_top3_hyperlink;
		}
	else {
		window.open(s5_top3_hyperlink);
	}
}

function s5_fd3_click_box() {
	if (s5_box3_target == "same") {
		window.location.href=s5_box3_hyperlink;
		}
	else {
		window.open(s5_box3_hyperlink);
	}
}


function s5_fd4() {

	if (s5_fd_current != 4) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top4_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top4_content;

		s5_fd_current = 4;

		s5_fd_toggle(s5_top4_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_4").className = "s5_fd_4_active s5_fd_active";
		
		if (s5_top4_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd4_click_top;
		}
		if (s5_top4_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box4_hyperlink != "") {
			document.getElementById("s5_fd_4").style.cursor = "pointer";
			document.getElementById("s5_fd_4").onclick = s5_fd4_click_box;
		}
		
	}

}

function s5_fd4_click_top() {
	if (s5_top4_target == "same") {
		window.location.href=s5_top4_hyperlink;
		}
	else {
		window.open(s5_top4_hyperlink);
	}
}

function s5_fd4_click_box() {
	if (s5_box4_target == "same") {
		window.location.href=s5_box4_hyperlink;
		}
	else {
		window.open(s5_box4_hyperlink);
	}
}


function s5_fd5() {

	if (s5_fd_current != 5) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top5_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top5_content;

		s5_fd_current = 5;

		s5_fd_toggle(s5_top5_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_5").className = "s5_fd_5_active s5_fd_active";
		
		if (s5_top5_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd5_click_top;
		}
		if (s5_top5_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box5_hyperlink != "") {
			document.getElementById("s5_fd_5").style.cursor = "pointer";
			document.getElementById("s5_fd_5").onclick = s5_fd5_click_box;
		}
		
	}

}

function s5_fd5_click_top() {
	if (s5_top5_target == "same") {
		window.location.href=s5_top5_hyperlink;
		}
	else {
		window.open(s5_top5_hyperlink);
	}
}

function s5_fd5_click_box() {
	if (s5_box5_target == "same") {
		window.location.href=s5_box5_hyperlink;
		}
	else {
		window.open(s5_box5_hyperlink);
	}
}


function s5_fd6() {

	if (s5_fd_current != 6) {

		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top6_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top6_content;
	
		s5_fd_current = 6;

		s5_fd_toggle(s5_top6_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_6").className = "s5_fd_6_active s5_fd_active";
		
		if (s5_top6_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd6_click_top;
		}
		if (s5_top6_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box6_hyperlink != "") {
			document.getElementById("s5_fd_6").style.cursor = "pointer";
			document.getElementById("s5_fd_6").onclick = s5_fd6_click_box;
		}
		
	}

}

function s5_fd6_click_top() {
	if (s5_top6_target == "same") {
		window.location.href=s5_top6_hyperlink;
		}
	else {
		window.open(s5_top6_hyperlink);
	}
}

function s5_fd6_click_box() {
	if (s5_box6_target == "same") {
		window.location.href=s5_box6_hyperlink;
		}
	else {
		window.open(s5_box6_hyperlink);
	}
}


function s5_fd7() {

	if (s5_fd_current != 7) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top7_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top7_content;

		s5_fd_current = 7;

		s5_fd_toggle(s5_top7_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_7").className = "s5_fd_7_active s5_fd_active";
		
		if (s5_top7_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd7_click_top;
		}
		if (s5_top7_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box7_hyperlink != "") {
			document.getElementById("s5_fd_7").style.cursor = "pointer";
			document.getElementById("s5_fd_7").onclick = s5_fd7_click_box;
		}
		
	}

}

function s5_fd7_click_top() {
	if (s5_top7_target == "same") {
		window.location.href=s5_top7_hyperlink;
		}
	else {
		window.open(s5_top7_hyperlink);
	}
}

function s5_fd7_click_box() {
	if (s5_box7_target == "same") {
		window.location.href=s5_box7_hyperlink;
		}
	else {
		window.open(s5_box7_hyperlink);
	}
}


function s5_fd8() {

	if (s5_fd_current != 8) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top8_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top8_content;

		s5_fd_current = 8;

		s5_fd_toggle(s5_top8_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_8").className = "s5_fd_8_active s5_fd_active";
		
		if (s5_top8_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd8_click_top;
		}
		if (s5_top8_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box8_hyperlink != "") {
			document.getElementById("s5_fd_8").style.cursor = "pointer";
			document.getElementById("s5_fd_8").onclick = s5_fd8_click_box;
		}
		
	}

}

function s5_fd8_click_top() {
	if (s5_top8_target == "same") {
		window.location.href=s5_top8_hyperlink;
		}
	else {
		window.open(s5_top8_hyperlink);
	}
}

function s5_fd8_click_box() {
	if (s5_box8_target == "same") {
		window.location.href=s5_box8_hyperlink;
		}
	else {
		window.open(s5_box8_hyperlink);
	}
}


function s5_fd9() {

	if (s5_fd_current != 9) {
	
		document.getElementById("s5_fd_div1_inner_relative").innerHTML = s5_top9_content;
		document.getElementById("s5_fd_div2_inner_relative").innerHTML = s5_top9_content;

		s5_fd_current = 9;

		s5_fd_toggle(s5_top9_pic);
		
		s5_fd_revert_class_names();
		
		document.getElementById("s5_fd_9").className = "s5_fd_9_active s5_fd_active";
		
		if (s5_top9_hyperlink != "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "pointer";
			document.getElementById(s5_fd_current_visible_div).onclick = s5_fd9_click_top;
		}
		if (s5_top9_hyperlink == "") {
			document.getElementById(s5_fd_current_visible_div).style.cursor = "default";
			document.getElementById(s5_fd_current_visible_div).onclick = "";
		}
		if (s5_box9_hyperlink != "") {
			document.getElementById("s5_fd_9").style.cursor = "pointer";
			document.getElementById("s5_fd_9").onclick = s5_fd9_click_box;
		}
		
	}

}

function s5_fd9_click_top() {
	if (s5_top9_target == "same") {
		window.location.href=s5_top9_hyperlink;
		}
	else {
		window.open(s5_top9_hyperlink);
	}
}

function s5_fd9_click_box() {
	if (s5_box9_target == "same") {
		window.location.href=s5_box9_hyperlink;
		}
	else {
		window.open(s5_box9_hyperlink);
	}
}

function s5_fd_load_highlight() {
	s5_fd_image_cached = "yes";
	if (s5_fd_highlight == "1") {
		s5_fd1();
	}
	else if (s5_fd_highlight == "2") {
		s5_fd2();
	}
	else if (s5_fd_highlight == "3") {
		s5_fd3();
	}
	else if (s5_fd_highlight == "4") {
		s5_fd4();
	}
	else if (s5_fd_highlight == "5") {
		s5_fd5();
	}
	else if (s5_fd_highlight == "6") {
		s5_fd6();
	}
	else if (s5_fd_highlight == "7") {
		s5_fd7();
	}
	else if (s5_fd_highlight == "8") {
		s5_fd8();
	}
	else if (s5_fd_highlight == "9") {
		s5_fd9();
	}
	document.getElementById("s5_fd_outer").style.display = "block";
	document.getElementById("s5_fd_loader").style.display = "none";
	(function($){$('#s5_fd_outer').animate({opacity:1},{duration:600,easing:'linear',queue:false});})(jQuery);
	s5_fd_loaded = "yes";
}


function s5_fd_next() {
	
	if (s5_fd_hov == "0") {
		
		if (s5_fd_current == "1") {
			if (document.getElementById("s5_fd_2")) {
				s5_fd2();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "2") {
			if (document.getElementById("s5_fd_3")) {
				s5_fd3();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "3") {
			if (document.getElementById("s5_fd_4")) {
				s5_fd4();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "4") {
			if (document.getElementById("s5_fd_5")) {
				s5_fd5();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "5") {
			if (document.getElementById("s5_fd_6")) {
				s5_fd6();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "6") {
			if (document.getElementById("s5_fd_7")) {
				s5_fd7();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "7") {
			if (document.getElementById("s5_fd_8")) {
				s5_fd8();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "8") {
			if (document.getElementById("s5_fd_9")) {
				s5_fd9();
			}
			else {
				s5_fd1();
			}
			return false;
		}
		if (s5_fd_current == "9") {
			if (document.getElementById("s5_fd_1")) {
				s5_fd1();
			}
			else {
				s5_fd1();
			}
			return false;
		}
	
	}
}


if (s5_fd_rotate == "yes") {
	var myInterval_s5_fd_int = window.setInterval("s5_fd_next()",(s5_fd_speed*1000));
}


function s5_fd_set_height() {
	document.getElementById("s5_fd_div1").style.height = document.getElementById("s5_fd_image_size").offsetHeight + "px";
	document.getElementById("s5_fd_div1").style.width = document.getElementById("s5_fd_image_size").offsetWidth + "px";
	document.getElementById("s5_fd_div2").style.height = document.getElementById("s5_fd_image_size").offsetHeight + "px";
	document.getElementById("s5_fd_div2").style.width = document.getElementById("s5_fd_image_size").offsetWidth + "px";
	document.getElementById("s5_fd_div1_inner_relative").style.minHeight = document.getElementById("s5_fd_image_size").offsetHeight + "px";
	document.getElementById("s5_fd_div2_inner_relative").style.minHeight = document.getElementById("s5_fd_image_size").offsetHeight + "px";
	if (document.getElementById("s5_fd_image_size").offsetHeight == 0) {
	s5_fd_set_height();
	}
	var s5_fd_tallest_box = 0;
	if (document.getElementById("s5_fd_1")) {
		document.getElementById("s5_fd_1").style.minHeight = "1px";
		if (document.getElementById("s5_fd_1").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_1").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_2")) {
		document.getElementById("s5_fd_2").style.minHeight = "1px";
		if (document.getElementById("s5_fd_2").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_2").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_3")) {
		document.getElementById("s5_fd_3").style.minHeight = "1px";
		if (document.getElementById("s5_fd_3").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_3").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_4")) {
		document.getElementById("s5_fd_4").style.minHeight = "1px";
		if (document.getElementById("s5_fd_4").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_4").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_5")) {
		document.getElementById("s5_fd_5").style.minHeight = "1px";
		if (document.getElementById("s5_fd_5").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_5").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_6")) {
		document.getElementById("s5_fd_6").style.minHeight = "1px";
		if (document.getElementById("s5_fd_6").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_6").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_7")) {
		document.getElementById("s5_fd_7").style.minHeight = "1px";
		if (document.getElementById("s5_fd_7").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_7").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_8")) {
		document.getElementById("s5_fd_8").style.minHeight = "1px";
		if (document.getElementById("s5_fd_8").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_8").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_9")) {
		document.getElementById("s5_fd_9").style.minHeight = "1px";
		if (document.getElementById("s5_fd_9").offsetHeight > s5_fd_tallest_box) {
			s5_fd_tallest_box = document.getElementById("s5_fd_9").offsetHeight;
		}
	}
	if (document.getElementById("s5_fd_1")) {
		document.getElementById("s5_fd_1").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_2")) {
		document.getElementById("s5_fd_2").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_3")) {
		document.getElementById("s5_fd_3").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_4")) {
		document.getElementById("s5_fd_4").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_5")) {
		document.getElementById("s5_fd_5").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_6")) {
		document.getElementById("s5_fd_6").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_7")) {
		document.getElementById("s5_fd_7").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_8")) {
		document.getElementById("s5_fd_8").style.minHeight = s5_fd_tallest_box + "px";
	}
	if (document.getElementById("s5_fd_9")) {
		document.getElementById("s5_fd_9").style.minHeight = s5_fd_tallest_box + "px";
	}
}

//Count how many images are loaded and compare them to how many boxes to determine if all the top images have loaded. If yes, then fade in the module.
var s5_fd_images_count = 0;
function s5_fd_images_loaded() {
	s5_fd_images_count = s5_fd_images_count + 1;
	if (s5_fd_images_count >= s5_fd_number_boxes) {
		s5_fd_load_highlight();
		s5_fd_set_height();
	}
}

//The function below is a fail safe in case the loading of the top images was not detected, this will fade in the module on window.onload.
var s5_fd_page_loaded = "no";
function s5_fd_check_page_loaded() {
	if (s5_fd_page_loaded == "no") {
	s5_fd_load_highlight();
	s5_fd_set_height();
	}
}
window.onload=s5_fd_check_page_loaded;

jQuery(window).resize(s5_fd_set_height);