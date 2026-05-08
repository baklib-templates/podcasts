import * as Turbo from "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import Alpine from "alpinejs"

window.Turbo = Turbo

const stimulus = Application.start()
window.Stimulus = stimulus

window.Alpine = Alpine

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function toNumber(value, fallback = 0) {
  let n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

document.addEventListener('alpine:init', () => {
  Alpine.store('player', {
    episode: null,
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    seeking: null,
    playbackRate: 1,

    _audio: null,

    init() {
      this._audio = document.getElementById('js-audio-player')
      if (!this._audio) return

      this._audio.addEventListener('play', () => {
        this.playing = true
      })
      this._audio.addEventListener('pause', () => {
        this.playing = false
      })
      this._audio.addEventListener('timeupdate', () => {
        this.currentTime = Math.floor(this._audio.currentTime || 0)
        if (this.seeking === null) return
      })
      this._audio.addEventListener('durationchange', () => {
        this.duration = Math.floor(this._audio.duration || 0)
      })

      this._audio.muted = this.muted
      this._audio.playbackRate = this.playbackRate
    },

    _ensureInit() {
      if (!this._audio) this.init()
    },

    setEpisode(episode) {
      if (!episode || !episode.audioSrc) return
      this._ensureInit()
      if (!this._audio) return

      let shouldSwap = this._audio.currentSrc !== episode.audioSrc
      this.episode = episode

      if (shouldSwap) {
        let rate = this._audio.playbackRate || this.playbackRate
        this._audio.src = episode.audioSrc
        this._audio.load()
        this._audio.pause()
        this._audio.playbackRate = rate
        this._audio.currentTime = 0
        this.currentTime = 0
        this.duration = Math.floor(this._audio.duration || 0)
      }
    },

    play(episode = null) {
      this._ensureInit()
      if (!this._audio) return
      if (episode) this.setEpisode(episode)
      if (!this.episode || !this.episode.audioSrc) return
      this._audio.play().catch(() => {})
    },

    pause() {
      this._ensureInit()
      this._audio?.pause()
    },

    toggle(episode = null) {
      if (episode) {
        let isSame = this.episode && this.episode.audioSrc === episode.audioSrc
        if (!isSame) {
          this.play(episode)
          return
        }
      }
      this.playing ? this.pause() : this.play()
    },

    seek(time) {
      this._ensureInit()
      if (!this._audio) return
      let t = clampNumber(toNumber(time), 0, this.duration || 0)
      this._audio.currentTime = t
      this.currentTime = Math.floor(t)
    },

    seekBy(amount) {
      this._ensureInit()
      if (!this._audio) return
      this.seek((this._audio.currentTime || 0) + toNumber(amount))
    },

    setSeeking(value) {
      this.seeking = toNumber(value)
    },

    commitSeek(value) {
      let v = toNumber(value)
      this.seeking = null
      this.seek(v)
      if (this.playing) this.play()
    },

    toggleMute() {
      this._ensureInit()
      this.muted = !this.muted
      if (this._audio) this._audio.muted = this.muted
    },

    setPlaybackRate(rate) {
      this._ensureInit()
      let r = clampNumber(toNumber(rate, 1), 0.5, 3)
      this.playbackRate = r
      if (this._audio) this._audio.playbackRate = r
    },

    cyclePlaybackRate() {
      let steps = [1, 1.25, 1.5, 2]
      let idx = steps.indexOf(this.playbackRate)
      this.setPlaybackRate(steps[(idx + 1) % steps.length])
    },
  })
})

Alpine.start()
