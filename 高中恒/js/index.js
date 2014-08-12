$(function(){
	$(".searchContentNormal").hover(function(){
		$(this).css({
			"background-color":"#f1f1f1",
			"box-shadow":"1px 1px 10px #666"
		});
	},
	function(){
		$(this).css({
			"background-color":"",
			"box-shadow":""
		});
	});	

	show();
	setInterval('show()',1000)

});

	


function show(rq){
	
	var rq= new Date();

	var year=rq.getYear();
	var month=rq.getMonth()+1;
	var date=rq.getDate();
	var hour=rq.getHours();
	var minute=rq.getMinutes();
	var second=rq.getSeconds();

	if(year< 314)
	{
		year=1900+year;
	}
	var y1= Math.floor(year / 1000);
	var y2= Math.floor( (year % 1000) / 100);
	var y3= Math.floor( (year % 100) / 10);
	var y4= Math.floor(year % 10);

	var m1= Math.floor(month / 10);
	var m2= Math.floor(month % 10);

	var h1= Math.floor(hour / 10);
	var h2= Math.floor(hour % 10);

	var min1= Math.floor(minute / 10);
	var min2= Math.floor(minute % 10);

	var d1= Math.floor(date / 10);
	var d2= Math.floor(date % 10);

	var s1= Math.floor(second / 10);
	var s2= Math.floor(second % 10);

	$("#y1").css("background-position","0px -"+y1*25+"px");
	$("#y2").css("background-position","0px -"+y2*25+"px");
	$("#y3").css("background-position","0px -"+y3*25+"px");
	$("#y4").css("background-position","0px -"+y4*25+"px");

	$("#m1").css("background-position","0px -"+m1*25+"px");
	$("#m2").css("background-position","0px -"+m2*25+"px");

	$("#d1").css("background-position","0px -"+d1*25+"px");
	$("#d2").css("background-position","0px -"+d2*25+"px");

	$("#h1").css("background-position","0px -"+h1*30+"px");
	$("#h2").css("background-position","0px -"+h2*30+"px");

	$("#min1").css("background-position","0px -"+min1*30+"px");
	$("#min2").css("background-position","0px -"+min2*30+"px");

	$("#s1").css("background-position","0px -"+s1*25+"px");
	$("#s2").css("background-position","0px -"+s2*25+"px");
}



