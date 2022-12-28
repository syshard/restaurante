$('.btn-show-perfil').click(function(){
    $('.show-perfil').toggleClass('show');
    $('.top-menu').removeClass('show');
})

$('.btn-show-menu').click(function(){
    $('.top-menu').toggleClass('show');
    $('.show-perfil').removeClass('show');
})

$('.btn-add').click(function(){
    $('.popup-add').toggleClass('show-modal');    
})

$('.show-add').click(function(){
    alert("ok")  
})
