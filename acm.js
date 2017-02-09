
//navigation bar
$(document).ready(function() {

    $('nav').hide().delay(800).fadeIn(1000);

    $('.links').eq(0).on('click', function() {

        $('section').empty();
        var $about = '<p id="text"> The first ACM-W student chapter at NYU Tandon focused on celebrating and giving opportunities to women in computing machinery.</p> ';
        $('section').html($about);
    })


    $('.links').eq(1).on('click', function() {
        $('.links').removeClass('selected');
        $(this).addClass('selected');
        $('section').empty();

        $('section').html($video);


    })

});