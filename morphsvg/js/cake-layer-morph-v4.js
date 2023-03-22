let shapes = [
  {
    d: "m 41.311017,175.66959 c 42.091251,0.16611 84.574153,0.23123 127.377963,0 v 10.77232 c -41.95275,0.0817 -84.41728,0.40387 -127.377963,0 z"
  },
  {
    d: "m 41.311017,286.26552 c 42.091251,0.16611 84.574153,0.23123 127.377963,0 v 10.77232 c -41.95275,0.0817 -84.41728,0.40387 -127.377963,0 z"
  },
  {
    d: "m 41.311017,261.39465 c 42.076802,14.10265 84.589273,12.64462 127.377963,0 v 10.77232 c -42.29006,13.75931 -84.792278,14.51043 -127.377963,0 z"
  },
  {
    d: "m 41.311017,280.44471 c 42.076574,-5.42105 84.589333,-4.14116 127.377963,0 v 10.77232 c -43.40419,-4.76877 -85.816155,-4.72807 -127.377963,0 z"
  }
]



var morph1 = anime({
  targets: '.cake-layer',
  d: [
      {value: shapes[0].d},
      {value: shapes[1].d},
  ],
  duration: 100,
  // direction: 'alternate',
  autoplay: true,
  easing: 'linear',
  elasticity: 100,
  // loop: true
});

var morph2 = anime({
  targets: '.cake-layer',
  d: [
      {value: shapes[1].d},
      {value: shapes[2].d},
      {value: shapes[3].d},
      // {value: shapes[4].d},
      {value: shapes[1].d}
  ],
  delay: 1000,
  duration: 1500,
  // direction: 'alternate',
  autoplay: true,
  easing: 'linear',
  elasticity: 100,
  // loop: true
});