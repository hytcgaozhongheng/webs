$(function(){
	$(".middlecontentleftcontent a").click(function(){
		bianhuan();
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

