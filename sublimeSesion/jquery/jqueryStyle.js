$(document).ready(function(){
    $("#ski").hover(function(){
        $(this).css("background-color", "gray");
        }, function(){
        $(this).css("background-color", "#ADD8E6");
        
    });
       $(".div3").hover(function(){
        $("#ski").css("background-color","gray");
        $("#ski").css("color","#ADD8E6");
        $("#Hobbies").css("background-color","gray");
        $("#Hobbies").css("color","#ADD8E6");
        $("#aboutMe").css("background-color","gray");
        $("#aboutMe").css("color","#ADD8E6");

        }, function(){
        $("#ski").css("background-color","#ADD8E6");
        $("#ski").css("color","#2F4F4F");
        $("#Hobbies").css("background-color","#ADD8E6");
        $("#Hobbies").css("color","#2F4F4F");
        $("#aboutMe").css("background-color","#ADD8E6");
        $("#aboutMe").css("color","#2F4F4F");
    });

$("#btnmovies").click(function(){
  $("#panel2").html("");
      $.getJSON("http://www.omdbapi.com/?s=The originals&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panel2').append(
                "<img src='" + value['Poster'] +"'/>");
               jQuery('#imgMovie').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated hinge',
               offset: 100
             });
            }
            count++;
              
            });
            $("#footer1").slideDown(1000); 
           $("#panel2").slideToggle(1000); 
           
        });

      $.getJSON("http://www.omdbapi.com/?s=teen wolf&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panel2').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
            $("#footer1").slideDown(7000); 
           $("#panel2").slideToggle(7000); 
           
        });

       $.getJSON("http://www.omdbapi.com/?s=Legends of Tomorrow&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panel2').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
            $("#footer1").slideDown(7000); 
           $("#panel2").slideToggle(7000); 
           
        });

        $.getJSON("http://www.omdbapi.com/?s=supergirl&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panel2').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
            $("#footer1").slideDown(7000); 
           $("#panel2").slideToggle(7000); 
           
        });
       
  });

$("#btn1").click(function(){
        $("#read1").slideToggle();
    });

 
 $('.fml').on({
    'mouseover' : function() {
     
      $(this).attr('src','http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png');
    },
    mouseout : function() {
     $(this).attr('src','images/index5.jpg');
    }
  });

 $('#fc').on({
    'mouseover' : function() {
     
      $(this).attr('src','images/fc.jpg');
    },
    mouseout : function() {
     $(this).attr('src','images/f.jpg');
    }
  
  });
 $('#tw').on({
    'mouseover' : function() {
     
      $(this).attr('src','images/Twitter Logo_png.jpg');
    },
    mouseout : function() {
     $(this).attr('src','images/mytwi.jpg');
    }
  });

 $('#gm').on({
    'mouseover' : function() {
     
      $(this).attr('src','images/gmail2.png');
    },
    mouseout : function() {
     $(this).attr('src','images/gmailicon.jpg');
    }
  });


   $("#btnsearch").click(function(){
    $("#panel").html("");
     var value = $("#txtvalue").val();
     if(value=="")
     {
       alert("what are you searching??");
     }
   $.ajax({
        beforeSend: function(request) {
        request.setRequestHeader("api-key",'kdwvp869c7ahexp6qkruhgt3');
    },
    dataType: "json",
    url:"https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=newest&phrase="+value,
    success: function(data) {
        console.log(data);
        var count=0;
        $.each(data["images"],function(key,value ){
               //console.log("Nosiph",value[0]);
               //console.log(key);
               if(count<4)
               {
                $('#panel').append(
                "<img  src='" + value["display_sizes"][0]["uri"]+"'/>"
                );
               }
              
        count++;
     });
        $(".div3").height(600);
        $(".div3").slideDown(7000); 
        $("#panel").slideToggle(7000); 
        $(".div3").css("background-color","white"); 
    }
});
 });
    setInterval(function()
      {
        var start = "01/01/2017";
        var end   = new Date();
        var diff = new Date(start) - end;
        var t = diff/1000;
        var seconds = parseInt( t%60);
        var minutes = parseInt( (t/60) % 60 );
        var hours = parseInt( (t/(60*60)) % 24 );
        var days = parseInt( t/60/60/24 );

        $(".seconds").html(seconds);
        $(".hours").html(hours);
        $(".days").html(days);
        $(".minutes").html(minutes);

      },1000);

     
     
});


$(window).load(function(){
jQuery('.lu').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated rotateInDownRight',
           offset: 200
           });

           jQuery('.div3').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated zoomIn',
           offset: 100
           });   

           jQuery('#fa1').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated bounceIn',
           offset: 100
           });  

           jQuery('#fa').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInUp',
           offset: 100
           });    

           jQuery('#frindsTopic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated rollIn',
           offset: 100
           });  

           jQuery('#khumbu ').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInLeft',
           offset: 100
           });  

           jQuery('#khumbu ').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInLeft',
           offset: 100
           });

           jQuery('#fvm').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated rotateInDownRight',
           offset: 100
           }); 

           jQuery('.imgMovie').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated rotateInDownRight',
           offset: 100
           });  
        
           jQuery('#show1Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInLeft',
           offset: 100
           }); 

          jQuery('.img1').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated zoomIn',
           offset: 100
           }); 

           jQuery('.show2').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInLeft',
           offset: 100
           }); 

           jQuery('.banner').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated bounceIn',
           offset: 100
           });   
   
         
});









