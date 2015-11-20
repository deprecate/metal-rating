'use strict';

import RatingBase from './Rating.soy';
import core from 'bower:metal/src/core';

class Rating extends RatingBase {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);

		this.previousRate = null;
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this.delegate('mouseover', 'a', this.handleMouseOverEvent.bind(this));
		this.delegate('click', 'a', this.handleClickEvent.bind(this));
		this.on('mouseout', this.handleMouseOutEvent.bind(this));
	}

	/**
	 * Handles click event
	 * @param {Event} event
	 * @protected
	 */
	handleClickEvent(event) {
		if (!this.disabled) {
			let index = parseInt(event.target.dataset.index, 10);
			let selectedItem = this.options[index];
			let rate = selectedItem.value;

			if (rate === this.previousRate && this.canReset) {
				this._reset();
			}
			else {
				this.selectedItem = selectedItem;
				this.selectedIndex = index;
			}
		}
	}

	/**
	 * Reset rating attributes to its initial value
	 * @protected
	 */
	_reset() {
		this.rate = null;
		this.selectedItem = null;
		this.selectedIndex = -1;
	}

	/**
	 * Handles mouseleave event
	 * @protected
	 */
	handleMouseOutEvent() {
		this.currentMouseTarget = undefined;
		this.onStartIndex = this.selectedIndex;
	}

	/**
	 * Handles mouseover event
	 * @param {Event} event
	 * @protected
	 */
	handleMouseOverEvent(event) {
		if (!this.disabled) {
			let index = Number.parseInt(event.target.dataset.index, 10);

			if (this.currentMouseTarget !== index) {
				this.onStartIndex = index;
			}

			this.currentMouseTarget = index;
		}
	}

	/**
	 * Syncronize chagens of the rate attribute
	 * @param {Number} rate
	 * @protected
	 */
	syncRate(rate) {
		this.previousRate = rate;
	}

	/**
	 * Syncronize seletected item attribute chagens
	 * @param {Number} item
	 * @protected
	 */
	syncSelectedItem(item) {
		if (item) {
			this.rate = item.value;
		}
	}

	syncSelectedIndex(index) {
		this.onStartIndex = index;
	}
}

Rating.ATTRS = {

	/**
	 * Block or unblock rating functionality
	 * @type {?boolean}
	 * @default false
	 */
	cssClasses: {
		value: {
			off: 'glyphicon glyphicon-star-empty',
			on: 'glyphicon glyphicon-star'
		}
	},

	/**
	 * Block or unblock rating functionality
	 * @type {?boolean}
	 * @default false
	 */
	disabled: {
		value: false,
		validator: core.isBoolean
	},

	/**
	 * The current rate
	 * @type {?number}
	 * @default 0
	 */
	rate: {
		value: null,
		setter: function(rate) {
			return (this.disabled) ? this.previousRate : rate;
		}
	},

	/**
	 * The current highlighted index
	 * @type {number}
	 * @default -1
	 */
	selectedIndex: {
		validator: core.isNumber,
		value: -1
	},

	/**
	 * The current item object
	 * @type {object}
	 * @default null
	 */
	selectedItem: {
		validator: core.isObject,
		value: null,
		valueFn: function() {
			return this.options[this.selectedIndex];
		} 
	},

	/**
	 * The amount of items that will represents each rate element.
	 * @type {number}
	 * @default null
	 */
	items: {
		validator: core.isNumber,
		value: null,
		setter: function (value) {
			return value || this.options.length;
		}
	},

	/**
     * If `true` could be reseted
     * (i.e., have no values selected).
     * @type {boolean}
     * @default true
     */
	options: {
		value: [
			{
				value: 1,
				title: ''
			},
			{
				value: 2,
				title: ''
			},
			{
				value: 3,
				title: ''
			},
			{
				value: 4,
				title: ''
			},
			{
				value: 5,
				title: ''
			}
		]
	},

	/**
     * If `true` could be reseted
     * (i.e., have no values selected).
     * @type {boolean}
     * @default true
     */
    canReset: {
        value: true,
        validator: core.isBoolean
    },

    /**
     * Label to be displayed with the Rating elements.
     *
     * @attribute label
     * @type {string}
     * @default ''
     */
	label: {
		value: '',
		validator: core.isString
	},

	/**
     * Name of the hidden input.
     *
     * @attribute inputHiddenName
     * @type {string}
     * @default 'rate'
     */
	inputHiddenName: {
		value: 'rate',
		validator: core.isString	
	}
};

export default Rating;
