particlesJS.load('particles', 'assets/js/particles.json', function() {
  // console.log('particles.js config loaded');
});

function hack() {
  console.log('%cHi there!', 'color:white; background:#439FEF; font-size: 16pt');
  console.log('%cLove to hack? Connect with me on LinkedIn: ming.fyi/linkedin or Email me at popoway@popoway.cloud', 'font-size: 12pt');
}

function newTab() {
  const anchor = document.querySelectorAll('a');
  var a;
  for (a of anchor) {
    a.target = '_blank';
  }
  const img = document.querySelectorAll('.project-screenshot');
  var i;
  for (i of img) {
    i.addEventListener('click', (event) => {
      window.open(event.target.src, '_blank');
    });
  }

}

window.addEventListener('DOMContentLoaded', (event) => {
  newTab();
  hack();
});
