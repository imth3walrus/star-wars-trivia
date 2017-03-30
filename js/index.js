// var tag = document.createElement('script');
// 		tag.src = 'https://www.youtube.com/player_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// 		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var tv,
// 		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
// var vid = [
// 			{'videoId': 'OoJikGGQne8', 'startSeconds': 120, 'endSeconds': 180, 'suggestedQuality': 'hd720'},
// 			{'videoId': '8fP7YJtjbZY', 'startSeconds': 120, 'endSeconds': 180, 'suggestedQuality': 'hd720'},
// 			{'videoId': 'dVcW11GoBD0', 'startSeconds': 60, 'endSeconds': 120, 'suggestedQuality': 'hd720'},
// 			{'videoId': 'OoJikGGQne8', 'startSeconds': 19, 'endSeconds': 25, 'suggestedQuality': 'hd720'}
// 		],
// 		randomVid = Math.floor(Math.random() * vid.length),
//     currVid = randomVid;
//
//   $('.hi em:last-of-type').html(vid.length);
//
// function onYouTubePlayerAPIReady(){
//   tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
// }
//
// function onPlayerReady(){
//   tv.loadVideoById(vid[currVid]);
//   tv.mute();
// }
//
// function onPlayerStateChange(e) {
//   if (e.data === 1){
//     $('#tv').addClass('active');
//     $('.hi em:nth-of-type(2)').html(currVid + 1);
//   } else if (e.data === 2){
//     $('#tv').removeClass('active');
//     if(currVid === vid.length - 1){
//       currVid = 0;
//     } else {
//       currVid++;
//     }
//     tv.loadVideoById(vid[currVid]);
//     tv.seekTo(vid[currVid].startSeconds);
//   }
// }
//
// function vidRescale(){
//
//   var w = $(window).width()+300,
//       h = $(window).height()+300;
//
//   if (w/h > 16/9){
//     tv.setSize(w, w/16*9);
//     $('.tv .screen').css({'left': '0px'});
//   } else {
//     tv.setSize(h/9*16, h);
//     $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
//   }
// }
//
// $(window).on('load resize', function(){
//   vidRescale();
// });
//
// $('.hi span:first-of-type').on('click', function(){
//   $('#tv').toggleClass('mute');
//   $('.hi em:first-of-type').toggleClass('hidden');
//   if($('#tv').hasClass('mute')){
//     tv.mute();
//   } else {
//     tv.unMute();
//   }
// });
//
// $('.hi span:last-of-type').on('click', function(){
//   $('.hi em:nth-of-type(2)').html('~');
//   tv.pauseVideo();
// });




var theGame;


//******************************************************************
//  Star Wars Game Logic
//******************************************************************
var starWarsGame = function() {
  this.Questions = [
		{question:"Who directed Star wars?", answer:"George Lucas", dummyOne:"JK Rowling", dummyTwo:"Wally Russ", dummyThree:"Steven Spielberg", tip:"He is best known as the creator of the Star Wars and Indiana Jones franchises, as well as the founder of Lucasfilm and Industrial Light & Magic", img:"images/george-lucas.jpg"},

		{question:"Who is this character?", answer:"R2-D2", dummyOne:"C-3PO", dummyTwo:"BB-8", dummyThree:"Wompat", tip:"Served Padmé Amidala, Anakin Skywalker and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils", img:"images/r2d2.jpg"},

		{question:"What is the original name of Darth Vader?", answer:"Anakin Skywalker", dummyOne:"Obi-Wan", dummyTwo:"Yoda", dummyThree:"Kylo Ren", tip:"Discovered as a slave on Tatooine by Qui Gon Jinn and Obi Wan Kenobi.", img:"images/anakin.jpg"},

		{question:"What is the name of Luke Skywalker's mother?", answer:"Padme", dummyOne:"Chewbacca", dummyTwo:"Ahsoka Tano", dummyThree:"Sebulba", tip:"Served as Queen and then Senator of Naboo", img:"images/padme.jpg"},

		{question:"Who said I am your father?", answer:"Darth Vader", dummyOne:"Luke Skywalker", dummyTwo:"Emperor Palpatine", dummyThree:"Yoda", tip:"Had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force.", img:"images/father.jpg"},

		{question:"What was the name of this army?", answer:"Clone Army", dummyOne:"Droid Army", dummyTwo:"Wookie Army", dummyThree:"Rebels", tip:"Was the military force of the Galactic Republic during the Clone Wars. In addition to warships and advanced weaponry, the army consisted of legions of clone troopers genetically identical soldiers bred to serve the Republic.", img:"images/clones.jpg"},

		{question:"Who is fluent in over 6 million forms of communication?", answer:"C-3PO", dummyOne:"R2-D2", dummyTwo:"BB-8", dummyThree:"Jar Jar", tip:"Droid programmed for etiquette and protocol, built by the heroic Jedi Anakin Skywalker, and a constant companion to astromech R2-D2.", img:"images/droids.jpg"},

		{question:"Who destroyed the Death Star?", answer:"Luke Skywalker", dummyOne:"Anakin Skywalker", dummyTwo:"Darth Maul", dummyThree:"Jar Jar", tip:"Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known.", img:"images/deathstar.jpg"},

		{question:"What is Chewbacca's species?", answer:"Wookiee", dummyOne:"Humanoid", dummyTwo:"Ewok", dummyThree:"Bantha", tip:"Tall, strong, and covered by soft, thick fur, are known as ferocious opponents and loyal friends. The average member of this species grows to over two meters in height and has a much longer life expectancy than a human with the average lifespan is several centuries.", img:"images/chewbacca.jpg"},

		{question:"Who is Han Solo's best friend?", answer:"Chewbacca", dummyOne:"Anakin Skywalker", dummyTwo:"Yoda", dummyThree:"Lando Calrissian", tip:"You shouldn't be asking for a tip in this question. Star Wars noob.", img:"images/han-solo.jpg"},

		{question:"Who is this character?", answer:"Jabba the Hutt", dummyOne:"Darth Maul", dummyTwo:"Darth Vader", dummyThree:"Qui-Gon", tip:"One of the galaxys most powerful gangsters, with far-reaching influence in both politics and the criminal underworld.", img:"images/jabba.jpg"},

		{question:"What is the name of the android in The Force Awakens?", answer:"BB-8", dummyOne:"Jar Jar", dummyTwo:"C-3PO", dummyThree:"R2-D2", tip:"Accompanied Poe Dameron on many missions for the Resistance, helping keep his X-wing in working order.", img:"images/bb8.jpg"}
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

	var obj = document.createElement("audio");
        obj.src="./sounds/R2D2-yeah.mp3";
        obj.volume=0.50;
        obj.autoPlay=false;
        obj.preLoad=true;
	var objCorrect = document.createElement("audio");
        objCorrect.src="./sounds/R2 taking the comlink.mp3";
        objCorrect.volume=0.50;
        objCorrect.autoPlay=false;
        objCorrect.preLoad=true;
	var objIncorrect = document.createElement("audio");
        objIncorrect.src="./sounds/R2 beeping 5.mp3";
        objIncorrect.volume=0.5;
        objIncorrect.autoPlay=false;
        objIncorrect.preLoad=true;
	var objSettings = document.createElement("audio");
        objSettings.src="./sounds/R2 taking to himself.mp3";
        objSettings.volume=0.5;
        objSettings.autoPlay=false;
        objSettings.preLoad=true;
	var objPlay = document.createElement("audio");
        objPlay.src="./sounds/R2 taking the comlink.mp3";
        objPlay.volume=0.5;
        objPlay.autoPlay=false;
        objPlay.preLoad=true;

  $(".tipbtn").click(function() {
            obj.play();
        });
	$("#settings-play").click(function() {
            objSettings.play();
        });
	$("#letsPLay").click(function() {
            objPlay.play();
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

  $("#letsPlayEasy").click(function() {
    var empireName = $('#empire-name').val();
    var rebelName = $('#rebel-name').val();
    window.open("intro.html?empireName=" + empireName + "&rebelName=" + rebelName, "_self");
  });

  $("#letsPlayMedium").click(function() {
    var empireName = $('#empire-name-medium').val();
    var rebelName = $('#rebel-name-medium').val();
    window.open("intro-medium.html?empireName=" + empireName + "&rebelName=" + rebelName, "_self");
  });

  $("#letsPlayHard").click(function() {
    var empireName = $('#empire-name-hard').val();
    var rebelName = $('#rebel-name-hard').val();
    window.open("intro-hard.html?empireName=" + empireName + "&rebelName=" + rebelName, "_self");
  });

  $('#empire-user').text("Commander " + empireName);
  $('#rebel-user').text("Admiral " + rebelName);

	$('.simple-timer').backward_timer({
  seconds: 20,
	format: 'm%:s%',
	on_exhausted: function(timer) {
    $( ".submit" ).trigger( "click" );
  }
	});
	$('.simple-timer').backward_timer('start');

	$("#mute").click(function() {
		$('audio').each(function(){
			this.pause(); // Stop playing
			this.currentTime = 0; // Reset time
			});
    });




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
