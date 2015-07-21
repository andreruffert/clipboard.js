# clipboard.js (beta)

> Copy to the clipboard with JavaScript \o/

This is a work in progress so the exported functions could change at any time before the first stable release (1.0.0).

## Browser Support
* IE10+ (although [this document](https://msdn.microsoft.com/en-us/library/ms537834(v=vs.85).aspx) indicates some support was there from IE5.5+).
* [Google Chrome 43+ (~April 2015)](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands)
* [Mozilla Firefox 41+ (shipping ~September 2015)](https://developer.mozilla.org/en-US/Firefox/Releases/41#Interfaces.2FAPIs.2FDOM)
* [Opera 29+ (based on Chromium 42, ~April 2015)](https://dev.opera.com/blog/opera-29/#cut-and-copy-commands)

## Usage

```js
var myElement = document.querySelector('.myElement');

clipboard(myElement, 'copy');
//=> 'Some text'

clipboard(myElement, 'copy', function(err, copiedText) {
	//...
});
//=> 'Some text'

var myFormElement = document.querySelector('.myFormElement');

clipboard(myFormElement, 'cut');
//=> 'Value from the form element'

clipboard(myFormElement, 'cut', function(err, copiedText) {
	//...
});
//=> 'Value from the form element'
```

## API

### clipboard(element, cmd, [callback])

Returns the copied text.

#### element
_Required_

Type: `Element`

Element which text will be copied.

#### cmd
_Required_

Type: `String`

Currently supports 'cut' and 'copy'.

#### callback
Type: `Function`

```
function(err, copiedText) {}
```

## License
MIT © [André Ruffert](http://andreruffert.com)
