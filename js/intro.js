setTimeout(function(){
    document.getElementById("mySound").play();
}, 2500);





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

  $('#maythe').text("May the force be with you " + "Admiral " + rebelName + "...");


});
