var pathEls = document.querySelectorAll('path');

console.log(pathEls.length);

for (var i = 0; i < pathEls.length; i++) {
  
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });


	var colors = anime({
		targets: '#colors .el',
		translateX: 250,
		backgroundColor: [
		  {value: '#FFF'}, // Or #FFFFFF
		  {value: 'rgb(255, 0, 0)'},
		  {value: 'hsl(100, 60%, 60%)'}
		],
		easing: 'linear',
		direction: 'alternate',
		duration: 2000
	  });
}