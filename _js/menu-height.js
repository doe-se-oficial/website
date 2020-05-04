$(".navbar-toggler-icon").add(window).on('resize load click',function(e){
    espaco = 30; // ajuste de espaçamento à partir barra, em pixels
    if(e.type != "click"){
        $("body").css("padding-top",($("div.fixed-top").height()+espaco)+"px");
    }
    
    else{
        setTimeout(function(){
            $("body").animate({ 'padding-top': ($("div.fixed-top").height()+espaco)+'px' }, 50);
        },500);
    }
});