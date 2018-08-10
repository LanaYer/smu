$(document).ready(function(){

    $('.project-slick_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    });

    $('.analog-slick_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    });


    $('#complectatBlockImg1').click( function () {
        $('.complectation-block_info').css('display', 'none');
        $('#complectatBlockInfo1').css('display', 'block');
    });
    $('#complectatBlockImg2').click( function () {
        $('.complectation-block_info').css('display', 'none');
        $('#complectatBlockInfo2').css('display', 'block');
    });
    $('#complectatBlockImg3').click( function () {
        $('.complectation-block_info').css('display', 'none');
        $('#complectatBlockInfo3').css('display', 'block');
    });
    $('#complectatBlockImg4').click( function () {
        $('.complectation-block_info').css('display', 'none');
        $('#complectatBlockInfo4').css('display', 'block');
    });
    $('.complectation-block-info-close').click( function () {
        $('.complectation-block_info').css('display', 'none');
    });

    $("#slider").slider({
        min: 0,
        max: 5000,
        values: [0,5000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        }
    });
    $("#slider1").slider({
        min: 0,
        max: 5000,
        values: [0,5000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost1").val($("#slider1").slider("values",0));
            $("input#maxCos1t").val($("#slider1").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost1").val($("#slider1").slider("values",0));
            $("input#maxCost1").val($("#slider1").slider("values",1));
        }
    });

    $(".form-field__input").focus(function(){
        $(this).parent().addClass('focus');
    });

    $(".form-field__input").focusout(function(){
        if ($(this).val()==""){
            $(this).parent().removeClass('focus');
        }
    });

    $(".header__menu-burger").click(function(){
        $(".header__menu").toggle();
    });

    $(".main__contact-us__name").click(function(){
        $(".main__contact-us").addClass('open');
    });
    $(".main__contact-us__close").click(function(){
        $(".main__contact-us").removeClass('open');
    });
});

