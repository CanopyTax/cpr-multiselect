cpr-multiselect [![Build Status](https://travis-ci.org/CanopyTax/cpr-multiselect.png?branch=master)](https://travis-ci.org/CanopyTax/cpr-multiselect)
===============

Canopy React Multi-select Component

## Requirements
 - React 0.13.3
 - Lodash methods without, contains, union, isNull

## Installation
1. Install through `npm install --save cpr-multiselect`
2. Load the required stylesheet `src/multi-selector.css`
3. Optional - if you want some default styling use the stylesheet: `build/external-styles.css`

## Usage

### Props
+ `items`: Items to choose from
+ `initialSelectedItems`: The selected items
+ `onChange`: Called when selected items change
+ `onInputChange`: Called when the text input changes
+ `ItemComponent`: Custom component for each item in the dialog
+ `getItemTitle`: Called to display the title of each item
+ `placeholder`: Placeholder for the text input
+ `maxLength`: Maximum length for the text input
+ `noRestrict`: Pass this if you don't want to restrict the input so users can enter custom values. Custom values will be appended to `selectedItems` as strings.

### Basic
```jsx
import MultiSelect from 'cpr-multiselect';

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

function itemsChanged(selectedItems) {
	console.log(selectedItems);
}

function inputChange(input) {
	//Input will be whatever current text is in the input
}

<MultiSelect items={items} onChange={itemsChanged} onInputChange={inputChange}></MultiSelect>
```

### Custom Components
```jsx
import MultiSelect from 'cpr-multiselect';

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

/**
 * Each item has a title which can be manipulated with a callback function
 */
function getCustomTitle(item) {
	return item.firstName;
}

/**
 * Each item rendered in the dialog can have a custom component
 */
let PersonComponent = React.createClass({
	render () {
		const firstName = this.props.item.firstName;
		const lastName = this.props.item.lastName;
		return (
			<div>
				<div>{`${firstName[0]}${lastName[0]}`}</div>
				<div className="cpr-multi-selector-item__title">{`${firstName} ${lastName}`}</div>
			</div>
		)
	}
});

<MultiSelect items={items} onChange={itemsChanged} getItemTitle={getCustomTitle} ItemComponent={PersonComponent}></MultiSelect>
```

## Demo
http://canopytax.github.io/cpr-multiselect/
