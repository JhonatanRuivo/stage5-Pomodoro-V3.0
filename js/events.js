
import {
  buttonCoffeShope, buttonDarkMode, buttonDownMinutes, buttonFirePlace, buttonForest, buttonLightMode, buttonPlay, buttonRain, buttonStop, buttonUpMinutes, minutesDisplay, display, backgroundColor, controlsColor,
  forestVolume, rainVolume, coffeeShopVolume, firePlaceVolume,
} from './elements.js'
import Sound from './sounds.js'

export default function Events({ controls, timer, }) {
  let sounds = Sound()

  buttonUpMinutes.addEventListener('click', () => {
    if (minutesDisplay.textContent >= 60) {
      minutesDisplay.textContent = 0
      controls.upMinutes()
    } else
      controls.upMinutes()
  })
  buttonDownMinutes.addEventListener('click', () => {
    if (minutesDisplay.textContent <= 1) {
      minutesDisplay.textContent = 60
    } else
      controls.downMinutes()
  })
  buttonPlay.addEventListener('click', () => {
    timer.countdown()
    sounds.finishedAudioOn()
  })
  buttonStop.addEventListener('click', () => {
    timer.updateDisplay()
    sounds.stopAudio()
  })
  buttonForest.addEventListener('click', () => {
    sounds.setForestAudio()

  })
  buttonRain.addEventListener('click', () => {
    sounds.setRainAudio()
  })
  buttonCoffeShope.addEventListener('click', () => {
    sounds.setCoffeeShopAudio()
  })
  buttonFirePlace.addEventListener('click', () => {
    sounds.setFirePlaceAudio()
  })
  buttonLightMode.addEventListener('click', () => {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    
    backgroundColor.classList.add('darkOrLight')

    display.classList.add('darkOrLight')
    controlsColor.classList.add('darkOrLight')

    buttonForest.classList.add('darkOrLight')
    buttonRain.classList.add('darkOrLight')
    buttonCoffeShope.classList.add('darkOrLight')
    buttonFirePlace.classList.add('darkOrLight')

    forestVolume.classList.add('darkOrLight')
    rainVolume.classList.add('darkOrLight')
    coffeeShopVolume.classList.add('darkOrLight')
    firePlaceVolume.classList.add('darkOrLight')
  })
  buttonDarkMode.addEventListener('click', () => {
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')

    backgroundColor.classList.remove('darkOrLight')

    display.classList.remove('darkOrLight')
    controlsColor.classList.remove('darkOrLight')
    
    buttonForest.classList.remove('darkOrLight')
    buttonRain.classList.remove('darkOrLight')
    buttonCoffeShope.classList.remove('darkOrLight')
    buttonFirePlace.classList.remove('darkOrLight')

    forestVolume.classList.remove('darkOrLight')
    rainVolume.classList.remove('darkOrLight')
    coffeeShopVolume.classList.remove('darkOrLight')
    firePlaceVolume.classList.remove('darkOrLight')
  })
}