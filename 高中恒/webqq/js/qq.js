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
        $(".footerbuttom1").click(function(){
          
        bianhuan();
     });
        $(".footerbuttom2").click(function(){
        bianhuan2();
     });
        $(".shezhilist3").click(function(){
          $(this).parent().parent().parent().parent().parent().parent().find(".panelNotifySetting").show();
     });
        $(".panelSetHeaderButton").click(function(){
          $(this).parent().parent().hide();
     });



        $(document).on("click", ".chatshuruchatsendbuttom",function(){
            var chatContentHtml ="";

            var MyWords = $(this).parent().parent().find(".chatshuruchatkuang").val();
            chatContentHtml +='       <div class="chatDesContentA">';

            chatContentHtml +='         <div class="cDAHeader"></div>';
            chatContentHtml +='         <div class="cDALeft">';
            chatContentHtml +='           <span class="cDAMyNicName">胖大海</span>';
            chatContentHtml +='           <div class="cDAMyWords">'+MyWords+'</div>';
            chatContentHtml +='         </div>';                
            chatContentHtml +='       </div>';
            
            $(this).parent().parent().parent().find(".chatcontent").append(chatContentHtml);
            var curContent = $(this).parent().parent().parent().find(".chatcontent");
            

            curContent.animate({"scrollTop":"1000000x"},0);
            $(this).parent().parent().find(".chatshuruchatkuang").val("");
          });

        tcliaotian();

 });

  function tcliaotian()
  
     {
         $(".friend").click(function(){
          
          var talkid=$(this).attr("talkid");
          var cAname=$(this).attr("cafName");
          var isappear = $(this).attr("isappear");
           if(isappear=="yes"){
              $("#"+talkid).show();
              $(".chat").css("z-index","10");
              $("#"+talkid).css("z-index","12");
            return;
           }
          
         var chatHtml = '';
    
         chatHtml+=' <!--聊天框-->';
         chatHtml+='<div id="'+ talkid +'" class="chat">';
         chatHtml+='    <div class="chattitle">';
         chatHtml+='        <div class="chattitle1">';
         chatHtml+='            <div class="chattitle1div">';
         chatHtml+='                <div class="chattitle1divxiala"></div>';
         chatHtml+='            </div>';
         chatHtml+='        </div>';
         chatHtml+='        <div class="chatperson">'+ cAname +'</div>';
         chatHtml+='        <div class="chattitle3">';
         chatHtml+='            <div class="chattitle3div">';
         chatHtml+='                <span class="chattitle3divspan">关闭</span>';
         chatHtml+='            </div>';
         chatHtml+='        </div>';
         chatHtml+='    </div>';
         chatHtml+='    <div class="chatcontent"></div>';
         chatHtml+='    <div class="chatshuru">';
         chatHtml+='        <div class="chatshurubq">';
         chatHtml+='            <div class="chatshurubqpic"></div>';
         chatHtml+='        </div>';
         chatHtml+='        <textarea class="chatshuruchatkuang"></textarea>';
         chatHtml+='        <div class="chatshuruchatsend">';
         chatHtml+='            <span class="chatshuruchatsendbuttom">发送</span>';
         chatHtml+='        </div>';
         chatHtml+='    </div>';
         
        

         $("body").append(chatHtml);
         $(this).attr("isappear","yes");
         $(".chat").css("z-index","10");
         $("#"+talkid).css("z-index","12");

         var ranleft= (Math.random()+5)*100;
         var rantop= Math.random()*150;
          $("#"+talkid).css({
            "left":ranleft+"px",
            "top":rantop+"px"
          });

        $(".chattitle3div").click(function(){
              $(this).parent().parent().parent().hide();
        });
        

     });
  };
  
  var index=2;
  function bianhuan(){

      $("#webqqall").css("background-image",'url("css/images/'+index+'.jpg")');
      index++;
      if (index>3) {
        index=1;
      };
  }

  var m=3
  function bianhuan2(){
      $("#webqqall").css("background-image",'url("css/images/'+ m +'.jpg")');
      m--;
      if (m<1) {
        m=3;
      };
  } 



