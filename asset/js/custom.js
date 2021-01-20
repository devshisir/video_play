$(document).ready(function(){
    // this is for poster hide and show
    $(".video_poster").mouseenter(function(){
        $(this).fadeOut('slow');
    });

    $(".video_item").mouseleave(function(){
        $('.video_poster').fadeIn('slow');
    });


    // this is video video play on hover and pause video on mouse leave
    $('.video_item').on('mouseenter',function(){
        $(this).find('video').trigger('play'); // play video
    })
    
    $('.video_item').on('mouseleave',function(){
        $(this).find('video').trigger('pause');// pause video
        $(this).find('video').get(0).currentTime = 0; // rest video
    })















})













