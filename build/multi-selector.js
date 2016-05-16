'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function DefaultItemComponent(props) {
	var item = props.item;
	var getItemTitle = props.getItemTitle;
	var selectedItems = props.selectedItems;
	var selected = (0, _lodash.includes)(selectedItems, item);

	return _react2['default'].createElement(
		'div',
		{ title: '' + getItemTitle(item) },
		_react2['default'].createElement(
			'div',
			{
				className: 'cpr-multi-selector-item__icon ' + (selected ? "cps-bg-primary-green +selected" : "") },
			_react2['default'].createElement('i', { className: 'cps-icon cps-icon-lg-check', style: { opacity: selected ? "1" : "0" } })
		),
		_react2['default'].createElement(
			'div',
			{ className: 'cpr-multi-selector-item__title' },
			'' + getItemTitle(item)
		)
	);
};

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
		document.addEventListener('click', this.state.close);
	},

	componentWillUnmount: function componentWillUnmount() {
		document.removeEventListener('click', this.state.close);
	},

	getInitialState: function getInitialState() {
		var _this = this;

		return {
			selectedItems: this.props.initialSelectedItems || [],
			mouseIndex: null,
			mouseActive: true,
			mouseFunc: null,
			dialogDisplayed: false,
			activeIndex: null,
			searchValue: '',
			close: function close(e) {
				if (!nearest(e.target, 'cpr-multi-selector')) {
					_this.setState({
						dialogDisplayed: false
					});
				}
			}
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setState({
			selectedItems: nextProps.initialSelectedItems || []
		});
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
		return item.label;
	},
	setActiveIndex: function setActiveIndex(index) {
		var _this2 = this;

		this.setState({
			activeIndex: index,
			mouseIndex: null
		}, function () {
			if (!(0, _lodash.isNull)(_this2.state.activeIndex) && !!_this2.searchItems[_this2.state.activeIndex]) {
				_this2.searchItems[_this2.state.activeIndex].scrollIntoView();
				if (_this2.state.mouseActive) {
					_this2.setState({
						mouseActive: false,
						mouseFunc: function mouseFunc() {
							_this2.setState({
								mouseActive: true
							});
							document.removeEventListener("mousemove", _this2.state.mouseFunc);
						}
					}, function () {
						document.addEventListener("mousemove", _this2.state.mouseFunc);
					});
				}
			}
		});
	},
	inputChange: function inputChange(e) {
		var filterItems = this.getFilterItems(this.props.items);
		var activeIndex = this.state.activeIndex;

		this.props.onInputChange && this.props.onInputChange(e.currentTarget.value);

		if ((0, _lodash.isNull)(activeIndex) && filterItems.length !== 0) {
			this.setActiveIndex(0);
		} else if (filterItems.length === 0) {
			this.setActiveIndex(null);
		}

		this.setState({
			searchValue: e.target.value
		});
	},
	keyDown: function keyDown(e) {
		var keycode = e.which;
		var activeIndex = this.state.activeIndex;
		var filterItems = this.getFilterItems(this.props.items);

		if (keycode === 13) e.preventDefault();
		if (keycode === 40) {
			// press down key
			if ((0, _lodash.isNull)(activeIndex) && filterItems.length !== 0) {
				return this.setActiveIndex(0);
			} else {
				if (activeIndex < filterItems.length - 1) {
					return this.setActiveIndex(activeIndex + 1);
				}
			}
		} else if (keycode === 38) {
			// press up key
			if (!activeIndex) {
				return this.setActiveIndex(0);
			} else {
				if (activeIndex > 0) {
					return this.setActiveIndex(activeIndex - 1);
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
	},

	triggerItemChange: function triggerItemChange() {
		if (this.props.onChange) {
			this.props.onChange.call(null, this.state.selectedItems);
		}
	},

	getSelectedClass: function getSelectedClass(item) {
		return (0, _lodash.includes)(this.state.selectedItems, item) ? '+selected' : '';
	},

	getActiveClass: function getActiveClass(index) {
		return this.state.activeIndex === index || this.state.mouseIndex === index ? '+highlighted' : '';
	},

	getFilterItems: function getFilterItems() {
		var _this3 = this;

		var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		var getItemTitle = this.props.getItemTitle || this.getItemTitle;

		return items.filter(function (item) {
			return getItemTitle(item).toLowerCase().indexOf(_this3.state.searchValue.toLowerCase()) > -1;
		});
	},

	getSearchItems: function getSearchItems() {
		var _this4 = this;

		var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		var ItemComponent = this.props.ItemComponent || DefaultItemComponent;
		var getItemTitle = this.props.getItemTitle || this.getItemTitle;
		var filterItems = this.getFilterItems(items);

		// Show a message that user can press enter to add new item
		if (filterItems.length === 0 && this.props.noRestrict && this.state.searchValue) {
			return _react2['default'].createElement(
				'div',
				{ className: 'cpr-multi-selector-item' },
				'Press Enter to add "',
				this.state.searchValue,
				'"'
			);
		}

		// If noRestrict & the search term doesn't have an exact match, append an additional "result" for the new item
		// This is to allow adding of new items when the search term has matching filtered items but not an exact match
		if (this.props.noRestrict && this.state.searchValue && !_.find(filterItems, function (item) {
			return getItemTitle(item).toLowerCase() === _this4.state.searchValue.toLowerCase();
		})) {
			filterItems.push(this.state.searchValue);
		}

		return filterItems.map(function (item, index) {
			return _react2['default'].createElement(
				'div',
				{
					key: index,
					ref: function (ref) {
						if (_this4.searchItems) {
							_this4.searchItems[index] = ref;
						} else {
							_this4.searchItems = [];
							_this4.searchItems[index] = ref;
						}
					},
					onMouseOver: function () {
						if (_this4.state.mouseActive) {
							_this4.setState({
								mouseIndex: index
							});
						}
					},
					className: 'cpr-multi-selector-item ' + _this4.getSelectedClass(item) + ' ' + _this4.getActiveClass(index),
					onClick: _this4.selectItem.bind(_this4, item) },
				_react2['default'].createElement(ItemComponent, { item: item, selectedItems: _this4.state.selectedItems, getItemTitle: getItemTitle })
			);
		});
	},

	selectItem: function selectItem(item, e) {
		var selectedItems = this.state.selectedItems;

		if ((0, _lodash.includes)(selectedItems, item)) {
			this.setState({
				selectedItems: (0, _lodash.without)(selectedItems, item)
			});
		} else {
			this.setState({
				selectedItems: (0, _lodash.union)(selectedItems, [item])
			});
		}

		this.setState({
			searchValue: ''
		});

		setTimeout(this.triggerItemChange);
	},

	positionDialog: function positionDialog() {
		var _this5 = this;

		setTimeout(function () {
			var el = _this5.el;
			var height = el.clientHeight;
			var dialog = el.querySelector('.cpr-multi-selector__dialog');

			if (dialog) {
				dialog.style.top = height + 1 + 'px';
				el.querySelector('.cpr-multi-selector__dialog__input').focus();
			}
		}, 100);
	},

	prevent: function prevent(e) {
		if (e.which === 13) e.preventDefault();
	},

	render: function render() {
		var _this6 = this;

		//Get getItemTitle is the function that should be passed in to decide what `pill` will display on selection.
		var getItemTitle = this.props.getItemTitle || this.getItemTitle;

		var pills = this.state.selectedItems.map(function (item, i) {
			return _react2['default'].createElement(
				'div',
				{ key: i, className: 'cpr-multi-selector__pill', title: '' + getItemTitle(item) },
				_react2['default'].createElement(
					'span',
					{
						style: { verticalAlign: 'top', margin: "0 8px" },
						tooltip: getItemTitle(item) },
					getItemTitle(item)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'cpr-multi-selector__pill__close' },
					_react2['default'].createElement('i', { onClick: _this6.removeItem.bind(_this6, item), className: 'cps-icon cps-icon-close' })
				)
			);
		});

		var dialog = undefined;
		var that = this;

		if (this.state.dialogDisplayed) {
			var placeholder = this.props.placeholder ? this.props.placeholder : "Type a collaborators name...";
			dialog = _react2['default'].createElement(
				'div',
				{ className: 'cpr-multi-selector__dialog depth-z2', style: {} },
				_react2['default'].createElement(
					'div',
					{ style: { padding: "16px", borderBottom: "1px solid #E9E9E9" } },
					_react2['default'].createElement('input', {
						onChange: this.inputChange,
						onKeyDown: this.keyDown,
						className: 'cps-form-control cpr-multi-selector__dialog__input',
						placeholder: placeholder })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'cpr-multi-selector__dialog__items' },
					this.getSearchItems(this.props.items)
				)
			);

			this.positionDialog();
		}

		return _react2['default'].createElement(
			'div',
			{ ref: function (el) {
					if (el) that.el = el;
				}, className: 'cpr-multi-selector' },
			_react2['default'].createElement('input', { type: 'input', className: 'cpr-multi-selector__hidden-input', onFocus: this.displayDialog }),
			_react2['default'].createElement(
				'div',
				{ onClick: this.displayDialog, className: 'cpr-multi-selector__main-input cps-form-control' },
				pills
			),
			dialog
		);
	}
});

if (window && !window.MultiSelector) window.MultiSelector = MultiSelector;

exports['default'] = MultiSelector;
module.exports = exports['default'];