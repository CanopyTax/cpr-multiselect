import React from 'react';
import PropTypes from 'prop-types';
import { without, includes, union, isNull, find, partial, some, isEqual, noop } from 'lodash';
import styles from './multi-selector.css';

function DefaultItemComponent(props) {
  const item = props.item;
  const getItemTitle = props.getItemTitle;
  const selectedItems = props.selectedItems;
  const selected = selectedItems.some(checkItem => isEqual(checkItem, item));

  return (
    <div title={`${getItemTitle(item)}`}>
      <div
        className={`${styles['cpr-multi-selector-item__icon']} ${selected
          ? `cps-bg-primary-green ${styles[`cpr-multi-selector-item__icon--selected`]}`
          : ''}`}>
        <i className="cps-icon cps-icon-lg-check" style={{ opacity: selected ? '1' : '0' }} />
      </div>
      <div className={`${styles['cpr-multi-selector-item__title']}`}>{`${getItemTitle(item)}`}</div>
    </div>
  );
}

DefaultItemComponent.propTypes = {
  item: PropTypes.any.isRequired,
  getItemTitle: PropTypes.func,
  doNotScroll: PropTypes.bool,
  selectedItems: PropTypes.array.isRequired,
};

function DefaultPillBoxComponent(props) {
  const pills = props.pills;

  return (
    <div>
      <input
        type="input"
        className={`${styles['cpr-multi-selector__hidden-input']} ${props.hasError
          ? styles['cpr-multi-selector__has-error']
          : ''}`}
        onFocus={props.displayDialog}
        tabIndex={props.disabled ? -1 : 0}
      />
      <div
        disabled={props.disabled}
        onClick={!props.disabled ? props.displayDialog : noop}
        className={`${styles['cpr-multi-selector__main-input']} ${props.hasError ? styles['cps-multi-selector__error'] : ''} cps-form-control`}>
        {pills && pills.length ? (
          pills
        ) : (
          <div style={{ padding: '2px 8px 1px', color: 'var(--cps-color-cool-gray)', fontStyle: 'italic' }}>{props.pillPlaceholder}</div>
        )}
      </div>
    </div>
  );
}

DefaultPillBoxComponent.propTypes = {
  pills: PropTypes.array,
  pillPlaceholder: PropTypes.string,
  hasError: PropTypes.bool,
  displayDialog: PropTypes.func,
};

function DefaultPill(props) {
	return(
		<div
			className={`${styles['cpr-multi-selector__pill']} ${styles[`cpr-multi-selector__pill--${props.color || "green"}`]}`}
			title={`${props.getItemTitle(props.item)}`}>
			<span
				style={{verticalAlign: 'top', margin: "0 8px"}}
				title={props.getItemTitle(props.item)}>
				{props.getItemTitle(props.item)}
			</span>
			{!props.disabled && <div className={`${styles['cpr-multi-selector__pill__close']}`}>
				<i
					onClick={props.removeItem}
					className="cps-icon cps-icon-sm-neg"></i>
			</div>
      }
		</div>
	)
}

DefaultPill.propTypes = {
	removeItem: PropTypes.func,
	color: PropTypes.string,
  getItemTitle: PropTypes.func,
  item: PropTypes.any.isRequired,
}

export default class MultiSelector extends React.Component {
  constructor(props) {
    super();

    this.gotMounted = false;

    this.state = {
      selectedItems: props.initialSelectedItems || [],
      mouseIndex: null,
      mouseActive: true,
      mouseFunc: null,
      dialogDisplayed: false,
      activeIndex: null,
      searchValue: '',
      lastModifiedItem: null,
      invalid: false,
    };
  };

  static defaultProps = {
    showSearch: true,
    pillUniqueIdentifier: 'id',
    initialSelectedItems: [],
    doNotScroll: false,
  }

  componentDidUpdate(prevProps){
    if(this.props.initialSelectedItems !== prevProps.initialSelectedItems){
      this.setState({
        selectedItems: this.props.initialSelectedItems,
        initialSelectedItems: this.props.initialSelectedItems,
      })
    }
  }

  componentDidMount() {
    this.gotMounted = true;
    document.addEventListener('click', this.close);
  };

  componentWillUnmount() {
    this.gotMounted = false;
    document.removeEventListener('click', this.close);
  };

  closeDialog = () => {
    this.props.onBlur && this.props.onBlur();
    this.setState({
      dialogDisplayed: false,
      searchValue: '',
    });
  };

  displayDialog = (e) => {
    if (!this.state.dialogDisplayed) this.props.onFocus && this.props.onFocus();
    this.setState({
      dialogDisplayed: true,
    });
  };

  removeItem = (item, e) => {
    e.stopPropagation();
    this.setState(
      {
        selectedItems: without(this.state.selectedItems, item),
        lastModifiedItem: item,
      },
      this.triggerItemChange
    );
  };

  getItemTitle = (item) => {
    return item.label;
  };

  setActiveIndex = (index) => {
    this.setState(
      {
        activeIndex: index,
        mouseIndex: null,
      },
      () => {
        if (!isNull(this.state.activeIndex) && !!this.searchItems[this.state.activeIndex]) {
          if (!this.props.doNotScroll) {
            this.searchItems[this.state.activeIndex].scrollIntoView();
          }
          if (this.state.mouseActive) {
            this.setState(
              {
                mouseActive: false,
                mouseFunc: () => {
                  this.setState({
                    mouseActive: true,
                  });
                  document.removeEventListener('mousemove', this.state.mouseFunc);
                },
              },
              () => {
                document.addEventListener('mousemove', this.state.mouseFunc);
              }
            );
          }
        }
      }
    );
  };

  handleChange = (e) => {
    e.persist();
    let newVal = e.target.value;
    if (this.state.invalid && this.props.validate) {
      this.setState({
        invalid: !this.props.validate(newVal),
      });
    }
    this.setState(
      {
        disabled: this.props.disableInput ? this.props.disableInput(newVal) : false,
      },
      () => {
        this.inputChange(newVal);
      }
    );
  };

  inputChange = (newVal) => {
    this.props.onInputChange && this.props.onInputChange(newVal);

    this.setState({
      searchValue: newVal,
    });
  };

  keyDown = (e) => {
    const keycode = e.which;
    const activeIndex = this.state.activeIndex;
    const filterItems = this.getFilterItems(this.props.items);

    if (isNull(activeIndex) && filterItems.length !== 0) {
      this.setActiveIndex(0);
    } else if (filterItems.length === 0) {
      this.setActiveIndex(null);
    }

    if (keycode === 13) e.preventDefault();
    if (keycode === 40) {
      // press down key
      if (isNull(activeIndex) && filterItems.length !== 0) {
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
      if (!isNull(activeIndex) && filterItems.length !== 0) {
        return this.selectItem(filterItems[activeIndex], e);
      } else if (this.props.noRestrict && e.currentTarget.value) {
        // if the noRestrict prop is true it adds the input as a string to the selected items on enter
        e.persist();
        return this.validateInput(e.currentTarget.value, e);
      }
    } else if (keycode === 27) {
      // press escape key
      return this.setState({
        activeIndex: null,
        dialogDisplayed: false,
      });
    } else if (keycode === 9) {
      //tab key
      this.setState({
        dialogDisplayed: false,
      });
    }
  };

  triggerItemChange = () => {
    if (this.props.onChange) {
      this.props.onChange.call(null, this.state.selectedItems, this.state.lastModifiedItem);
    }
  };

  getSelectedClass = (item) => {
    return includes(this.state.selectedItems, item) ? '+selected' : '';
  };

  getActiveClass = (index) => {
    return this.state.activeIndex === index || this.state.mouseIndex === index
      ? styles['cpr-multi-selector-item--highlighted']
      : '';
  };

  getFilterItems = (items = []) => {
    let getItemTitle = this.props.getItemTitle || this.getItemTitle;

    return items.filter(item => {
      return (
        getItemTitle(item)
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) > -1
      );
    });
  };

  getSearchItems = (items = []) => {
    let ItemComponent = this.props.ItemComponent || DefaultItemComponent;
    let getItemTitle = this.props.getItemTitle || this.getItemTitle;
    let filterItems = this.getFilterItems(items);

    // Show a message that user can press enter to add new item
    if (filterItems.length === 0) {
      if (this.props.noRestrict && this.state.searchValue) {
        const pressEnterToAddPhrase = this.props.pressEnterToAddPhrase || 'Press Enter to add';
        return (
          <div className={`${styles['cpr-multi-selector-item']}`}>
            {pressEnterToAddPhrase} "{this.state.searchValue}"
          </div>
        );
      } else {
        const noResultsPhrase = this.props.noResultsPhrase || 'No items found.';
        return <div className={`${styles['cpr-multi-selector-no-items']}`}>{noResultsPhrase}</div>;
      }
    }

    // If noRestrict & the search term doesn't have an exact match, append an additional "result" for the new item
    // This is to allow adding of new items when the search term has matching filtered items but not an exact match
    if (
      this.props.noRestrict &&
      this.state.searchValue &&
      !find(filterItems, item => getItemTitle(item).toLowerCase() === this.state.searchValue.toLowerCase())
    ) {
      filterItems.push(this.state.searchValue);
    }

    if (this.props.maxSearchItems) {
      filterItems.length =
        filterItems.length > this.props.maxSearchItems ? this.props.maxSearchItems : filterItems.length;
    }

    return filterItems.map((item, index) => {
      return (
        <div
          key={index}
          ref={ref => {
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
                mouseIndex: index,
              });
            }
          }}
          className={`${styles['cpr-multi-selector-item']} ${this.getSelectedClass(
            item
          )} ${this.getActiveClass(index)}`}
          onClick={partial(this.selectItem, item)}>
          <ItemComponent
            item={item}
            selectedItems={this.state.selectedItems}
            getItemTitle={getItemTitle}
            doNotScroll={this.props.doNotScroll}
          />
        </div>
      );
    });
  };

  selectItem = (item, e) => {
    let selectedItems = this.state.selectedItems;
    if (some(selectedItems, item)) {
      this.setState(
        {
          selectedItems: item.id ? selectedItems.filter(i => i.id !== item.id) : without(selectedItems, item),
          invalid: false,
          dialogDisplayed: !this.props.closeOnSelect,
          lastModifiedItem: item,
        },
        this.triggerItemChange
      );
    } else {
      this.setState(
        {
          selectedItems: union(selectedItems, [item]),
          invalid: false,
          dialogDisplayed: !this.props.closeOnSelect,
          lastModifiedItem: item,
        },
        this.triggerItemChange
      );
    }
    if (!this.props.keepSearchTextOnSelect && e && e.currentTarget) {
      e.currentTarget.value = '';
      this.inputChange('');
    }
  };

  validateInput = (input, e) => {
    if (this.state.disabled) return;
    if (this.props.validate) {
      const valid = this.props.validate(input);
      if (valid) this.selectItem(input, e);
      else this.setState({ invalid: true });
    } else {
      this.selectItem(input, e);
    }
  };

  positionDialog = () => {
    const showSearch = this.props.showSearch
    setTimeout(() => {
      let el = this.el;
      let height = el.clientHeight;
      let dialog = el.querySelector(`.${styles['cpr-multi-selector__dialog']}`);

      if (dialog) {
        dialog.style.top = height + 1 + 'px';
        if (showSearch) {
          el.querySelector(`.${styles['cpr-multi-selector__dialog__input']}`).focus();
        }
      }
    }, 100);
  };

  prevent = (e) => {
    if (e.which === 13) e.preventDefault();
  };

  render() {
    //Get getItemTitle is the function that should be passed in to decide what `pill` will display on selection.
    let getItemTitle = this.props.getItemTitle || this.getItemTitle;
    let PillBoxComponent = this.props.CustomPillboxComponent || DefaultPillBoxComponent;
    let Pill = this.props.CustomPill || DefaultPill
    let pills = (this.state.selectedItems || [])
    .map((item, i) => {
      return (
        <Pill
          key={item[this.props.pillUniqueIdentifier] || i}
          item={item}
          removeItem={partial(this.removeItem, item)}
          color={this.props.color}
          getItemTitle={getItemTitle}
          disabled={this.props.disabled}
        />
      );
    });

    let dialog;

    if (this.state.dialogDisplayed) {
      let placeholder = this.props.placeholder ? this.props.placeholder : 'Type a collaborators name...';
      let maxLength = this.props.maxLength;
      dialog = (
        <div className={`${styles['cpr-multi-selector__dialog']} depth-z2`} style={{}}>
          {
            this.props.showSearch ? (
              <div
                className={`${this.state.invalid ? 'cps-has-error' : ''}
                  ${styles['cpr-multi-selector__dialog__search']}`}>
                <input
                  onChange={this.handleChange}
                  onKeyDown={this.keyDown}
                  className={`cps-form-control ${styles['cpr-multi-selector__dialog__input']}`}
                  placeholder={placeholder}
                  value={this.state.searchValue}
                  {...(maxLength ? { maxLength } : {})}
                />
                {this.state.invalid && <span className="cps-error-block">{this.props.invalidMsg}</span>}
              </div>
            ) : (null)
          }
          <div
            style={this.props.dialogHeight ? { maxHeight: this.props.dialogHeight } : {}}
            className={`${styles['cpr-multi-selector__dialog__items']}`}>
            {this.getSearchItems(this.props.items)}
          </div>
          {this.props.doneButton && (
            <div
              style={{ padding: '8px 16px', borderTop: '1px solid rgb(233, 233, 233)' }}
              className={`cps-bg-gray-3 ${styles['cpr-multi-selector__done']}`}>
              <a onClick={this.closeDialog} className={`cps-link +primary`}>
                Done
              </a>
            </div>
          )}
        </div>
      );

      this.positionDialog();
    }

    return (
      <div
        ref={el => {
          if (el) this.el = el;
        }}
        className={`${styles['cpr-multi-selector']} ${this.state.dialogDisplayed
          ? styles['cpr-multi-selector--active']
          : ''} ${this.props.customCSSClass || ''}`}>
        <PillBoxComponent
          pills={pills}
          displayDialog={this.displayDialog}
          pillPlaceholder={this.props.pillPlaceholder}
          hasError={this.props.hasError}
          disabled={this.props.disabled}
        />
        {dialog}
      </div>
    );
  };

  close = e => {
    const eventOccurredInsideOfThisComponent = this.el ? this.el.contains(e.target) : false;
    if (!eventOccurredInsideOfThisComponent) {
      setTimeout(() => {
        if (this.state.dialogDisplayed && this.gotMounted) {
          this.closeDialog();
        }
      });
    }
  };
};

MultiSelector.propTypes = {
  items: PropTypes.array.isRequired,
  initialSelectedItems: PropTypes.array,
  onInputChange: PropTypes.func,
  onChange: PropTypes.func,
  getItemTitle: PropTypes.func,
  ItemComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  CustomPillboxComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  placeholder: PropTypes.string,
  pillPlaceholder: PropTypes.string,
  maxLength: PropTypes.number,
  noRestrict: PropTypes.bool,
  pressEnterToAddPhrase: PropTypes.string,
  noResultsPhrase: PropTypes.string,
  customCSSClass: PropTypes.string,
  hasError: PropTypes.bool,
  color: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  keepSearchTextOnSelect: PropTypes.bool,
  showSearch: PropTypes.bool,
  doNotScroll: PropTypes.bool,
};

if (window && !window.MultiSelector) window.MultiSelector = MultiSelector;
