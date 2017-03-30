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
		{question:"Who many star wars movies are there? Not including animated pictures or unreleased films", answer:"8", dummyOne:"6", dummyTwo:"5", dummyThree:"7", tip:"Do not count the Clone Wars animated and The Last Jedi.", img:"images/starwars.jpg"},

		{question:"Who is this character?", answer:"Boba Fett", dummyOne:"Kylo Ren", dummyTwo:"General Hux", dummyThree:"Plo Koon", tip:"With his customized Mandalorian armor, deadly weaponry, and silent demeanor, he/she was one of the most feared bounty hunters in the galaxy.", img:"images/boba.jpg"},

		{question:"Who killed the Emperor?", answer:"Darth Vader", dummyOne:"Darth Maul", dummyTwo:"Luke Skywalker", dummyThree:"Kylo Ren", tip:"He was killed by his own disciple.", img:"images/emperor.jpg"},

		{question:"What color is the uniform of a TIE fighter pilot?", answer:"Black", dummyOne:"Green", dummyTwo:"White", dummyThree:"Red", tip:"They were referred to as bucketheads by Rebel pilots, due to their bulky helmets. Within the Imperial forces they were often referred to as coffin jockeys due to the high mortality rate of those manning the vulnerable TIE fighters.", img:"images/tie.jpg"},

		{question:"Who is the general of the Droid Army?", answer:"General Grievous", dummyOne:"General Tarkin", dummyTwo:"General Hux", dummyThree:"General Jarnek", tip:"Brilliant Separatist military strategist and a feared Jedi hunter, known for his ruthlessness and hacking cough. His body itself was a weapon, allowing him lightning quick strikes and devastating blows.", img:"images/grievous.jpg"},

		{question:"Name of the planet where Luke Skywalker grew up?", answer:"Tatooine", dummyOne:"Dagobah", dummyTwo:"Bespin", dummyThree:"Yavin", tip:"A harsh desert world orbiting twin suns in the galaxy’s Outer Rim, Tatooine is a lawless place ruled by Hutt gangsters.", img:"images/tatooine.jpg"},

		{question:"Who is the father of Kylo Ren?", answer:"Han Solo", dummyOne:"Darth Vader", dummyTwo:"Snoke", dummyThree:"Obi-Wan", tip:"Smuggler. Scoundrel. Hero", img:"images/kyloren.jpg"},

		{question:"Who is this character?", answer:"Admiral Ackbar", dummyOne:"ACKLAY", dummyTwo:"Admiral Statura", dummyThree:"Admiral Organa", tip:"It's a traaaaaaaap", img:"images/admiralb.jpg"},

		{question:"Who is Obi-Wan's master?", answer:"Qui-Gon", dummyOne:"Yoda", dummyTwo:"Count Dooku", dummyThree:"Master Windu", tip:"Liberated Anakin from slavery. The Jedi Master presented Anakin to the Jedi Council, but they deemed the boy too old to begin training and dangerously full of fear and anger.", img:"images/obi-wan.jpg"},

		{question:"On what planet does Jabba the Hutt live?", answer:"Tatooine", dummyOne:"Hoth", dummyTwo:"Coruscant", dummyThree:"Naboo", tip:"A planet ruled by the Hutts", img:"images/planett.jpg"},

		{question:"Where do the separatist leaders die ending the Clone Wars?", answer:"Mustafar", dummyOne:"Geonosis", dummyTwo:"Kamino", dummyThree:"Tatooine", tip:"A tiny, fiery planet in the Outer Rim, maintains an erratic orbit between two gas giants.", img:"images/mustafar.jpg"},

		{question:"What species is Jar Jar Binks?", answer:"Gungan", dummyOne:"Naboo", dummyTwo:"Neimoidian", dummyThree:"Wookie", tip:"Native inhabitants of the planet Naboo, an amphibious species with hardy lungs capable of holding breath for extended periods.", img:"images/gungan.jpg"}
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
        obj.src="./sounds/chewy_roar.mp3";
        obj.volume=0.50;
        obj.autoPlay=false;
        obj.preLoad=true;
	var objCorrect = document.createElement("audio");
        objCorrect.src="./sounds/R2D2-yeah.mp3";
        objCorrect.volume=0.50;
        objCorrect.autoPlay=false;
        objCorrect.preLoad=true;
	var objIncorrect = document.createElement("audio");
        objIncorrect.src="./sounds/obiwan_chosenone.mp3";
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
