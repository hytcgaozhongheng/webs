$(function(){
	$(".middlecontentleftcontent a").click(function(){
		bianhuan();
	});	
	$(".buttom").click(function(){
		bianhuan2();
	});	
});
	var index=2;
	function bianhuan(){

		$(".middlecontentleftcontentdiv").css("background-image","url('css/images/"+ index +".png')");
		index++
		if (index>6) {
			index=1;
		};

	}
	var m=1;
	function bianhuan2(){

		$(".buttom").css("background-image","url('css/images/dj"+ m +".png')");
		m++
		if (m>2) {
			m=1;
		};

	}
