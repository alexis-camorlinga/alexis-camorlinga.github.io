$('.card').hover(function(){
    if($(this).hasClass(".active")){
        $('.card .bottom').slideUP(function(){
            $('.card').removeClass(".active")
        });
    }else{
        $('.card').addClass(".active");
        $('.card .bottom').stop().slideDown();
    }
});