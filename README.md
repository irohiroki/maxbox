MaxBox image maximizer
======================

MaxBox is a jQuery plugin that enables to show images in the maximized size (fit to screen).

Feature
-------
- Show a maximazed image in a overlay on specified event (default `click`)
- Return on an other event (also default to `click`)
- Suppress the address bar from popping on iPhone
- Customizable

Usage
-----
```html
<a href="full.jpg">
  <img src="thumbnail.jpg" alt="">
</a>
```

```javascript
$('img').maxbox();
```

Options
-------
### Events
- `showOn`"show" event type.
- `hideOn` "hide" event type.
- `showTrnSpeed` Transition speed on show. default `fast`.
- `hideTrnSpeed` Transition speed on hide. default `fast`.

### CSS classes
- `bgClass` class for background layer. default `maxbox-bg`.
- `imgClass` class for image elements. default `maxbox-img`.

### Attributes
- `srcElem` HTML element from which MaxBox gets the `src` attribute of the image. default: closest `a`.
- `srcAttr` Attribute name from which MaxBox gets the `src` attribute of the image. default: `href`.

License
-------
MIT License.
