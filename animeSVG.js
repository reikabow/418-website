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
}





var penner = anime.timeline();
penner
  .add({
    targets: '#penner .linear', translateX: 250, offset: 0,
    easing: 'linear'
  })
  .add({
    targets: '#penner .InQuad', translateX: 250, offset: 0,
    easing: 'easeInQuad'
  })
  .add({
    targets: '#penner .InCubic', translateX: 250, offset: 0,
    easing: 'easeInCubic'
  })
  .add({
    targets: '#penner .InQuart', translateX: 250, offset: 0,
    easing: 'easeInQuart'
  })
  .add({
    targets: '#penner .InQuint', translateX: 250, offset: 0,
    easing: 'easeInQuint'
  })
  .add({
    targets: '#penner .InSine', translateX: 250, offset: 0,
    easing: 'easeInSine'
  })
  .add({
    targets: '#penner .InExpo', translateX: 250, offset: 0,
    easing: 'easeInExpo'
  })
  .add({
    targets: '#penner .InCirc', translateX: 250, offset: 0,
    easing: 'easeInCirc'
  })
  .add({
    targets: '#penner .InBack', translateX: 250, offset: 0,
    easing: 'easeInBack'
  })
  .add({
    targets: '#penner .OutQuad', translateX: 250, offset: 0,
    easing: 'easeOutQuad'
  })
  .add({
    targets: '#penner .OutCubic', translateX: 250, offset: 0,
    easing: 'easeOutCubic'
  })
  .add({
    targets: '#penner .OutQuart', translateX: 250, offset: 0,
    easing: 'easeOutQuart'
  })
  .add({
    targets: '#penner .OutQuint', translateX: 250, offset: 0,
    easing: 'easeOutQuint'
  })
  .add({
    targets: '#penner .OutSine', translateX: 250, offset: 0,
    easing: 'easeOutSine'
  })
  .add({
    targets: '#penner .OutExpo', translateX: 250, offset: 0,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#penner .OutCirc', translateX: 250, offset: 0,
    easing: 'easeOutCirc'
  })
  .add({
    targets: '#penner .OutBack', translateX: 250, offset: 0,
    easing: 'easeOutBack'
  })
  .add({
    targets: '#penner .InOutQuad', translateX: 250, offset: 0,
    easing: 'easeInOutQuad'
  })
  .add({
    targets: '#penner .InOutCubic', translateX: 250, offset: 0,
    easing: 'easeInOutCubic'
  })
  .add({
    targets: '#penner .InOutQuart', translateX: 250, offset: 0,
    easing: 'easeInOutQuart'
  })
  .add({
    targets: '#penner .InOutQuint', translateX: 250, offset: 0,
    easing: 'easeInOutQuint'
  })
  .add({
    targets: '#penner .InOutSine', translateX: 250, offset: 0,
    easing: 'easeInOutSine'
  })
  .add({
    targets: '#penner .InOutExpo', translateX: 250, offset: 0,
    easing: 'easeInOutExpo'
  })
  .add({
    targets: '#penner .InOutCirc', translateX: 250, offset: 0,
    easing: 'easeInOutCirc'
  })
  .add({
    targets: '#penner .InOutBack', translateX: 250, offset: 0,
    easing: 'easeInOutBack'
  });