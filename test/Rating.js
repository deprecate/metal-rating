'use strict';

import dom from 'bower:metal/src/dom/dom';
import Rating from '../src/Rating';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';

describe('Rating', function() {
	var rating;

	afterEach(function() {
		if (rating) {
			rating.dispose();
		}
	});

	it('should render with default attributes.', function() {
		rating = new Rating().render();
		assert.strictEqual('', rating.element.style.display);
	});

	it('should render specified label.', function() {
		rating = new Rating({
			label: "This is an awesome Metal Component"
		}).render();
		assert.strictEqual("This is an awesome Metal Component", rating.element.textContent);
	});

	it('should highlight until the item clicked', function(done) {
		rating = new Rating().render();

		var elements = rating.element.querySelectorAll('a');
		dom.triggerEvent(elements[2], 'click');

		setTimeout(function(){
			elements = rating.element.querySelectorAll('a');
			assert.strictEqual(elements[0].className, rating.cssClasses.on);
			assert.strictEqual(elements[1].className, rating.cssClasses.on);
			assert.strictEqual(elements[2].className, rating.cssClasses.on);
			assert.strictEqual(elements[3].className, rating.cssClasses.off);
			assert.strictEqual(elements[4].className, rating.cssClasses.off);
			done();
		}, 25);
	});

	it('should set the rate value by click', function(done) {
		rating = new Rating().render();

		var elements = rating.element.querySelectorAll('a');
		dom.triggerEvent(elements[4], 'click');

		setTimeout(function(){
			assert.strictEqual(rating.rate, 5);
			done();
		}, 25);
	});

	it('should highlight items until mouseover event target element', function(done) {
		rating = new Rating().render();

		var elements = rating.element.querySelectorAll('a');
		dom.triggerEvent(elements[4], 'mouseover');

		setTimeout(function(){
			elements = rating.element.querySelectorAll('a');
			assert.strictEqual(elements[0].className, rating.cssClasses.on);
			assert.strictEqual(elements[1].className, rating.cssClasses.on);
			assert.strictEqual(elements[2].className, rating.cssClasses.on);
			assert.strictEqual(elements[3].className, rating.cssClasses.on);
			assert.strictEqual(elements[4].className, rating.cssClasses.on);
			done();
		}, 25);
	});

	it('should highlight the element according with current rate after mouseout event', function(done) {
		rating = new Rating().render();

		var elements = rating.element.querySelectorAll('a');
		dom.triggerEvent(elements[4], 'click');

		setTimeout(function(){
			dom.triggerEvent(elements[4], 'mouseout');

			setTimeout(function(){
				elements = rating.element.querySelectorAll('a');
				assert.strictEqual(elements[0].className, rating.cssClasses.on);
				assert.strictEqual(elements[1].className, rating.cssClasses.on);
				assert.strictEqual(elements[2].className, rating.cssClasses.on);
				assert.strictEqual(elements[3].className, rating.cssClasses.on);
				assert.strictEqual(elements[4].className, rating.cssClasses.on);
				done();
			}, 25);
		}, 25);
	});

	it('should clear rate if the user click twice in the same element', function(done) {
		rating = new Rating().render();

		var elements = rating.element.querySelectorAll('a');
		dom.triggerEvent(elements[4], 'click');

		setTimeout(function(){
			assert.strictEqual(elements[0].className, rating.cssClasses.on);
			assert.strictEqual(elements[1].className, rating.cssClasses.on);
			assert.strictEqual(elements[2].className, rating.cssClasses.on);
			assert.strictEqual(elements[3].className, rating.cssClasses.on);
			assert.strictEqual(elements[4].className, rating.cssClasses.on);

			assert.strictEqual(rating.rate, 3);

			done();
		}, 25);
	});

	it('should not reset the rating value if the canReset attribute is false.', function() {
	});

	it('should not change rate attribute if rating is disabled', function() {
		rating = new Rating().render();

		var elements = rating.element.querySelectorAll('a');
		
		rating.disabled = true;

		dom.triggerEvent(elements[2], 'click');
		assert.strictEqual(rating.rate, null);
	});
});
