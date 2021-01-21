$(document).ready(function(){

    // this is video video play on hover and pause video on mouse leave
    $('.item_video').on('mouseenter',function(){
        // $(this).find('video').trigger('play'); // play video
        $(this).find('video')[0].play(); // play video
    })
    
    $('.item_video').on('mouseleave',function(){
        // $(this).find('video').trigger('pause');// pause video
        $('.item_video').find('video')[0].pause();// pause video
        $('.item_video').find('video').get(0).currentTime = 0; // rest video
    })



})













