cpr-multiselect [![Build Status](https://travis-ci.org/CanopyTax/cpr-multiselect.png?branch=master)](https://travis-ci.org/CanopyTax/cpr-multiselect)
===============

Canopy React Multi-select Component

## Requirements
 - React >=0.13.3
 - Lodash methods without, contains, union, isNull

## Installation
1. Install through `npm install --save cpr-multiselect`
2. Load the required stylesheet `src/multi-selector.css`
3. Optional - if you want some default styling use the stylesheet: `dist/external-styles.css`

## Usage

### Props
+ `items`: Items to choose from
+ `maxSearchItems`: Limit the number of items rendered in the dialog
+ `initialSelectedItems`: The selected items
+ `onChange`: Called when selected items change
+ `onInputChange`: Called when the text input changes
+ `ItemComponent`: Custom component for each item in the dialog
+ `getItemTitle`: Called to display the title of each item
+ `placeholder`: Placeholder for the text input
+ `pillPlaceholder`: Placeholder text for the empty pill box
+ `maxLength`: Maximum length for the text input
+ `noRestrict`: Pass this if you don't want to restrict the input so users can enter custom values. Custom values will be appended to `selectedItems` as strings.
+ `noResultsPhrase`: The phrase to show when there are no matching results, or when `items` is empty. The default is "No items found."
+ `pressEnterToAddPhrase`: If `noRestrict` is true, this phrase will be displayed when users enter custom values. The default is "Press Enter to add".
+ `customCSSClass`: A css class to be put on the cpr-multiselector element
+ `hasError`: pass in true to display an orange error border around the input div 
+ `validate`: function to validate the input. Return true or false.
+ `invalidMsg`: message to display when input is invalidated
+ `doneButton`: add a done button to the dialog when entering input
+ `color`: Color for the pills. Supports `blue` and `green` currently.
+ `closeOnSelect`: Close the dialog after selection.
+ `keepSearchTextOnSelect`: by default, search text is cleared on select. Pass this as true if you want the search text to remain on select.
+ `CustomPillboxComponent`: custom component that triggers the dialog opening rather than using the pill box default
+ `onBlur`: called when dialog is closed
+ `showSearch`: defaults to `true`, allows you to control if the search bar is present.

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
