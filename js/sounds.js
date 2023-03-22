import {
  buttonCoffeShope,
  buttonFirePlace,
  buttonForest,
  buttonRain,
  coffeeShopVolume,
  firePlaceVolume,
  forestVolume,
  rainVolume
} from "./elements.js"

export default function Sound() {
  const forestAudio = new Audio('./songs/forest.wav')
  const rainAudio = new Audio('./songs/rain.wav')
  const coffeeShopAudio = new Audio('./songs/coffeeShop.wav')
  const firePlaceAudio = new Audio('./songs/firePlace.wav')
  const finishedAudio = new Audio('./songs/finished.wav')

  function setVolume(value) {
    forestAudio.volume = value / 100
    rainAudio.volume = value / 100
    coffeeShopAudio.volume = value / 100
    firePlaceAudio.volume = value / 100
  }

  function setForestAudio() {
    forestVolume.oninput = () => setVolume(forestVolume.value)
    forestVolume.onchange = () => setVolume(forestVolume.value)

    buttonForest.classList.add('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeShope.classList.remove('selected')
    buttonFirePlace.classList.remove('selected')

    forestAudio.play()
    forestAudio.loop = true
    rainAudio.pause()
    coffeeShopAudio.pause()
    firePlaceAudio.pause()

    forestVolume.classList.add('play')
    rainVolume.classList.remove('play')
    coffeeShopVolume.classList.remove('play')
    firePlaceVolume.classList.remove('play')

  }
  function setRainAudio() {
    rainVolume.oninput = () => setVolume(rainVolume.value)
    rainVolume.onchange = () => setVolume(rainVolume.value)

    buttonForest.classList.remove('selected')
    buttonRain.classList.add('selected')
    buttonCoffeShope.classList.remove('selected')
    buttonFirePlace.classList.remove('selected')

    forestAudio.pause()
    rainAudio.play()
    rainAudio.loop = true
    coffeeShopAudio.pause()
    firePlaceAudio.pause()

    forestVolume.classList.remove('play')
    rainVolume.classList.add('play')
    coffeeShopVolume.classList.remove('play')
    firePlaceVolume.classList.remove('play')
  }
  function setCoffeeShopAudio() {
    coffeeShopVolume.oninput = () => setVolume(coffeeShopVolume.value)
    coffeeShopVolume.onchange = () => setVolume(coffeeShopVolume.value)

    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeShope.classList.add('selected')
    buttonFirePlace.classList.remove('selected')

    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.play()
    coffeeShopAudio.loop = true
    firePlaceAudio.pause()

    forestVolume.classList.remove('play')
    rainVolume.classList.remove('play')
    coffeeShopVolume.classList.add('play')
    firePlaceVolume.classList.remove('play')
  }
  function setFirePlaceAudio() {
    firePlaceVolume.oninput = () => setVolume(firePlaceVolume.value)
    firePlaceVolume.onchange = () => setVolume(firePlaceVolume.value)

    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeShope.classList.remove('selected')
    buttonFirePlace.classList.add('selected')

    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    firePlaceAudio.play()
    firePlaceAudio.loop = true

    forestVolume.classList.remove('play')
    rainVolume.classList.remove('play')
    coffeeShopVolume.classList.remove('play')
    firePlaceVolume.classList.add('play')
  }

  function stopAudio() {
    forestAudio.pause()
    forestAudio.currentTime = 0
    rainAudio.pause()
    rainAudio.currentTime = 0
    coffeeShopAudio.pause()
    coffeeShopAudio.currentTime = 0
    firePlaceAudio.pause()
    firePlaceAudio.currentTime = 0

  }
  
  function finishedAudioOff() {
    finishedAudio.volume = 0
  }
  function finishedAudioOn() {
    finishedAudio.volume = 1
  }
  function finishedAudioPlay() {
    finishedAudio.play()
  }

  return {
    setForestAudio,
    setRainAudio,
    setCoffeeShopAudio,
    setFirePlaceAudio,
    stopAudio,
    finishedAudioOff,
    finishedAudioOn,
    finishedAudioPlay,
    setVolume
  }
}