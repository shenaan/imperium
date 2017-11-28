$(document).ready(function (){
    $('#btn__mob').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    });

    $(document).on('click', function(e){
        if(!$(e.target).closest('#btn__mob, .header__nav').length) {
            $('#btn__mob,.header__nav').removeClass('active');
        }
    });

    $('.header__search, .header__search-link').click(function (e) {
        e.preventDefault();
        $('.modal__search-wrapper').addClass('active');
        $('#overlay').fadeIn();

        $('.modal__search-close, #overlay').on('click', function(e){
            e.preventDefault();
            $('.modal__search-wrapper').removeClass('active');
            $('#overlay').fadeOut();
        })
    });



});
