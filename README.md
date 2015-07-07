cpr-multiselect [![Build Status](https://travis-ci.org/CanopyTax/cpr-multiselect.png?branch=master)](https://travis-ci.org/CanopyTax/cpr-multiselect)
===============

Canopy React Multi-select Component

## Requirements
 - React 0.13.3
 - Lodash methods without, contains, union, isNull

## Installation
1. Install through `npm install --save cpr-multiselect`
2. Optional - if you want some default styling use the stylesheet: `build/external-styles.css`

## Usage

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

<MultiSelect items={items} onChange={itemsChanged}></MultiSelect>
```

### Custom
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
				<div className="cp-multi-selector-item__title">{`${firstName} ${lastName}`}</div>
			</div>
		)
	}
});

<MultiSelect items={items} onChange={itemsChanged} getItemTitle={getCustomTitle} ItemComponent={PersonComponent}></MultiSelect>
```

## Demo
http://canopytax.github.io/cpr-multiselect/
