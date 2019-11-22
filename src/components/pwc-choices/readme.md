# pwc-choices



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                  | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default     |
| --------------------------- | -------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `addItemFilterFn`           | --                         |             | `(value: string) => boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined` |
| `addItemText`               | `add-item-text`            |             | `((value: string) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `addItems`                  | `add-items`                |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `appendValue`               | `append-value`             |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `callbackOnCreateTemplates` | --                         |             | `(template: any) => any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `callbackOnInit`            | --                         |             | `() => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined` |
| `choices`                   | `choices`                  |             | `any[] \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined` |
| `classNames`                | --                         |             | `{ containerOuter?: string; containerInner?: string; input?: string; inputCloned?: string; list?: string; listItems?: string; listSingle?: string; listDropdown?: string; item?: string; itemSelectable?: string; itemDisabled?: string; itemOption?: string; group?: string; groupHeading?: string; placeholder?: string; button?: string; activeState?: string; focusState?: string; openState?: string; disabledState?: string; highlightedState?: string; hiddenState?: string; flippedState?: string; loadingState?: string; noResults?: string; noChoices?: string; }` | `undefined` |
| `delimiter`                 | `delimiter`                |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `duplicateItemsAllowed`     | `duplicate-items-allowed`  |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `editItems`                 | `edit-items`               |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `fuseOptions`               | --                         |             | `{ caseSensitive?: boolean; minMatchCharLength?: number; shouldSort?: boolean; tokenize?: boolean; tokenSeparator?: RegExp; matchAllTokens?: boolean; findAllMatches?: boolean; verbose?: boolean; id?: string; keys?: string[] \| object[] \| WeightedField[]; location?: number; threshold?: number; distance?: number; maxPatternLength?: number; }`                                                                                                                                                                                                                      | `undefined` |
| `itemSelectText`            | `item-select-text`         |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `items`                     | --                         |             | `any[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `loadingText`               | `loading-text`             |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `maxItemCount`              | `max-item-count`           |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `maxItemText`               | `max-item-text`            |             | `((maxItemCount: number) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `undefined` |
| `name`                      | `name`                     |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `noChoicesText`             | `no-choices-text`          |             | `(() => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `noResultsText`             | `no-results-text`          |             | `(() => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `paste`                     | `paste`                    |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `placeholder`               | `placeholder`              |             | `boolean \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |
| `placeholderValue`          | `placeholder-value`        |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `position`                  | `position`                 |             | `"auto" \| "bottom" \| "top"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `undefined` |
| `prependValue`              | `prepend-value`            |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `removeItemButton`          | `remove-item-button`       |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `removeItems`               | `remove-items`             |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `renderChoiceLimit`         | `render-choice-limit`      |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `renderSelectedChoices`     | `render-selected-choices`  |             | `"always" \| "auto"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `resetScrollPosition`       | `reset-scroll-position`    |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `searchChoices`             | `search-choices`           |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `searchEnabled`             | `search-enabled`           |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `searchFields`              | `search-fields`            |             | `string \| string[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `searchFloor`               | `search-floor`             |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `searchPlaceholderValue`    | `search-placeholder-value` |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `searchResultLimit`         | `search-result-limit`      |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `shouldSort`                | `should-sort`              |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `shouldSortItems`           | `should-sort-items`        |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `silent`                    | `silent`                   |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `sortFn`                    | --                         |             | `(el1: any, el2: any) => number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined` |
| `type`                      | `type`                     |             | `"multiple" \| "single" \| "text"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined` |
| `uniqueItemText`            | `unique-item-text`         |             | `((value: string) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `value`                     | `value`                    |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |


## Methods

### `ajax(fn: AjaxFn) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `clearChoices() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `clearInput() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `clearStore() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `disable() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `enable() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `getValue(valueOnly?: boolean) => Promise<string | string[]>`



#### Returns

Type: `Promise<string | string[]>`



### `hideDropdown(blurInput?: boolean) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `highlightAll() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `highlightItem(item: HTMLElement, runEvent?: boolean) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `removeActiveItems(excludedId?: number) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `removeActiveItemsByValue(value: string) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `removeHighlightedItems(runEvent?: boolean) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `setChoiceByValue(value: string | string[]) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `setChoices(choices: any[], value: string, label: string, replaceChoices?: boolean) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `setValue(args: any[]) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `showDropdown(focusInput?: boolean) => Promise<this>`



#### Returns

Type: `Promise<this>`



### `unhighlightAll() => Promise<this>`



#### Returns

Type: `Promise<this>`



### `unhighlightItem(item: HTMLElement) => Promise<this>`



#### Returns

Type: `Promise<this>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
