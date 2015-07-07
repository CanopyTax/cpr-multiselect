import MultiSelector from './multi-selector.js';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

describe('multi-selector', function() {
	it('Should render an empty component', function() {
		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector></MultiSelector>
		);

		let hiddenInput = TestUtils.scryRenderedDOMComponentsWithTag(multiSelect, 'input');
		let renderedInput = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector__main-input');

		expect(hiddenInput.length).toBe(1);
		expect(renderedInput.length).toBe(1);
	});

	it('Should render a component with elements', function() {
		let items = [
			{
				firstName: 'William',
				lastName: 'Seward'
			}
		];

		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector initialSelectedItems={items}></MultiSelector>
		);

		let pill = TestUtils.findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__pill');
		expect(pill.getDOMNode().textContent).toEqual('William Seward');
	});

	it('Should render a custom pill title', function() {
		let items = [
			{
				firstName: 'William',
				lastName: 'Seward'
			}
		];

		function getPillTitle(item) {
			return `yo dogg ${item.firstName}`;
		}

		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector initialSelectedItems={items} getPillTitle={getPillTitle}></MultiSelector>
		);

		let pill = TestUtils.findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__pill');
		expect(pill.getDOMNode().textContent).toEqual('yo dogg William');
	});

	it('Should remove items and trigger an event callback', function(run) {
		let items = [
			{
				firstName: 'William',
				lastName: 'Seward'
			}
		];

		function callback(items) {
			expect(items.length).toBe(0);
			run();
		}

		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector initialSelectedItems={items} onChange={callback}></MultiSelector>
		);

		let pillClose = TestUtils.findRenderedDOMComponentWithClass(multiSelect, 'cps-icon-sm-close');
		TestUtils.Simulate.click(pillClose);

		let pills = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector__pill');
		expect(pills.length).toBe(0);
	});

	it('Should render a dialog when clicked', function() {
		let items = [
			{
				"lastName": "Seward",
				"firstName": "William"
			},
			{
				"lastName": "Blair",
				"firstName": "Montgomery"
			},
			{
				"lastName": "Lewis",
				"firstName": "Meriwether"
			}
		];

		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector items={items}></MultiSelector>
		);

		let renderedInput = TestUtils.findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__main-input');
		TestUtils.Simulate.click(renderedInput);

		let dialog = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector__dialog');
		expect(dialog.length).toBe(1);

		let itemElements = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		expect(itemElements.length).toBe(3);
		expect(itemElements[0].getDOMNode().textContent).toBe('WSWilliam Seward');
		expect(itemElements[1].getDOMNode().textContent).toBe('MBMontgomery Blair');
		expect(itemElements[2].getDOMNode().textContent).toBe('MLMeriwether Lewis');
	});

	it('Should toggle an element', function() {
		let items = [
			{
				"lastName": "Seward",
				"firstName": "William"
			},
			{
				"lastName": "Montgomery",
				"firstName": "Blair"
			},
			{
				"lastName": "Meriwether",
				"firstName": "Lewis"
			}
		];

		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector items={items}></MultiSelector>
		);

		let renderedInput = TestUtils.findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__main-input');
		TestUtils.Simulate.click(renderedInput);

		let itemElements = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		TestUtils.Simulate.click(itemElements[0]);

		// Select an item
		itemElements = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		expect(itemElements[0].getDOMNode().classList[1]).toBe('+selected');

		// Deselect an item
		TestUtils.Simulate.click(itemElements[0]);
		itemElements = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'cp-multi-selector-item');
		expect(itemElements[0].getDOMNode().classList[1]).toBeFalsy();
	});

	it('Should render a custom item component', function() {
		let items = [
			{
				"lastName": "Seward",
				"firstName": "William"
			},
			{
				"lastName": "Montgomery",
				"firstName": "Blair"
			},
			{
				"lastName": "Meriwether",
				"firstName": "Lewis"
			}
		];

		let MyItemComponent = React.createClass({
			render: function() {
				return <div className="heeeelo">{this.props.item.firstName}</div>
			}
		});

		let multiSelect = TestUtils.renderIntoDocument(
			<MultiSelector items={items} ItemComponent={MyItemComponent}></MultiSelector>
		);

		let renderedInput = TestUtils.findRenderedDOMComponentWithClass(multiSelect, 'cp-multi-selector__main-input');
		TestUtils.Simulate.click(renderedInput);

		let itemElements = TestUtils.scryRenderedDOMComponentsWithClass(multiSelect, 'heeeelo');
		expect(itemElements.length).toBe(3);
	});
});
