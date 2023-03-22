$(function(){

  $('.sprinkle').each((i, e) => {
    debugger
    anime({
      targets: `.${$(e).attr('class')}`,
      // scale: {
      //   value: [1,0],
      //   duration: 5000,
      //   easing: 'linear',
      // },
      translateX: {
        value: [0 , -30],
        duration: 2500,
        easing: 'linear',
      },
      translateY: {
        value: [0 , 30],
        duration: 2500,
        easing: 'linear',
      },
      // easing: 'easeInOutSine',
      // duration: 2500,
      // delay: 500,
      loop: true
    });

  })
  

})