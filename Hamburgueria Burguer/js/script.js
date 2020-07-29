$(document).ready(function(){
    //Modal da foto do cardapio
    $('.popup').click(function(){
        var src = $(this).attr('src');
        $('.modal').modal('show');
        $('#popup-img').attr('src',src);
    });

    //Slider do Comentarios
    $('.slider-comments').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
});