let shapes = [
  {
      d: "m 109.93436,126.34374 -9.28173,0.29027 -7.254724,3.01702 0.768063,-8.75257 -4.075354,-7.78389 8.75257,0.76807 7.783885,-4.07536 -0.76806,9.28174 z"
  },
  {
      d: "m 109.93436,126.34374 -9.8109,-3.94306 -6.725554,7.25035 5.001396,-8.75257 -8.308687,-7.78389 9.281737,5.0014 7.254718,-8.30869 -5.00139,10.34007 z"
  }
]
    
var morph1 = anime({
    targets: '.eight-square',
    d: [
        {value: shapes[0].d},
        {value: shapes[1].d}
    ],
    duration: 4000,
    direction: 'alternate',
    autoplay: true,
    easing: 'linear',
    elasticity: 100,
    loop: true
});