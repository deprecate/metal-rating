'use strict';

import core from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Rating.soy';

class Rating extends Component {
    /**
     * @inheritDoc
     */
    constructor(opt_config) {
        super(opt_config);

        this.rating_clicked = -1;
    }

    /**
     * @inheritDoc
     */
    attached() {
        this.delegate('mouseover', '.rating-item', this.handleMouseOverEvent.bind(this));
        this.delegate('click', '.rating-item', this.handleClickEvent.bind(this));
        this.on('mouseout', this.handleMouseOutEvent.bind(this));
    }

    /**
     * Handles click event
     * @param {Event} event
     * @protected
     */
    handleClickEvent(event) {
        if (!this.disabled) {
            let index = parseInt(event.delegateTarget.dataset.index, 10);

            if (this.selectedIndex === this.rating_clicked && this.canReset) {
                this.reset();
            }
            else {
                this.selectedIndex = index;
            }

            this.rating_clicked = this.selectedIndex;
        }
    }

    /**
     * Reset rating attributes to its initial value
     * @protected
     */
    reset() {
        this.rating = null;
        this.selectedIndex = -1;
    }

    /**
     * Handles mouseout event
     * @protected
     */
    handleMouseOutEvent() {
        this._currentMouseTarget = undefined;
        this.selectedIndex = this.rating_clicked;
    }

    /**
     * Handles mouseover event
     * @param {event} event
     * @protected
     */
    handleMouseOverEvent(event) {
        if (!this.disabled) {
            let index = Number.parseInt(event.delegateTarget.dataset.index, 10);

            if (this._currentMouseTarget !== index) {
                this.selectedIndex = index;
            }

            this._currentMouseTarget = index;
        }
    }

    /**
     * Current item selected index
     * @param {number} index
     * @protected
     */
    syncSelectedIndex(index) {
        this.selectedIndex = index;
        this.rating = index;
    }
}

Rating.STATE = {

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
    * The current rating
    * @type {?number}
    * @default 0
    */
    rating: {
        value: null,
        setter: function(index) {
            if (this.options[index]) {
                return this.options[index];
            }

            return null;
        }
    },

    /**
    * The current selected index
    * @type {number}
    * @default -1
    */
    selectedIndex: {
        validator: core.isNumber,
        value: -1
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
Soy.register(Rating, templates);

export default Rating;
