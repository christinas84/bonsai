var main = function() {
    $('#top-text').keyup(function(){
        var topText =$(this).val();
        $('.top-caption').text(topText);
    });

    $('#bottom-text').keyup(function(){
        var bottomText =$(this).val();
        $('.bottom-caption').text(bottomText);
    });

    $('.image-url').keyup(function(){
        var imageUrl = $(this).val();
        $('.meme thumbnail').attr('src', imgUrl);
        });
}
 

$(document).ready(main);
