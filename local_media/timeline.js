function doFirst(){
	barSize=600;
	timeline=document.getElementById('timeline');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');

	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);	

}

function playOrPause(){
	if(!timeline.paused && !timeline.ended){
		timeline.pause();
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
		
	}else{
		timeline.play();
		playButton.innerHTML='Pause';
		updateBar=setInterval(update, 50);
		
	}

}

function update(){
	if(!timeline.ended){
		var size=parseInt(timeline.currentTime*barSize/timeline.duration);
		progressBar.style.width=size+'px';
		
		}else{
			progressBar.style.width='0px';
			playButton.innerHTML='Play';
			window.clearInterval(updateBar);
			
	}

}

function clickedBar(e){
	if(!timeline.paused && !timeline.ended){
		var mouseX=e.pageX-defaultBar.offsetLeft;
		var newtime=mouseX*timeline.duration/barSize;
		timeline.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	
	}

}

window.addEventListener('load', doFirst, false);