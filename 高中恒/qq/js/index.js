$(function(){
	$("#topTitleAllRLeft").hover(function(){
			$(this).find("ul").show();

		},function(){
			$(this).find("ul").hide();

		});
	$(".topTitleAllRightLeftXialali").hover(function(){
			$(this).css("background-color","rgb(210,225,241)")
			$(this).find("a").css("color","rgb(50,151,216)")
		},function(){
			$(this).css("background-color","rgb(255,255,255)")
			$(this).find("a").css("color","rgb(168,168,168)")

	});

	$("#TitleLeftl2").mouseover(function(){

			$(this).addClass("TitleLeftSpecial");
			$(this).parent().find("#TitleLeftl1").removeClass("TitleLeftSpecial");
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().next().show();
	
		

		});

	$("#TitleLeftl1").mouseover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			$(this).addClass("TitleLeftSpecial");
			$(this).parent().find("#TitleLeftl2").removeClass("TitleLeftSpecial");
			$(this).parent().parent().next().show();
			$(this).parent().parent().next().next().hide();

		});
	$("#TitleLeftr2").mouseover(function(){

			$(this).addClass("TitleLeftSpecial");
			$(this).parent().find("#TitleLeftr1").removeClass("TitleLeftSpecial");
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().next().show();
	
		

		});

	$("#TitleLeftr1").mouseover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			$(this).addClass("TitleLeftSpecial");
			$(this).parent().find("#TitleLeftr2").removeClass("TitleLeftSpecial");
			$(this).parent().parent().next().show();
			$(this).parent().parent().next().next().hide();

		});

	/*$("#xwbk1").hover(function(){

			$(this).next().show();
			$(this).parent().css("background-color","rgb(210,225,241)");
			$(this).parent().parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll5").hide();
		},function(){
			$(this).parent().css("background-color","rgb(255,255,255)");

		});
	$("#xwbk2").hover(function(){
			
			$(this).next().show();
			$(this).parent().css("background-color","rgb(210,225,241)");
			$(this).parent().parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll5").hide();
			},function(){
			$(this).parent().css("background-color","rgb(255,255,255)");
		});
	$("#xwbk3").hover(function(){
			
			$(this).next().show();
			$(this).parent().css("background-color","rgb(210,225,241)");
			$(this).parent().parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).parent().css("background-color","rgb(255,255,255)");
		});
	$("#xwbk4").hover(function(){
			
			$(this).next().show();
			$(this).parent().css("background-color","rgb(210,225,241)");
			$(this).parent().parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll5").hide();
			},function(){
			$(this).parent().css("background-color","rgb(255,255,255)");

		});

	$("#xwbk5").hover(function(){
			
			$(this).next().show();
			$(this).parent().css("background-color","rgb(210,225,241)");
			$(this).parent().parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().parent().find(".lm2RL3ContentAll4").hide();
			},function(){
			$(this).parent().css("background-color","rgb(255,255,255)");			

		});*/
	$("#xwbkli1").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll1").show();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();

			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbkli2").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll2").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();

			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbkli3").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll3").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbkli4").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll4").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbkli5").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll5").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});

	$("#xwbklili1").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll1").show();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();

			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklili2").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll2").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();

			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklili3").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll3").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklili4").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll4").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklili5").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll5").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklilili1").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll1").show();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();

			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklilili2").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll2").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();

			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklilili3").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll3").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklilili4").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll4").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll5").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});
	$("#xwbklilili5").hover(function(){
			/*$(this).parent().parent().next().next().hide();	*/
			
			$(this).css("background-color","rgb(210,225,241)");
			$(this).find(".lm2RL3ContentAll5").show();
			$(this).parent().find(".lm2RL3ContentAll1").hide();
			$(this).parent().find(".lm2RL3ContentAll2").hide();
			$(this).parent().find(".lm2RL3ContentAll3").hide();
			$(this).parent().find(".lm2RL3ContentAll4").hide();
			
			},function(){
			$(this).css("background-color","rgb(255,255,255)");			

		});

});

