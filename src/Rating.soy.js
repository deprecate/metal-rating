/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Rating.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Rating.
 */

if (typeof Templates.Rating == 'undefined') { Templates.Rating = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Rating.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="rating component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + ((opt_data.label) ? Templates.Rating.rateLabel(opt_data, null, opt_ijData) : '') + Templates.Rating.rateItems(opt_data, null, opt_ijData) + Templates.Rating.rateInput(opt_data, null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.Rating.render.soyTemplateName = 'Templates.Rating.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Rating.rateLabel = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rateLabel" class="rate-label">' + soy.$$escapeHtml(opt_data.label) + '</span>');
};
if (goog.DEBUG) {
  Templates.Rating.rateLabel.soyTemplateName = 'Templates.Rating.rateLabel';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Rating.rateItems = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rateItems" class="rating-items">';
  var itemList24 = opt_data.items;
  var itemListLen24 = itemList24.length;
  for (var itemIndex24 = 0; itemIndex24 < itemListLen24; itemIndex24++) {
    var itemData24 = itemList24[itemIndex24];
    output += '<a data-index="' + soy.$$escapeHtmlAttribute(itemIndex24) + '" title="' + soy.$$escapeHtmlAttribute(itemData24.title) + '" class="' + soy.$$escapeHtmlAttribute(itemIndex24 <= opt_data.onStartIndex ? opt_data.cssClasses.on : opt_data.cssClasses.off) + '"></a>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Rating.rateItems.soyTemplateName = 'Templates.Rating.rateItems';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Rating.rateInput = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<input id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rateInput" type="text" name="' + soy.$$escapeHtmlAttribute(opt_data.inputHiddenName) + '" value="' + soy.$$escapeHtmlAttribute(opt_data.rate) + '"  />');
};
if (goog.DEBUG) {
  Templates.Rating.rateInput.soyTemplateName = 'Templates.Rating.rateInput';
}

Templates.Rating.render.params = ["elementClasses","label","id"];
Templates.Rating.rateLabel.params = ["label","id"];
Templates.Rating.rateItems.params = ["cssClasses","onStartIndex","items","id"];
Templates.Rating.rateInput.params = ["rate","inputHiddenName","id"];

class Rating extends Component {}
Rating.RENDERER = SoyRenderer;
SoyAop.registerTemplates('Rating');
export default Rating;
/* jshint ignore:end */
