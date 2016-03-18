'use strict';

import RatingBase from './Rating.soy';
import { core } from 'metal';

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
            let index = parseInt(event.target.dataset.index, 10);

            if (this.selectedIndex === index && this.canReset) {
                this.reset();
            }
            else {
                this.selectedIndex = index;
            }
        }
    }

    /**
     * Reset rating attributes to its initial value
     * @protected
     */
    reset() {
        this.rate = null;
        this.selectedIndex = -1;
    }

    /**
     * Handles mouseout event
     * @protected
     */
    handleMouseOutEvent() {
        this.currentMouseTarget = undefined;
        this.highlightStarIndex = this.selectedIndex;
    }

    /**
     * Handles mouseover event
     * @param {event} event
     * @protected
     */
    handleMouseOverEvent(event) {
        if (!this.disabled) {
            let index = Number.parseInt(event.target.dataset.index, 10);

            if (this.currentMouseTarget !== index) {
                this.highlightStarIndex = index;
            }

            this.currentMouseTarget = index;
        }
    }

    /**
     * Syncronize seletected item attribute chagens
     * @param {object} item
     * @protected
     */
    syncSelectedItem(item) {
        if (item) {
            this.rate = item.value;
        }
    }

    /**
     * Current item selected index
     * @param {number} index
     * @protected
     */
    syncSelectedIndex(index) {
        this.highlightStarIndex = index;
        this.selectedItem = this.options[index] || null;
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
        value: null
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
    * The current highlighted index
    * @type {number}
    * @default -1
    */
    highlightStarIndex: {
        value: -1
    },

    /**
    * The current seleted item object
    * @type {object}
    * @default null
    */
    selectedItem: {
        validator: function() {
            return core.isObject || null;
        },
        value: null
    },

    /**
    * The list of options.
    * @type {array}
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
