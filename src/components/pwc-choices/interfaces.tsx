/**
 * @link https://github.com/jshjohnson/Choices#classnames
 */
export type ClassNames = {
  containerOuter?: string;
  containerInner?: string;
  input?: string;
  inputCloned?: string;
  list?: string;
  listItems?: string;
  listSingle?: string;
  listDropdown?: string;
  item?: string;
  itemSelectable?: string;
  itemDisabled?: string;
  itemOption?: string;
  group?: string;
  groupHeading?: string;
  placeholder?: string;
  button?: string;
  activeState?: string;
  focusState?: string;
  openState?: string;
  disabledState?: string;
  highlightedState?: string;
  hiddenState?: string;
  flippedState?: string;
  loadingState?: string;
  noResults?: string;
  noChoices?: string;
};

/**
 * @link https://github.com/krisk/Fuse/tree/v2.7.4#weighted-search
 */
export type WeightedField = {
  [key: string]: any;
  weight: number;
};

/**
 * @link https://github.com/krisk/Fuse/tree/v2.7.4#options
 */
export type FuseOptions = {
  caseSensitive?: boolean;
  minMatchCharLength?: number;
  shouldSort?: boolean;
  tokenize?: boolean;
  tokenSeparator?: RegExp;
  matchAllTokens?: boolean;
  findAllMatches?: boolean;
  verbose?: boolean;
  id?: string;
  keys?: Array<string> | Array<object> | Array<WeightedField>;
  location?: number;
  threshold?: number;
  distance?: number;
  maxPatternLength?: number;
};

/**
 * @link https://github.com/jshjohnson/Choices#additemfilterfn
 */
export type ItemFilterFn = (value: string) => boolean;

/**
 * @link https://github.com/jshjohnson/Choices#noresultstext
 */
export type NoResultsTextFn = () => string;

/**
 * @link https://github.com/jshjohnson/Choices#nochoicestext
 */
export type NoChoicesTextFn = () => string;

/**
 * @link https://github.com/jshjohnson/Choices#additemtext
 */
export type AddItemTextFn = ((value: string) => string) | string;

/**
 * @link https://github.com/jshjohnson/Choices#maxitemtext
 */
export type MaxItemTextFn = (maxItemCount: number) => string;

/**
 * @link https://github.com/jshjohnson/Choices#sortfilter
 */
export type SortFn = (el1: any, el2: any) => number;

export type UniqueItemText = ((value: string) => string) | string;

/**
 * @link https://github.com/jshjohnson/Choices#callbackoninit
 */
export type OnInit = () => void;

/**
 * @link https://github.com/jshjohnson/Choices#callbackoncreatetemplates
 */
export type OnCreateTemplates = (template) => any;

/**
 * @link https://github.com/jshjohnson/Choices#configuration-options
 */
export interface IChoicesProps {
  silent?: boolean;
  items?: Array<any>;
  choices?: Array<any>;
  classNames?: ClassNames;
  renderChoiceLimit?: number;
  maxItemCount?: number;
  addItems?: boolean;
  removeItems?: boolean;
  removeItemButton?: boolean;
  editItems?: boolean;
  duplicateItemsAllowed?: boolean;
  delimiter?: string;
  paste?: boolean;
  searchEnabled?: boolean;
  searchChoices?: boolean;
  searchFields?: Array<any> | string;
  searchFloor?: number;
  searchResultLimit?: number;
  fuseOptions?: FuseOptions;
  position?: 'auto' | 'top' | 'bottom';
  resetScrollPosition?: boolean;
  addItemFilterFn?: ItemFilterFn;
  shouldSort?: boolean;
  shouldSortItems?: boolean;
  placeholder?: boolean | string;
  placeholderValue?: string;
  searchPlaceholderValue?: string;
  prependValue?: string;
  appendValue?: string;
  renderSelectedChoices?: 'always' | 'auto';
  loadingText?: string;
  noResultsText?: string | NoResultsTextFn;
  noChoicesText?: string | NoChoicesTextFn;
  itemSelectText?: string;
  addItemText?: string | AddItemTextFn;
  maxItemText?: string | MaxItemTextFn;
  sortFn?: SortFn;
  callbackOnInit?: OnInit;
  callbackOnCreateTemplates?: OnCreateTemplates;
}

/**
 * @link https://github.com/jshjohnson/Choices#ajaxfn
 */
export type AjaxFn = (callback) => void;

/**
 * @link https://github.com/jshjohnson/Choices#methods
 */
export interface IChoicesMethods {
  highlightItem(item: Element, runEvent?: boolean);
  unhighlightItem(item: Element);
  highlightAll();
  unhighlightAll();
  removeActiveItemsByValue(value);
  removeActiveItems(excludedId);
  removeHighlightedItems();
  showDropdown();
  hideDropdown();
  getValue(valueOnly);
  setValue(args);
  setChoiceByValue(value: string | Array<string>);
  setChoices(choices, value, label, replaceChoices);
  clearChoices();
  clearStore();
  clearInput();
  enable();
  disable();
  ajax(fn: AjaxFn);
}
