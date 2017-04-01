var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
			{'videoId': 'OoJikGGQne8', 'startSeconds': 120, 'endSeconds': 180, 'suggestedQuality': 'hd720'},
			{'videoId': '8fP7YJtjbZY', 'startSeconds': 120, 'endSeconds': 180, 'suggestedQuality': 'hd720'},
			{'videoId': 'dVcW11GoBD0', 'startSeconds': 60, 'endSeconds': 120, 'suggestedQuality': 'hd720'},
			{'videoId': 'OoJikGGQne8', 'startSeconds': 19, 'endSeconds': 25, 'suggestedQuality': 'hd720'}
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




var theGame;


//******************************************************************
//  Star Wars Game Logic
//******************************************************************
var starWarsGame = function() {
  this.Questions = [
		{question:"Who was the actor inside R2-D2?", answer:"Kenny Baker", dummyOne:"David Prowse", dummyTwo:"Michael Winslow", dummyThree:"There wasn't an actor inside", tip:"He also appeared in Time Bandits", img:"images/r2d2.jpg"},

		{question:"Who is this character?", answer:"Nute Gunray", dummyOne:"Lobot", dummyTwo:"Kit Fisto", dummyThree:"Ki-Adi-Mundi", tip:"Viceroy of the Trade Federation.", img:"images/gunray.jpg"},

		{question:"When Luke, Leia, and Han Solo are stuck in the trash compactor, what else is in there with them?", answer:"Dianoga", dummyOne:"Gundark", dummyTwo:"Anooba", dummyThree:"Wampa", tip:"????", img:"images/anooba.jpg"},

		{question:"What was Anakin Skywalker's mom's name?", answer:"Shmi", dummyOne:"Padme", dummyTwo:"Organa", dummyThree:"Asohka", tip:"After Anakin left to become a Jedi, she was sold to Cliegg Lars, who freed her and married her. Just before the Clone Wars, she died in her sons arms after being brutally tortured by a band of Tusken Raiders.", img:"images/shmi.jpg"},

		{question:"What actor physically played Darth Maul?", answer:"Ray Park", dummyOne:"Ray Parker Jr.", dummyTwo:"Viggo Mortenses", dummyThree:"Peter Serafino", tip:"Played Toad in X-Men, Snake-Eyes in G.I. Joe: The Rise of Cobra and G.I. Joe: Retaliation, and Edgar on Heroes.", img:"images/darthmaul.jpg"},

		{question:"What's Chewbacca's home planet??", answer:"Kashyyyk", dummyOne:"Kashyk", dummyTwo:"Kashyyk", dummyThree:"Endor", tip:"Wookiee homeworld, covered in dense forest. While Wookiees build their homes in the planet's trees, they are not a primitive species, and the planet's architecture incorporates sophisticated technology.", img:"images/chewbacca.jpg"},

		{question:"Name this creature?", answer:"Wampa", dummyOne:"TaunTaun", dummyTwo:"Womp Rat", dummyThree:"Gundark", tip:"Hoth's top carnivorous predators. While hunting, the creature would ambush and stun its prey, then dragged it back to its cave, and hang it upside down and devour the prey whenever it needed.", img:"images/wampa.jpg"},

		{question:"What micro-organisms are said to be conductors of the Force?", answer:"Midichlorians", dummyOne:"Force Atoms", dummyTwo:"Chlorimidians", dummyThree:"Mitochondria", tip:"They aren't an energy field. They are cells inside living beings.", img:"images/midi.jpg"},

		{question:"What did Luke Skywalker's uncle, Owen, operate on Tatooine?", answer:"A moisture farm", dummyOne:"Repair Shop", dummyTwo:"Cantina", dummyThree:"Hostal", tip:"???????", img:"images/owen.jpg"},

		{question:"Name of this spacecraft?", answer:"Naboo Fighter", dummyOne:"Hoth fighter", dummyTwo:"Coruscant cruiser", dummyThree:"Naboo fragata", tip:" Its sleek design exemplifies the philosophy of art and function witnessed throughout it's planets technology.", img:"images/naboo fighter.jpg"},

		{question:"What famous composer has scored all the 'Star Wars' films so far?", answer:"John Williams", dummyOne:"John Barry", dummyTwo:"Danny Elfman", dummyThree:"Hans Zimmer", tip:"Composer of all seven Star Wars saga films.", img:"images/band.jpg"},

		{question:"Who is this character?", answer:"Lobot", dummyOne:"Admiral Piett", dummyTwo:"Moff Tarkin", dummyThree:"Lando Calrissian", tip:"Was a male human from the planet Bespin who, with the assistance of his AJ6 cyborg construct, was paid to run battlefield calculations for the Galactic Empire. However, he eventually began working with the smuggler Lando Calrissian aboard the Millennium Falcon, running numerous criminal jobs.", img:"images/lobot.jpg"}
  	];
	this.empire_correct = 0;
	this.rebel_correct = 0;
	};



	function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var rebelName = getParameterByName('rebelName');
var empireName = getParameterByName('empireName');
var empireCorrect = getParameterByName('empireCorrect');
var rebelCorrect = getParameterByName('rebelCorrect');



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
        obj.src="./sounds/swvader03.mp3";
        obj.volume=0.50;
        obj.autoPlay=false;
        obj.preLoad=true;
	var objCorrect = document.createElement("audio");
        objCorrect.src="./sounds/ATST-ChinGuns.wav";
        objCorrect.volume=0.50;
        objCorrect.autoPlay=false;
        objCorrect.preLoad=true;
	var objIncorrect = document.createElement("audio");
        objIncorrect.src="./sounds/chewy_roar.mp3";
        objIncorrect.volume=0.1;
        objIncorrect.autoPlay=false;
        objIncorrect.preLoad=true;

  $(".tipbtn").click(function() {
            obj.play();
        });


			theGame = new starWarsGame();

			$('.rebel-score').text("Admiral " + rebelName + " score:0");
		  $('.empire-score').text("Commander " + empireName +" Score:0");

			var counter = theGame.Questions.length - 1;
			console.log(counter);

		  var answerLabels = ["one", "two", "three", "four"];

			function GameResult() {
				if (theGame.empire_correct > theGame.rebel_correct && counter === -1) {
					// $(".submit").click(function() {
		        window.open("win-empire.html?empireName=" + empireName + "&rebelName=" + rebelName + "&empireCorrect=" + theGame.empire_correct + "&rebelCorrect=" + theGame.rebel_correct , "_self");
						// window.location.href = "win-empire.html";
					// });
				} else if (theGame.rebel_correct > theGame.empire_correct && counter === -1) {
					// $(".submit").click(function() {
		        window.open("win-rebel.html?empireName=" + empireName + "&rebelName=" + rebelName + "&empireCorrect=" + theGame.empire_correct + "&rebelCorrect=" + theGame.rebel_correct , "_self");
						// window.location.href = "win-rebel.html";
					// });
				} else if (theGame.rebel_correct == theGame.empire_correct && counter === -1){
					// $(".submit").click(function() {
		        window.open("draw.html?empireName=" + empireName + "&rebelName=" + rebelName + "&empireCorrect=" + theGame.empire_correct + "&rebelCorrect=" + theGame.rebel_correct , "_self");
						// window.location.href = "draw.html";
					// });
				}
			}

			function gameScore() {
				if (counter % 2 === 0 || counter === 0) {
					theGame.rebel_correct += 1000 ;
					$('.rebel-score').text("Admiral " + rebelName + " Score:" + theGame.rebel_correct);
				} else {
					theGame.empire_correct += 1000 ;
					$('.empire-score').text("Commander " + empireName +" Score:" + theGame.empire_correct);
				}
			}

			function turnControl() {
				if (counter % 2 === 0) {
					$('#turn-image').attr("src", "images/Rebel.png");
					$('#turn-text').text("Rebels");
				} else {
					$('#turn-image').attr("src", "images/empire.png");
					$('#turn-text').text("The Empire");
				}
			}

			function closeModal() {
				$('#myModalAnswer').modal('show');
				setTimeout(function() {$('#myModalAnswer').modal('hide');}, 1500);
			}

			$('.simple-timer').backward_timer({
		  seconds: 20,
			format: 'm%:s%',
			on_exhausted: function(timer) {
		    $( ".submit" ).trigger( "click" );
		  }
			});
			$('.simple-timer').backward_timer('start');


			$(".submit").click(function() {
				answerLabels = shuffle(answerLabels);
				var answer = $('input[name=optradio]:checked').val();
				console.log(answer);
				var name = theGame.Questions[counter].answer;
				console.log(name);
				while (counter >= 0) {
					if (answer === theGame.Questions[counter].answer && counter === 0) {
						console.log(counter % 2 === 0);
						console.log(counter);
						gameScore();
						console.log("working");
						counter = -1;
						console.log(counter);
						GameResult();
						return;

					} else if (answer != theGame.Questions[counter].answer && counter === 0) {
						counter = -1 ;
						GameResult();
						return;

					} else if ( answer === theGame.Questions[counter].answer && counter !== 0) {
						console.log(answerLabels);
						console.log(answer);
						objCorrect.play();
						$('input[name=optradio]:checked').prop('checked', false);
						$('#answer-result').text('CORRECT!!');
						closeModal();
						gameScore();
						counter--;
						turnControl();
						console.log(counter);
						$('#my_image').attr('src',theGame.Questions[counter].img);
						$('#answer-'+answerLabels[0]).attr('value',theGame.Questions[counter].answer);
						$('#label-'+answerLabels[0]).text(theGame.Questions[counter].answer);
						$('#answer-'+answerLabels[1]).attr('value',theGame.Questions[counter].dummyOne);
						$('#label-'+answerLabels[1]).text(theGame.Questions[counter].dummyOne);
						$('#answer-'+answerLabels[2]).attr('value',theGame.Questions[counter].dummyTwo);
						$('#label-'+answerLabels[2]).text(theGame.Questions[counter].dummyTwo);
						$('#answer-'+answerLabels[3]).attr('value',theGame.Questions[counter].dummyThree);
						$('#label-'+answerLabels[3]).text(theGame.Questions[counter].dummyThree);
						$('#change').text(theGame.Questions[counter].question);
						$('#answer-tip').text(theGame.Questions[counter].tip);
						$('.simple-timer').backward_timer('reset');
						$('.simple-timer').backward_timer('start');
						GameResult();

						return;
					} else if ( answer != theGame.Questions[counter].answer && counter !== 0) {
						objIncorrect.play();
						$('input[name=optradio]:checked').prop('checked', false);
						$('#answer-result').text('INCORRECT!!');
						closeModal();
						counter--;
						turnControl();
						console.log(counter);
						$('#my_image').attr('src',theGame.Questions[counter].img);
						$('#answer-'+answerLabels[0]).attr('value',theGame.Questions[counter].answer);
						$('#label-'+answerLabels[0]).text(theGame.Questions[counter].answer);
						$('#answer-'+answerLabels[1]).attr('value',theGame.Questions[counter].dummyOne);
						$('#label-'+answerLabels[1]).text(theGame.Questions[counter].dummyOne);
						$('#answer-'+answerLabels[2]).attr('value',theGame.Questions[counter].dummyTwo);
						$('#label-'+answerLabels[2]).text(theGame.Questions[counter].dummyTwo);
						$('#answer-'+answerLabels[3]).attr('value',theGame.Questions[counter].dummyThree);
						$('#label-'+answerLabels[3]).text(theGame.Questions[counter].dummyThree);
						$('#change').text(theGame.Questions[counter].question);
						$('#answer-tip').text(theGame.Questions[counter].tip);
						$('.simple-timer').backward_timer('reset');
						$('.simple-timer').backward_timer('start');
						GameResult();
						return;
					}
				}

			});


		});
