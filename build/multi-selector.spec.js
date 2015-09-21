'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _multiSelectorJs = require('./multi-selector.js');

var _multiSelectorJs2 = _interopRequireDefault(_multiSelectorJs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibReactTestUtils = require('react/lib/ReactTestUtils');

var _reactLibReactTestUtils2 = _interopRequireDefault(_reactLibReactTestUtils);

describe('multi-selector', function () {
	it('Should render an empty component', function () {
		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], null));

		var hiddenInput = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithTag(multiSelect, 'input');
		var renderedInput = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector__main-input');

		expect(hiddenInput.length).toBe(1);
		expect(renderedInput.length).toBe(1);
	});

	it('Should render a component with elements', function () {
		var items = [{
			firstName: 'William',
			lastName: 'Seward'
		}];

		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], { initialSelectedItems: items }));

		var pill = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__pill');
		expect(pill.getDOMNode().textContent).toEqual('William Seward');
	});

	it('Should render a custom pill title', function () {
		var items = [{
			firstName: 'William',
			lastName: 'Seward'
		}];

		function getItemTitle(item) {
			return 'yo dogg ' + item.firstName;
		}

		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], { initialSelectedItems: items, getItemTitle: getItemTitle }));

		var pill = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__pill');
		expect(pill.getDOMNode().textContent).toEqual('yo dogg William');
	});

	it('Should remove items and trigger an event callback', function (run) {
		var items = [{
			firstName: 'William',
			lastName: 'Seward'
		}];

		function callback(items) {
			expect(items.length).toBe(0);
			run();
		}

		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], { initialSelectedItems: items, onChange: callback }));

		var pillClose = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(multiSelect, 'cps-icon-sm-close');
		_reactLibReactTestUtils2['default'].Simulate.click(pillClose);

		var pills = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector__pill');
		expect(pills.length).toBe(0);
	});

	it('Should render a dialog when clicked', function () {
		var items = [{
			"lastName": "Seward",
			"firstName": "William"
		}, {
			"lastName": "Blair",
			"firstName": "Montgomery"
		}, {
			"lastName": "Lewis",
			"firstName": "Meriwether"
		}];

		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], { items: items }));

		var renderedInput = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__main-input');
		_reactLibReactTestUtils2['default'].Simulate.click(renderedInput);

		var dialog = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector__dialog');
		expect(dialog.length).toBe(1);

		var itemElements = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		expect(itemElements.length).toBe(3);
		expect(itemElements[0].getDOMNode().textContent).toBe('WSWilliam Seward');
		expect(itemElements[1].getDOMNode().textContent).toBe('MBMontgomery Blair');
		expect(itemElements[2].getDOMNode().textContent).toBe('MLMeriwether Lewis');
	});

	it('Should toggle an element', function () {
		var items = [{
			"lastName": "Seward",
			"firstName": "William"
		}, {
			"lastName": "Montgomery",
			"firstName": "Blair"
		}, {
			"lastName": "Meriwether",
			"firstName": "Lewis"
		}];

		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], { items: items }));

		var renderedInput = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__main-input');
		_reactLibReactTestUtils2['default'].Simulate.click(renderedInput);

		var itemElements = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		_reactLibReactTestUtils2['default'].Simulate.click(itemElements[0]);

		// Select an item
		itemElements = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		expect(itemElements[0].getDOMNode().classList[1]).toBe('+selected');

		// Deselect an item
		_reactLibReactTestUtils2['default'].Simulate.click(itemElements[0]);
		itemElements = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		expect(itemElements[0].getDOMNode().classList[1]).toBeFalsy();
	});

	it('Should render a custom item component', function () {
		var items = [{
			"lastName": "Seward",
			"firstName": "William"
		}, {
			"lastName": "Montgomery",
			"firstName": "Blair"
		}, {
			"lastName": "Meriwether",
			"firstName": "Lewis"
		}];

		var MyItemComponent = _react2['default'].createClass({
			displayName: 'MyItemComponent',

			render: function render() {
				return _react2['default'].createElement(
					'div',
					{ className: 'heeeelo' },
					this.props.item.firstName
				);
			}
		});

		var multiSelect = _reactLibReactTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_multiSelectorJs2['default'], { items: items, ItemComponent: MyItemComponent }));

		var renderedInput = _reactLibReactTestUtils2['default'].findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__main-input');
		_reactLibReactTestUtils2['default'].Simulate.click(renderedInput);

		var itemElements = _reactLibReactTestUtils2['default'].scryRenderedDOMComponentsWithClass(multiSelect, 'heeeelo');
		expect(itemElements.length).toBe(3);
	});
});