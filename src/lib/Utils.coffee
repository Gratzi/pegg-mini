
Utils =
  getRealViewportWidth: () ->
    # console.log 'getViewportWidth', document.documentElement.clientWidth, window.innerWidth
    Math.max document.documentElement.clientWidth, window.innerWidth || 0

  getRealViewportHeight: () ->
    # console.log 'getViewportHeight', document.documentElement.clientHeight, window.innerHeight
    if @isFacebookApp()
      window.innerHeight - 115
    else
      Math.max document.documentElement.clientHeight, window.innerHeight || 0

  isFacebookApp: () ->
    ua = navigator.userAgent || navigator.vendor || window.opera
    (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1)

  getViewportWidth: () ->
    if @getOrientation() is 'portrait' then @getRealViewportWidth()
    else screen.height || @getRealViewportHeight()

  getViewportHeight: () ->
    if @getOrientation() is 'portrait' then @getRealViewportHeight()
    else screen.width - (screen.height - @getRealViewportHeight()) || @getRealViewportWidth()

  getOrientation: ->
    if @getRealViewportWidth() > @getRealViewportHeight() then 'landscape' else 'portrait'


module.exports = Utils
