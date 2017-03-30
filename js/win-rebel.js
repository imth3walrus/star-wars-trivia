var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
			{'videoId': 'KK6ovB8jrE0', 'startSeconds': 0, 'endSeconds': 93, 'suggestedQuality': 'hd720'},
			// {'videoId': '8fP7YJtjbZY', 'startSeconds': 120, 'endSeconds': 180, 'suggestedQuality': 'hd720'},
			// {'videoId': 'dVcW11GoBD0', 'startSeconds': 60, 'endSeconds': 120, 'suggestedQuality': 'hd720'},
			// {'videoId': 'OoJikGGQne8', 'startSeconds': 19, 'endSeconds': 25, 'suggestedQuality': 'hd720'}
		],
		randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;

  $('.hi em:last-of-type').html(vid.length);

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
    $('.hi em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2){
    $('#tv').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale(){

  var w = $(window).width()+300,
      h = $(window).height()+300;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

$('.hi span:first-of-type').on('click', function(){
  $('#tv').toggleClass('mute');
  $('.hi em:first-of-type').toggleClass('hidden');
  if($('#tv').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
});

$('.hi span:last-of-type').on('click', function(){
  $('.hi em:nth-of-type(2)').html('~');
  tv.pauseVideo();
});



$(document).ready(function() {
	var $loading = $('#loadingDiv').hide();
$(document)
  .ajaxStart(function () {
    $loading.show();
  })
  .ajaxStop(function () {
    $loading.hide();
  });

	var obj = document.createElement("audio");
        obj.src="./sounds/R2D2-yeah.mp3";
        obj.volume=0.50;
        obj.autoPlay=false;
        obj.preLoad=true;
	var objCorrect = document.createElement("audio");
        objCorrect.src="./sounds/ATST-ChinGuns.wav";
        objCorrect.volume=0.50;
        objCorrect.autoPlay=false;
        objCorrect.preLoad=true;


  $("#mute").click(function() {
		$('audio').each(function(){
			this.pause(); // Stop playing
			this.currentTime = 0; // Reset time
			});
    });

	$('#final-rebel').text("Admiral " + rebelName + " (Rebels) Score:" + rebelCorrect);
	$('#final-empire').text("Commander " + empireName + " (Empire) Score:" + empireCorrect);


});
