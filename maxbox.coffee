###
MaxBox image maximizer v0.8.0
Copyright 2012, @irohiroki
Released under the MIT License
###
class MaxBox
  defaults =
    bgClass:      'maxbox-bg'
    hideOn:       'click'
    hideTrnSpeed: 'fast'
    imgClass:     'maxbox-img'
    showOn:       'click'
    showTrnSpeed: 'fast'
    srcAttr:      'href'
    srcElem:      'a'

  constructor: (target, options) ->
    @target = $(target)
    @options = $.extend defaults, options
    @src = @target.closest(@options.srcElem).attr(@options.srcAttr)
    @killAddressBar()
    @img = $('<img>')
      .addClass(@options.imgClass)
      .attr('src', @src)
    @box = $('<div>')
      .addClass(@options.bgClass)
      .append(@img)
      .hide()
    @target.on @options.showOn, @show
    $(window).on 'resize', @fit

  fit: =>
    @box
      .height(window.innerHeight)
      .css('line-height', "#{window.innerHeight}px")
    if window.innerWidth < window.innerHeight
      @img.width(window.innerWidth).height('auto')
    else
      @img.width('auto').height(window.innerHeight)

  hide: (e) =>
    e.preventDefault()
    @box.fadeOut @options.hideTrnSpeed, =>
      @box.remove()

  killAddressBar: ->
    a = @target.closest('a')
    if a.size()
      a.data('href', a.attr('href'))
      a.attr('href', '#')

  show: (e) =>
    e.preventDefault()
    @fit()
    @box
      .appendTo('body')
      .fadeIn(@options.showTrnSpeed)
      .on @options.hideOn, @hide

$.fn.maxbox = (options) ->
  this.each ->
    new MaxBox(this, options)
