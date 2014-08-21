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


       $(".friend").click(function(){
    var friendID = $(this).attr("friendID");
    var chatDivID = "chat" + friendID;
    if ($(this).attr("isOpen") == "true") {
      //将已经打开的窗口置顶
      $(".qqChat").css("z-index","15");
      $("#" + chatDivID).css("z-index","16");
      return;
    }
    $(this).attr("isOpen","true");
    
    var friendName = $(this).attr("friendName");
    var html ="";
    html += '   <div id="' + chatDivID + '" class="Chat">';
    html += '     <div class="chatTitle">';
    html += '       <div class="chattitle1"><div class="chattitle1div"><div class="chattitle1divxiala"></div></div></div>';
    html += '       <div class="chatperson">' + friendName +'</div>';
    html += '       <div friendID = "friend'+friendID+'" chatDivID="' + chatDivID + '" class="chattitle3"><div class="chattitle3div"><span class="chattitle3divspan">关闭</span></div></div>';
    html += '     </div>';
    html += '     <div class="chatHistory"></div>';
    html += '     <div class="chatControl"></div>';
    html += '   </div>';

      
      


        <div class="chatcontent"></div>
    <div class="chatshuru">
      <div class="chatshurubq">
        <div class="chatshurubqpic"></div>
      </div>
      <textarea class="chatshuruchatkuang"></textarea>
      <div class="chatshuruchatsend">
        <span class="chatshuruchatsendbuttom">发送</span>
      </div>
    </div>
  </div>


    $("body").append(html);

 });








