const lastStroke = document.querySelector('.wifi-stroke1')
const wifiDot = document.querySelector('.wifi-dot')
let counter = 0

isEvenNumber = number => (number % 2) === 0 

lastStroke.addEventListener('animationend' , () => {
  if(!isEvenNumber(counter)) return
  const SVGElem = document.querySelector('#wifiSVGAnimation')
  SVGElem.classList.remove('wifianimateUp')
  SVGElem.classList.add('wifianimateDown')
  counter += 1;
})

wifiDot.addEventListener('animationend' , () => {
  if(isEvenNumber(counter)) return
  const SVGElem = document.querySelector('#wifiSVGAnimation')
  SVGElem.classList.remove('wifianimateDown')
  SVGElem.classList.add('wifianimateUp')
  counter += 1;
})