/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Rating.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Rating.
 * @public
 */

goog.module('Rating.incrementaldom');

var soy = goog.require('soy');
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'rating component' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    if (opt_data.label) {
      ie_open('span', null, null,
          'class', 'rate-label');
        itext((goog.asserts.assert((opt_data.label) != null), opt_data.label));
      ie_close('span');
    }
    ie_open('div', null, null,
        'class', 'rating-items');
      var optionLimit12 = opt_data.options.length;
      for (var option12 = 0; option12 < optionLimit12; option12++) {
        ie_void('button', null, null,
            'type', 'button',
            'data-index', option12,
            'title', opt_data.options[option12].title,
            'class', 'rating-item ' + (option12 <= opt_data.selectedIndex ? opt_data.cssClasses.on : opt_data.cssClasses.off));
      }
    ie_close('div');
    ie_open('input', null, null,
        'type', 'text',
        'value', opt_data.rating ? opt_data.rating.value : '');
    ie_close('input');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Rating.render';
}

exports.render.params = ["elementClasses","label","cssClasses","selectedIndex","options","rating"];
templates = exports;
return exports;

});

class Rating extends Component {}
Soy.register(Rating, templates);
export default templates;
export { Rating, templates };
/* jshint ignore:end */
