'use strict';

import RatingBase from './Rating.soy';
import core from 'bower:metal/src/core';

class Rating extends RatingBase {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);
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
			var index = parseInt(event.target.dataset.index, 10);
			var selectedItem = this.items[index];
			var rate = selectedItem.value;

			if (rate === this.previousRate && this.canReset) {
				this._reset();
			}
			else {
				this.selectedItem = selectedItem;
				this.selectedIndex = index;
			}
		}
	}

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
			var index = Number.parseInt(event.target.dataset.index, 10);

			if (this.currentMouseTarget !== index) {
				this.onStartIndex = index;
			}

			this.currentMouseTarget = index;
		}
	}

	syncRate(rate) {
		this.previousRate = rate;
	}

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
	 * The last rate selected
	 * @type {?number}
	 * @default 0
	 */
	previousRate: {
		value: 0
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
			return this.items[this.selectedIndex];
		} 
	},

	/**
	 * The arry of items. It will be automaticly created if its value isn't a array.
	 * @type {array}
	 * @default 5
	 */
	items: {
		validator: function (value) {
			return (core.isNumber(value) || value.length)
		},

		value: [],

		setter: function(value) {
			var items = [];

			if (value && value.length) {
				return value;
			}
			else {
				value = value;

				if (!core.isNumber(value)) {
					value = 5;
				}

				for (var i = 0; i < value; i++) {
					items.push({
						title: '',
						value: i + 1
					});
				}

				return items;
			}
		}
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
