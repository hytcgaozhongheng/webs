(function($){
	$.fn.specialjj = function(){
		this.each(function(){
				// $(this).animate({"top":"400"},"2000")
				// $(this).animate({"top":"150"},"4000")
				// $(this).animate({"top":"400"},"6000")
				// $(this).animate({"top":"200"},"8000")
				// $(this).animate({"top":"400"},"10000")
				// $(this).animate({"top":"300"},"12000")
				// $(this).animate({"top":"400"},"14000")
				$(this).css({"width": "100px","height": "100px","position": "absolute","top": "100px","left": "500px","border": "1px solid rgb(0,0,0)","border-radius":" 50px"});
				$(this).animate({"left":"800"},"5000")
				$(this).animate({"top":"400"},"5000")
				$(this).animate({"left":"500"},"5000")
				$(this).animate({"top":"100"},"5000")
				$(this).animate({"top":"400"},"5000")
				$(this).animate({"left":"800"},"5000")
				$(this).animate({"top":"100"},"5000")
				$(this).animate({"left":"500"},"5000")
		});
	}

})(jQuery);