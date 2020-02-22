$(window).on("load", () => {
 
  var term01 = $('.wheel-03 .term01');
var term02 = $('.wheel-03 .term02');
var term03 = $('.wheel-03 .term03');
var term04 = $('.wheel-03 .term04');
var term05 = $('.wheel-03 .term05');
var term06 = $('.wheel-03 .term06');
var term07 = $('.wheel-03 .term07');
var term08 = $('.wheel-03 .term08');
var term09 = $('.wheel-03 .term09');
var term10 = $('.wheel-03 .term10');
var term11 = $('.wheel-03 .term11');
var term12 = $('.wheel-03 .term12');
var term13 = $('.wheel-03 .term13');

var stepFrame = 0.5


  // css classes
tl01 = new TimelineLite();
tl01
.to(term01, stepFrame, {
    // css: {className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })

tl02 = new TimelineLite();
tl02
.to(term02, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term02, stepFrame, {
    // css:{className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  });

tl03 = new TimelineLite();
tl03
.to(term03, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term03, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term03, stepFrame, {
    // css:{className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  });

tl04 = new TimelineLite();
tl04
.to(term04, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term04, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term04, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term04, stepFrame, {
    // css:{className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  });


tl05 = new TimelineLite();
tl05
.to(term05, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term05, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term05, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term05, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term05, stepFrame, {
    // css:{className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  });

tl06 = new TimelineLite();
tl06
.to(term06, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term06, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term06, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term06, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term06, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term06, stepFrame, {
    // css:{className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  });

tl07 = new TimelineLite();
tl07
.to(term07, stepFrame, {
    // css: {className: 'term term06'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term07, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term07, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term07, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term07, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term07, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term07, stepFrame, {
    // css:{className: 'term term00'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  });

tl08 = new TimelineLite();
tl08
.to(term08, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term08, stepFrame, {
    // css: {className: 'term term06'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term08, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term08, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term08, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term08, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term08, stepFrame, {
    // css: {className: 'term term01'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
;

tl09 = new TimelineLite();
tl09
.to(term09, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term09, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term09, stepFrame, {
    // css: {className: 'term term06'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term09, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term09, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term09, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term09, stepFrame, {
    // css: {className: 'term term02'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
;

tl10 = new TimelineLite();
tl10
.to(term10, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term10, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term10, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term10, stepFrame, {
    // css: {className: 'term term06'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term10, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term10, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term10, stepFrame, {
    // css: {className: 'term term03'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
;

tl11 = new TimelineLite();
tl11
.to(term11, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term11, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term11, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term11, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term11, stepFrame, {
    // css: {className: 'term term06'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term11, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term11, stepFrame, {
    // css: {className: 'term term04'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
;

tl12 = new TimelineLite();
tl12
.to(term12, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term12, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term12, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term12, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term12, stepFrame, {
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term12, stepFrame, {
    // css: {className: 'term term06'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
.to(term12, stepFrame, {
    // css: {className: 'term term05'},
    attr: {y: '-=75'},
    ease: Linear.easeNone
  })
;

var wheelTurn = 0.3;

wheel03 = new TimelineMax({repeat: 20, timeScale: 2});
wheel03.add(tl01, 0);
wheel03.add(tl02, 0);
wheel03.add(tl03, 0);
wheel03.add(tl04, 0);
wheel03.add(tl05, 0);
wheel03.add(tl06, 0);
wheel03.add(tl07, 0);
wheel03.add(tl08, 0);
wheel03.add(tl09, 0);
wheel03.add(tl10, 0);
wheel03.add(tl11, 0);
wheel03.add(tl12, 0);
wheel03.play();

TweenMax.to(wheel03, 0.1, {timeScale: 6, ease: Circ.easeOut})
TweenMax.to(wheel03, 4.9, {timeScale: 0, delay: 6, ease: Circ.easeOut})
});