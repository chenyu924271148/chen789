$(function(){
    $(window).on('resize',function(){
        var width=$(window).width();
        var fontSize=(width/640)*100;
        if(width > 640) {
        	$('html').css('font-size', "100px")
        } else {
        	$('html').css('font-size',fontSize)
        }
    }).trigger('resize')
})