$(function(){
	$("#lm1").mouseover(function(){
			$(this).addClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm2").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().parent().next().next().show();
			$(this).parent().parent().next().hide();
		});
	$("#lm2").mouseover(function(){
			$(this).addClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm1").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().parent().next().next().hide();
			$(this).parent().parent().next().show();
		});
	$("#lm3").mouseover(function(){
			$(this).addClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm4").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm5").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().parent().next().show();
			$(this).parent().parent().next().next().hide();
			$(this).parent().parent().next().next().next().hide();
		});
	$("#lm4").mouseover(function(){
			$(this).addClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm3").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm5").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().parent().next().next().hide();
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().next().show();
			$(this).parent().parent().next().next().next().hide();
		});
	$("#lm5").mouseover(function(){
			$(this).addClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm3").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().find("#lm4").removeClass("PhbLeftContentTitleRightSpecial");
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().next().hide();
			$(this).parent().parent().next().next().next().show();
		});
	$(".topPicturecontentleftbuttom").click(function(){

		move();
	});

	$(".topPicturecontentrightbuttom").click(function(){
		move2();
	});
	$(".PhbRightDownTitlerightbuttom1").click(function(){

		move3();
	});
	
	$(".PhbRightDownTitlerightbuttom2").click(function(){
		move4();

	});
	setInterval("move()",2000);
	setInterval("move3()",2000);
	setInterval("move5()",1000);
	//$banner_ul.animate({left: '+=' + v_width},"slow");
});
	var n=1;
	function move(){
	
		index=n*1000;
		$("#topPicturecontent ul").animate({"left": "-"+ index +"px"},"slow");
		n++;
		if (n>9) {
			n=0;
		};
			
			 
	};

	var m=9;
	function move2(){
	
		index=m*1000;
		$("#topPicturecontent ul").animate({"left": "-"+ index +"px"},"slow");
		m--;
		if (m<1) {
			m=9;
		};
			
			 
	};

	var h=1;
	function move3(){

		var s=h*300;
		$(".PhbRightDownContent ul").animate({"left": "-"+ s +"px"},"slow");
		h++;
		if (h>2) {
			h=0;
		};
			
			 
	};
	var i=2;
	function move4(){

		var x=i*300;
		$(".PhbRightDownContent ul").animate({"left": "-"+ x +"px"},"slow");
		i--;
		if (i<0) {
			i=2;
		};
			
			 
	};

	var  y=1;
	function move5(){

		
		$(".fljx3").css("background-image",'url("css/images/t'+y+'.png")');
		y++;
		if (y>3) {
			y=1;
		};
			 
	};

