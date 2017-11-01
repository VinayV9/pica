
var x=0;
$(document).ready(function(){
     // prompt showing at the beginning
    alert("start game");
    // bullet fires for every 2 seconds
    // to do replace with random time method
     setInterval("fireBlast()", 2000);
    }).keydown( function(e){

        var key=e.which;
        // when we press space bar or up arrow key pichachu will jump
        // 32 for space bar and 38 for up arrow
        if(key==32||key==38){ 
              
            $("#gamer").animate(
                {
                  top: '-205px'
                },400);

            $("#gamer").animate(
                {
                  top: '10px'
                }, 450);   
            $("#jumpAudio").get(0).play();   
        }    
});


//fires fireballs from right to left
var fireBlast= function(){
 
    $(".path").append("<img src='images/fireball.png' id='fireBall'>");
    $("#fireAudio").get(0).play();
    $("#fireBall").animate({right:"90%"},1700,"linear",
    function(){
       var pos1=$("#gamer").position();
       var pos2=$("#fireBall").position();
       hitCheck(pos1 , pos2);
       $(this).remove();            
    });
    
}

// todo this function has some bugs
var hitCheck= function(pos1, pos2){
   
    var x1,x2,y1,y2;
    
    x1=pos1.left;
    console.log(x1);
    x2=pos2.left;
    console.log(x2);
    y1=pos1.top;
   console.log(y1);
    y2=pos2.top;
     console.log(y2);
    // scoreboard
    if(y1>-3) {
        x=0;
        $("#myScore").html(x);
        alert("you loose");
    }
    else{
        x+=10;
        $("#myScore").html(x);
    }
}


