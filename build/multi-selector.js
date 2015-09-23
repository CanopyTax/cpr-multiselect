'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var DefaultItemComponent = _react2['default'].createClass({
	displayName: 'DefaultItemComponent',

	render: function render() {
		var firstName = this.props.item.firstName;
		var lastName = this.props.item.lastName;
		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(
				'div',
				{ className: 'cp-multi-selector-item__icon cps-bg-medium-gray cps-gray-5' },
				'' + firstName[0] + lastName[0]
			),
			_react2['default'].createElement(
				'div',
				{ className: 'cp-multi-selector-item__title' },
				firstName + ' ' + lastName
			),
			_react2['default'].createElement(
				'div',
				{ className: 'cp-multi-selector-item__check' },
				_react2['default'].createElement('i', { className: 'cps-icon cps-icon-lg-check cps-info' })
			)
		);
	}
});

function nearest(_x3, _x4) {
	var _left;

	var _again = true;

	_function: while (_again) {
		var element = _x3,
		    className = _x4;
		_again = false;

		if (!element) return false;

		if (_left = element.className.indexOf(className) > -1) {
			return _left;
		}

		_x3 = element.parentElement;
		_x4 = className;
		_again = true;
		continue _function;
	}
}

var MultiSelector = _react2['default'].createClass({
	displayName: 'MultiSelector',

	componentWillMount: function componentWillMount() {
		document.body.addEventListener('click', this.state.close);
	},

	componentWillUnmount: function componentWillUnmount() {
		document.body.removeEventListener('click', this.state.close);
	},

	getInitialState: function getInitialState() {
		var _this = this;

		return {
			selectedItems: this.props.initialSelectedItems || [],
			dialogDisplayed: false,
			activeIndex: null,
			searchValue: '',
			close: function close(e) {
				if (!nearest(e.target, 'cp-multi-selector')) {
					_this.setState({
						dialogDisplayed: false
					});
				}
			}
		};
	},

	displayDialog: function displayDialog(e) {
		this.setState({
			dialogDisplayed: true
		});
	},

	removeItem: function removeItem(item, e) {
		this.setState({
			selectedItems: (0, _lodash.without)(this.state.selectedItems, item)
		});

		setTimeout(this.triggerItemChange);
	},

	getItemTitle: function getItemTitle(item) {
		return item.firstName + ' ' + item.lastName;
	},

	keyUp: function keyUp(e) {
		e.preventDefault();
		var keycode = e.which;
		var activeIndex = this.state.activeIndex;
		var filterItems = this.getFilterItems(this.props.items);

		if (keycode === 40) {
			// press down key
			if ((0, _lodash.isNull)(activeIndex)) {
				return this.setState({
					activeIndex: 0
				});
			} else {
				if (activeIndex < filterItems.length - 1) {
					return this.setState({
						activeIndex: activeIndex + 1
					});
				}
			}
		} else if (keycode === 38) {
			// press up key
			if (!activeIndex) {
				return this.setState({
					activeIndex: 0
				});
			} else {
				if (activeIndex > 0) {
					return this.setState({
						activeIndex: activeIndex - 1
					});
				}
			}
		} else if (keycode === 13) {
			// press enter key
			if (!(0, _lodash.isNull)(activeIndex)) {
				return this.selectItem(filterItems[activeIndex]);
			} else if (this.props.noRestrict) {
				// if the noRestrict prop is true it adds the input as a string to the selected items on enter
				this.selectItem(e.currentTarget.value);
				e.currentTarget.value = "";
			}
		} else if (keycode === 27) {
			// press escape key
			return this.setState({
				activeIndex: null,
				dialogDisplayed: false
			});
		}

		this.setState({
			searchValue: e.target.value
		});
	},

	triggerItemChange: function triggerItemChange() {
		if (this.props.onChange) {
			this.props.onChange.call(null, this.state.selectedItems);
		}
	},

	getSelectedClass: function getSelectedClass(item) {
		return (0, _lodash.contains)(this.state.selectedItems, item) ? '+selected' : '';
	},

	getActiveClass: function getActiveClass(index) {
		return this.state.activeIndex === index ? '+highlighted' : '';
	},

	getFilterItems: function getFilterItems() {
		var _this2 = this;

		var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		var getItemTitle = this.props.getItemTitle || this.getItemTitle;

		return items.filter(function (item) {
			return getItemTitle(item).toLowerCase().indexOf(_this2.state.searchValue.toLowerCase()) > -1;
		}).filter(function (item, index) {
			return index < 4;
		});
	},

	getSearchItems: function getSearchItems() {
		var _this3 = this;

		var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		var ItemComponent = this.props.ItemComponent || DefaultItemComponent;

		return this.getFilterItems(items).map(function (item, index) {
			return _react2['default'].createElement(
				'div',
				{ key: index, className: 'cp-multi-selector-item ' + _this3.getSelectedClass(item) + ' ' + _this3.getActiveClass(index), onClick: _this3.selectItem.bind(_this3, item) },
				_react2['default'].createElement(ItemComponent, { item: item })
			);
		});
	},

	selectItem: function selectItem(item, e) {
		var selectedItems = this.state.selectedItems;

		if ((0, _lodash.contains)(selectedItems, item)) {
			this.setState({
				selectedItems: (0, _lodash.without)(selectedItems, item)
			});
		} else {
			this.setState({
				selectedItems: (0, _lodash.union)(selectedItems, [item])
			});
		}

		setTimeout(this.triggerItemChange);
	},

	positionDialog: function positionDialog() {
		var _this4 = this;

		setTimeout(function () {
			var el = _react2['default'].findDOMNode(_this4);
			var height = el.clientHeight;
			var dialog = el.querySelector('.cp-multi-selector__dialog');

			dialog.style.top = height + 1 + 'px';

			el.querySelector('.cp-multi-selector__dialog__input').focus();
		}, 100);
	},

	render: function render() {
		var _this5 = this;

		//Get getItemTitle is the function that should be passed in to decide what `pill` will display on selection.
		var getItemTitle = this.props.getItemTitle || this.getItemTitle;

		var pills = this.state.selectedItems.map(function (item, i) {
			return _react2['default'].createElement(
				'div',
				{ key: i, className: 'cp-multi-selector__pill cps-white cps-bg-gray-10' },
				_react2['default'].createElement(
					'span',
					{ style: { verticalAlign: 'top' } },
					getItemTitle(item)
				),
				_react2['default'].createElement('i', { onClick: _this5.removeItem.bind(_this5, item), className: 'cps-icon cps-icon-sm-close' })
			);
		});

		var dialog = undefined;

		if (this.state.dialogDisplayed) {
			var placeholder = this.props.placeholder ? this.props.placeholder : "Type a collaborators name...";
			dialog = _react2['default'].createElement(
				'div',
				{ className: 'cp-multi-selector__dialog depth-z2', style: {} },
				_react2['default'].createElement('input', { onKeyUp: this.keyUp, className: 'cps-form-control cp-multi-selector__dialog__input', placeholder: placeholder }),
				_react2['default'].createElement(
					'div',
					{ className: 'cp-multi-selector__dialog__items' },
					this.getSearchItems(this.props.items)
				)
			);

			this.positionDialog();
		}

		return _react2['default'].createElement(
			'div',
			{ className: 'cp-multi-selector' },
			_react2['default'].createElement('input', { type: 'input', className: 'cp-multi-selector__hidden-input', onFocus: this.displayDialog }),
			_react2['default'].createElement(
				'div',
				{ onClick: this.displayDialog, className: 'cp-multi-selector__main-input cps-form-control' },
				pills
			),
			dialog
		);
	}
});

if (window && !window.MultiSelector) window.MultiSelector = MultiSelector;

exports['default'] = MultiSelector;
module.exports = exports['default'];