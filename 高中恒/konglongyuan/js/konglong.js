$(function(){
	$("#MenuliaA").hover(function(){
		$(this).find(".MenuliXiala").slideDown();

	},
	function(){
		$(this).find(".MenuliXiala").hide();
	});
	

	$("#MenuliaB").hover(function(){
		$(this).find(".MenuliXiala").slideDown();

	},
	function(){
		$(this).find(".MenuliXiala").hide();
	});

	$(".topPicPicturelist").click (function(){
		index=$(this).attr("picindxe");
		qiehuan();
		
	});

	$("#buttomleft").click(function(){
		var x=index-1;
		qiehuan(x);
	});

	$("#buttomright").click(function(){
		var m=index+1;
		qiehuan(m);
	});

	$(".huanleftbuttom").click(function(){
		
		bianhuan();

	});

	$(".huanrightbuttom").click(function(){
		
		bianhuanA();

	});
/*	$("#buttomright").click(function(){
		var rb=$(this).attr("picindxe");
		youbian();
	});*/

	// $(".topPicPicture").hover(
	// 	function(){
	// 		clearInterval(time1);

	// },
	// 	function(){
	// 		time1= setInterval("qiehuan()",2000);

	// });

  	time1 = setInterval("qiehuan()",2000);
  	
 	// bianhuan();
  //   time2 = setInterval("bianhuan()",5000);
});


	var index=2;
	function qiehuan(){
			
			 if (index==1||index==2) {
			 	$(".topPiclistul").css("left","0px");
			 };
		     if(index==3)
			 {
			 	$(".topPiclistul").css("left","-134px");
			 };
			 if (index==4||index==5||index==6) {
				$(".topPiclistul").css("left","-268px");
			 };
			
			$(".topPicPicture").css("background-image",'url("images/'+index+'.jpg")');
			$(".topPicPicturelist").removeClass("topPicPicturelistSpecial");
			$("#pic"+index).addClass("topPicPicturelistSpecial");



			index++;
			if (index>6) {
				index=1;
			};
	};

	function bianhuan(){
		$(".huancontentul").css("left",""+ n +"px");
		n=n+201;
		if(n>0)
		{
			n=-402;
		}
	};
	var n=-201;
	function bianhuanA(){
		
		$(".huancontentul").css("left",""+ n +"px");
		n=n-201;
		if(n<-402)
		{
			n=0;
		}
	};

