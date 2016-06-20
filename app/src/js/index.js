var height = window.innerHeight;
document.querySelector('body').style.height = height + 'px';
var preImg = new Image();
preImg.src = './dist/img/babala.jpg';

var music = document.querySelector('#music'); 
$('#girl').click(function(e) {
	e.stopPropagation();
	$(this).toggleClass('roll');
	if( music.paused ) {                 
	    music.play();  
	}else{
	 	music.pause();
	}
});

$('.on').click(function(e) {
	if( $('#girl').hasClass('turn') ) {
		$('#girl').removeClass('turn').addClass('turnOff');
	} else {
		$('#girl').removeClass('turnOff').addClass('turn');
	}
});
 