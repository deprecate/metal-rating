/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import SoyAop from 'metal-soy/src/SoyAop';
import SoyRenderer from 'metal-soy/src/SoyRenderer';
import SoyTemplates from 'metal-soy/src/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Rating.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Rating.
 */

if (typeof Templates == 'undefined') { var Templates = {}; }
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
  var optionLimit24 = opt_data.options.length;
  for (var option24 = 0; option24 < optionLimit24; option24++) {
    output += '<a data-index="' + soy.$$escapeHtmlAttribute(option24) + '" title="' + soy.$$escapeHtmlAttribute(opt_data.options[option24].title) + '" class="' + soy.$$escapeHtmlAttribute(option24 <= opt_data.highlightStarIndex ? opt_data.cssClasses.on : opt_data.cssClasses.off) + '"></a>';
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
Templates.Rating.rateItems.params = ["cssClasses","highlightStarIndex","id","options"];
Templates.Rating.rateInput.params = ["rate","inputHiddenName","id"];

class Rating extends Component {}
Rating.RENDERER = SoyRenderer;
SoyAop.registerTemplates('Rating');
export default Rating;
/* jshint ignore:end */
