$('[id^="line"]').each((index, el)  => {

  console.log(`#${$(el).attr('id')}`)

  anime({
    targets: `#${$(el).attr('id')}`,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 750,
    delay: () => 2000 + (25 * index),
    // direction: 'alternate',
    loop: false
  });
})

$('[class^="el-shape-"]').each((index, el)  => {
  anime({
    targets: `.${$(el).attr('class')}`,
    easing: 'easeInOutSine',
    duration: 500,
    delay: () => 1000 + (100 * index),
    scale: [0,1],
    loop: false
  });
})


// anime({
//   targets: '.el-shape',
//   // matrix: [0.49727775,0,0,0.53811979,68.786166,70.171138],
//   easing: 'easeInOutSine',
//   transformOrigin: '50% 50%',
//   duration: 500,
//   scale: [0,1],
//   // translateX: 'none',
//   // translateY: 'none',
//   // trasform: scale(0,1),
//   // direction: 'alternate',
//   loop: true
// });


anime({
  targets: '.shape_circle',
  easing: 'easeInOutSine',
  duration: 500,
  delay: 2500,
  scale: [0,1],
  loop: false
});

anime({
  targets: '.tick',
  // matrix: [0.49727775,0,0,0.53811979,68.786166,70.171138],
  easing: 'easeInOutSine',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 1000,
  delay: 2500,
  loop: false
});