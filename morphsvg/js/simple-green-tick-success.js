$(function(){

  // $('.sprinkle').each((i, e) => {
    // debugger
  //   anime({
  //     targets: `.${$(e).attr('class')}`,
  //     // scale: {
  //     //   value: [1,0],
  //     //   duration: 5000,
  //     //   easing: 'linear',
  //     // },
  //     translateX: {
  //       value: [0 , -30],
  //       duration: 2500,
  //       easing: 'linear',
  //     },
  //     translateY: {
  //       value: [0 , 30],
  //       duration: 2500,
  //       easing: 'linear',
  //     },
  //     // easing: 'easeInOutSine',
  //     // duration: 2500,
  //     // delay: 500,
  //     loop: true
  //   });

  // })

  anime({
    targets: '.circle-border',
    easing: 'easeInOutSine',
    opacity: [0, 1],
    duration: 500,
    delay: 900,
    loop: false
  });

  anime({
    targets: '.circle',
    easing: 'easeOutElastic',
    scale: [0, 1],
    duration: 500,
    delay: 0,
    loop: false
  });


  anime({
    targets: '.tickmark',
    easing: 'easeInOutSine',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500,
    delay: 300,
    loop: false
  });
  

})