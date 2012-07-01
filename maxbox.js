/*!
 * MaxBox image maximizer v0.8.0
 * Copyright 2012, @irohiroki
 * Released under the MIT License
 */
(function() {
  var MaxBox;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MaxBox = (function() {
    var defaults;

    defaults = {
      bgClass: 'maxbox-bg',
      hideOn: 'click',
      hideTrnSpeed: 'fast',
      imgClass: 'maxbox-img',
      showOn: 'click',
      showTrnSpeed: 'fast',
      srcAttr: 'href',
      srcElem: 'a'
    };

    function MaxBox(target, options) {
      this.show = __bind(this.show, this);
      this.hide = __bind(this.hide, this);
      this.fit = __bind(this.fit, this);      this.target = $(target);
      this.options = $.extend(defaults, options);
      this.src = this.target.closest(this.options.srcElem).attr(this.options.srcAttr);
      this.killAddressBar();
      this.img = $('<img>').addClass(this.options.imgClass).attr('src', this.src);
      this.box = $('<div>').addClass(this.options.bgClass).append(this.img).hide();
      this.target.on(this.options.showOn, this.show);
      $(window).on('resize', this.fit);
    }

    MaxBox.prototype.fit = function() {
      this.box.height(window.innerHeight).css('line-height', "" + window.innerHeight + "px");
      if (window.innerWidth < window.innerHeight) {
        return this.img.width(window.innerWidth).height('auto');
      } else {
        return this.img.width('auto').height(window.innerHeight);
      }
    };

    MaxBox.prototype.hide = function(e) {
      var _this = this;
      e.preventDefault();
      return this.box.fadeOut(this.options.hideTrnSpeed, function() {
        return _this.box.remove();
      });
    };

    MaxBox.prototype.killAddressBar = function() {
      var a;
      a = this.target.closest('a');
      if (a.size()) {
        a.data('href', a.attr('href'));
        return a.attr('href', '#');
      }
    };

    MaxBox.prototype.show = function(e) {
      e.preventDefault();
      this.fit();
      return this.box.appendTo('body').fadeIn(this.options.showTrnSpeed).on(this.options.hideOn, this.hide);
    };

    return MaxBox;

  })();

  $.fn.maxbox = function(options) {
    return this.each(function() {
      return new MaxBox(this, options);
    });
  };

}).call(this);
