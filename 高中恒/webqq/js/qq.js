 $(function(){
  	 $("#buttom1").click(function(){
  	  	$(this).parent().parent().find(".friendlist").show();
  	  	$(this).parent().parent().find(".grouplist").hide();
  	  	$(this).parent().parent().find(".taolunlist").hide();
  	  	$(this).parent().find(".buttom").css({"borderBottom":"2px solid #ccc","color":"rgb(0,0,0)"});
  	  	$(this).css({"borderBottom":"2px solid rgb(10,167,255)","color":"rgb(10,167,255)"});
  	  });
  	  $("#buttom2").click(function(){
  	  	$(this).parent().parent().find(".friendlist").hide();
  	  	$(this).parent().parent().find(".grouplist").show();
  	  	$(this).parent().parent().find(".taolunlist").hide();
  	  	$(this).parent().find(".buttom").css({"borderBottom":"2px solid #ccc","color":"rgb(0,0,0)"});
  	  	$(this).css({"borderBottom":"2px solid rgb(10,167,255)","color":"rgb(10,167,255)"});
  	  });
  	  $("#buttom3").click(function(){
  	  	$(this).parent().parent().find(".friendlist").hide();
  	  	$(this).parent().parent().find(".grouplist").hide();
  	  	$(this).parent().parent().find(".taolunlist").show();
  	  	$(this).parent().find(".buttom").css({"borderBottom":"2px solid #ccc","color":"rgb(0,0,0)"});
  	  	$(this).css({"borderBottom":"2px solid rgb(10,167,255)","color":"rgb(10,167,255)"});
  	 });
  	  $("#qqmiddlebuttomnuma").click(function(){
  	  	$(this).parent().parent().find(".qqmiddlehuihua").show();
  	  	$(this).parent().parent().find(".qqmiddlelianxiren").hide();
  	  	$(this).parent().parent().find(".qqmiddlefaxian").hide();
  	  	$(this).parent().parent().find(".qqmiddleshezhi").hide();
  	  	$(this).parent().find(".qqmiddlebuttomnum1").css("background-image",'url("css/images/tab_icon_conversation_selected.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum2").css("background-image",'url("css/images/tab_icon_contact.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum3").css("background-image",'url("css/images/tab_icon_plugin.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum4").css("background-image",'url("css/images/tab_icon_setup.png")')
  	 });
  	  $("#qqmiddlebuttomnumb").click(function(){
  	  	$(this).parent().parent().find(".qqmiddlehuihua").hide();
  	  	$(this).parent().parent().find(".qqmiddlelianxiren").show();
  	  	$(this).parent().parent().find(".qqmiddlefaxian").hide();
  	  	$(this).parent().parent().find(".qqmiddleshezhi").hide();
  	  	$(this).parent().find(".qqmiddlebuttomnum2").css("background-image",'url("css/images/tab_icon_contact_selected.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum1").css("background-image",'url("css/images/tab_icon_conversation.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum3").css("background-image",'url("css/images/tab_icon_plugin.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum4").css("background-image",'url("css/images/tab_icon_setup.png")')
  	 });
  	  $("#qqmiddlebuttomnumc").click(function(){
  	  	$(this).parent().parent().find(".qqmiddlehuihua").hide();
  	  	$(this).parent().parent().find(".qqmiddlelianxiren").hide();
  	  	$(this).parent().parent().find(".qqmiddlefaxian").show();
  	  	$(this).parent().parent().find(".qqmiddleshezhi").hide();
  	  	$(this).parent().find(".qqmiddlebuttomnum3").css("background-image",'url("css/images/tab_icon_plugin_selected.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum1").css("background-image",'url("css/images/tab_icon_conversation.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum2").css("background-image",'url("css/images/tab_icon_contact.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum4").css("background-image",'url("css/images/tab_icon_setup.png")')
  	 });
  	   $("#qqmiddlebuttomnumd").click(function(){
  	  	$(this).parent().parent().find(".qqmiddlehuihua").hide();
  	  	$(this).parent().parent().find(".qqmiddlelianxiren").hide();
  	  	$(this).parent().parent().find(".qqmiddlefaxian").hide();
  	  	$(this).parent().parent().find(".qqmiddleshezhi").show();
  	  	$(this).parent().find(".qqmiddlebuttomnum4").css("background-image",'url("css/images/tab_icon_setup_selected.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum1").css("background-image",'url("css/images/tab_icon_conversation.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum2").css("background-image",'url("css/images/tab_icon_contact.png")')
  	  	$(this).parent().find(".qqmiddlebuttomnum3").css("background-image",'url("css/images/tab_icon_plugin.png")')
  	 });
 });








