import React from 'react';
import {without, includes, union, isNull, find} from 'lodash';

function DefaultItemComponent(props) {
	const item = props.item;
	const getItemTitle = props.getItemTitle;
	const selectedItems = props.selectedItems;
	const selected = includes(selectedItems, item);

	return (
		<div title={`${getItemTitle(item)}`}>
			<div
				className={`cpr-multi-selector-item__icon ${selected ? "cps-bg-primary-green +selected" : ""}`}>
				<i className="cps-icon cps-icon-lg-check" style={{opacity: selected ? "1" : "0"}}></i>
			</div>
			<div className="cpr-multi-selector-item__title">{`${getItemTitle(item)}`}</div>
		</div>
	)
};

DefaultItemComponent.propTypes = {
	item: React.PropTypes.object.isRequired,
	getItemTitle: React.PropTypes.func,
	selectedItems: React.PropTypes.array.isRequired
};

function nearest(element, className) {
	if (!element) return false;
	return element.className.indexOf(className) > -1 || nearest(element.parentElement, className);
}

const MultiSelector = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
		initialSelectedItems: React.PropTypes.array,
		onInputChange: React.PropTypes.func,
		onChange: React.PropTypes.func,
		getItemTitle: React.PropTypes.func,
		ItemComponent: React.PropTypes.oneOfType(
			[React.PropTypes.element, React.PropTypes.func]
		),
		placeholder: React.PropTypes.string,
		maxLength: React.PropTypes.number,
		noRestrict: React.PropTypes.bool
	},

	componentWillMount: function() {
		document.addEventListener('click', this.state.close);
	},

	componentWillUnmount: function() {
		document.removeEventListener('click', this.state.close);
	},

	getInitialState: function() {
		return {
			selectedItems: this.props.initialSelectedItems || [],
			mouseIndex: null,
			mouseActive: true,
			mouseFunc: null,
			dialogDisplayed: false,
			activeIndex: null,
			searchValue: '',
			close: (e) => {
				if (!nearest(e.target, 'cpr-multi-selector')) {
					this.setState({
						dialogDisplayed: false,
						searchValue: ''
					});
				}
			}
		}
	},

	componentWillReceiveProps(nextProps) {
		this.setState({
			selectedItems: nextProps.initialSelectedItems || []
		})
	},

	displayDialog: function(e) {
		this.setState({
			dialogDisplayed: true
		})
	},

	removeItem: function(item, e) {
		this.setState({
			selectedItems: without(this.state.selectedItems, item)
		});

		setTimeout(this.triggerItemChange);
	},

	getItemTitle: function(item) {
		return item.label;
	},

	setActiveIndex(index) {
		this.setState({
			activeIndex: index,
			mouseIndex: null,
		}, () => {
			if (!isNull(this.state.activeIndex) && !!this.searchItems[this.state.activeIndex]) {
				this.searchItems[this.state.activeIndex].scrollIntoView();
				if (this.state.mouseActive) {
					this.setState({
						mouseActive: false,
						mouseFunc: () => {
							this.setState({
								mouseActive: true
							})
							document.removeEventListener("mousemove", this.state.mouseFunc);
						}
					}, () => {
						document.addEventListener("mousemove", this.state.mouseFunc);
					})
				}
			}
		})
	},
	handleChange: function(e) {
		this.inputChange(e.target.value);
	},

	inputChange: function(newVal) {
		this.props.onInputChange && this.props.onInputChange(e.currentTarget.value);

		this.setState({
			searchValue: newVal
		});
	},

	keyDown: function(e) {
		const keycode = e.which;
		const activeIndex = this.state.activeIndex;
		const filterItems = this.getFilterItems(this.props.items);

		if (keycode === 13) e.preventDefault();
		if(keycode === 40) { // press down key
			if (isNull(activeIndex) && filterItems.length !== 0) {
				return this.setActiveIndex(0);
			} else {
				if(activeIndex < filterItems.length - 1) {
					return this.setActiveIndex(activeIndex + 1);
				}
			}
		} else if(keycode === 38) { // press up key
			if(!activeIndex) {
				return this.setActiveIndex(0);
			} else {
				if(activeIndex > 0) {
					return this.setActiveIndex(activeIndex - 1);
				}
			}
		} else if(keycode === 13) { // press enter key
			if(!isNull(activeIndex) && filterItems.length !==0) {
				return this.selectItem(filterItems[activeIndex], e);
			} else if(this.props.noRestrict && e.currentTarget.value) {
				// if the noRestrict prop is true it adds the input as a string to the selected items on enter
				return this.selectItem(e.currentTarget.value, e);
			}
		} else if(keycode === 27) { // press escape key
			return this.setState({
				activeIndex: null,
				dialogDisplayed: false
			});
		}
	},

	triggerItemChange: function() {
		if (this.props.onChange) {
			this.props.onChange.call(null, this.state.selectedItems);
		}
	},

	getSelectedClass: function(item) {
		return includes(this.state.selectedItems, item) ? '+selected' : '';
	},

	getActiveClass: function(index) {
		return this.state.activeIndex === index || this.state.mouseIndex === index
			? '+highlighted'
			: '';
	},

	getFilterItems: function(items = []) {
		let getItemTitle = this.props.getItemTitle || this.getItemTitle;

		return items
			.filter((item) => {
				return getItemTitle(item).toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
			})
	},

	getSearchItems: function(items = []) {
		let ItemComponent = this.props.ItemComponent || DefaultItemComponent;
		let getItemTitle = this.props.getItemTitle || this.getItemTitle;
		let filterItems = this.getFilterItems(items);

		// Show a message that user can press enter to add new item
		if (filterItems.length === 0 && this.props.noRestrict && this.state.searchValue) {
			return (
				<div className="cpr-multi-selector-item">Press Enter to add "{this.state.searchValue}"</div>
			)
		}

		// If noRestrict & the search term doesn't have an exact match, append an additional "result" for the new item
		// This is to allow adding of new items when the search term has matching filtered items but not an exact match
		if (this.props.noRestrict && this.state.searchValue
		&& !find(filterItems, (item) => getItemTitle(item).toLowerCase() === this.state.searchValue.toLowerCase())) {
			filterItems.push(this.state.searchValue);
		}

		return filterItems.map((item, index) => {
			return (
				<div
					key={index}
					ref={(ref) => {
						if (this.searchItems) {
							this.searchItems[index] = ref;
						} else {
							this.searchItems = [];
							this.searchItems[index] = ref;
						}
					}}
					onMouseOver={() => {
						if (this.state.mouseActive) {
							this.setState({
								mouseIndex: index
							})
						}
					}}
					className={`cpr-multi-selector-item ${this.getSelectedClass(item)} ${this.getActiveClass(index)}`}
					onClick={this.selectItem.bind(this, item)}>
					<ItemComponent item={item} selectedItems={this.state.selectedItems} getItemTitle={getItemTitle}/>
				</div>
			)
		})
	},

	selectItem: function(item, e) {
		let selectedItems = this.state.selectedItems;

		if(includes(selectedItems, item)) {
			this.setState({
				selectedItems: without(selectedItems, item)
			});
		} else {
			this.setState({
				selectedItems: union(selectedItems, [ item ])
			});
		}

		if (e && e.currentTarget) {
			e.currentTarget.value = '';
			this.inputChange('');
		}

		setTimeout(this.triggerItemChange);
	},

	positionDialog: function() {
		setTimeout(() => {
			let el = this.el;
			let height = el.clientHeight;
			let dialog = el.querySelector('.cpr-multi-selector__dialog');

			if (dialog) {
				dialog.style.top = (height + 1) + 'px';
				el.querySelector('.cpr-multi-selector__dialog__input').focus();
			}
		}, 100);
	},

	prevent: function(e){
		if(e.which === 13) e.preventDefault();
	},

	render: function() {
		//Get getItemTitle is the function that should be passed in to decide what `pill` will display on selection.
		let getItemTitle = this.props.getItemTitle || this.getItemTitle;

		let pills = this.state.selectedItems
			.map((item, i) => {
				return (
					<div key={i} className="cpr-multi-selector__pill" title={`${getItemTitle(item)}`}>
						<span
							style={{verticalAlign: 'top', margin: "0 8px"}}
							tooltip={getItemTitle(item)}>
							{getItemTitle(item)}
						</span>
						<div className="cpr-multi-selector__pill__close">
							<i onClick={this.removeItem.bind(this, item)} className="cps-icon cps-icon-close"></i>
						</div>
					</div>
				);
			});

		let dialog;

		if (this.state.dialogDisplayed) {
			let placeholder = this.props.placeholder ? this.props.placeholder : "Type a collaborators name...";
			let maxLength = this.props.maxLength;
			dialog = (
				<div className="cpr-multi-selector__dialog depth-z2" style={{}}>
					<div style={{padding: "16px", borderBottom: "1px solid #E9E9E9"}}>
						<input
							onChange={this.handleChange}
							onKeyDown={this.keyDown}
							className="cps-form-control cpr-multi-selector__dialog__input"
							placeholder={placeholder}
							{...(maxLength ? {maxLength} : {})}/>
					</div>
					<div className="cpr-multi-selector__dialog__items">
						{this.getSearchItems(this.props.items)}
					</div>
				</div>
			)

			this.positionDialog();
		}

		return (
			<div ref={el => { if (el) this.el = el }} className='cpr-multi-selector'>
				<input type="input" className="cpr-multi-selector__hidden-input" onFocus={this.displayDialog}/>
				<div onClick={this.displayDialog} className="cpr-multi-selector__main-input cps-form-control">
					{pills}
				</div>
				{dialog}
			</div>
		)
	}
});

if (window && !window.MultiSelector) window.MultiSelector = MultiSelector;

export default MultiSelector;
