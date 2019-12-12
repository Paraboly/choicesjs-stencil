import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
  Watch
} from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";
import * as Choices from "choices.js";
import _ from "lodash";
import {
  AddItemTextFn,
  AjaxFn,
  ClassNames,
  FuseOptions,
  IChoicesMethods,
  IChoicesProps,
  ItemFilterFn,
  MaxItemTextFn,
  NoChoicesTextFn,
  NoResultsTextFn,
  OnCreateTemplates,
  OnInit,
  SortFn,
  UniqueItemText
} from "./interfaces";
import { filterObject, getValues, isDefined } from "./utils";

@Component({
  tag: "pwc-choices",
  styleUrl: "pwc-choices.scss",
  shadow: false
})
export class PwcChoicesComponent implements IChoicesMethods, IChoicesProps {
  @Event() onChange: EventEmitter;

  @Prop() public type?: "single" | "multiple" | "text";
  @Prop() public value: string;
  @Prop() public name: string;

  @Prop() public silent: boolean;
  @Prop() public items: Array<any>;
  @Prop() public choices: Array<any> | string;

  @Watch("choices")
  watchHandler(newValue) {
    this.choice.clearStore();
    const prepped = this.prepareChoices(newValue);
    this.choice.setChoices(prepped, "value", "label", true);
  }

  @Prop() public renderChoiceLimit: number;
  @Prop() public maxItemCount: number;
  @Prop() public addItems: boolean;
  @Prop() public removeItems: boolean;
  @Prop() public removeItemButton: boolean;
  @Prop() public editItems: boolean;
  @Prop() public duplicateItemsAllowed: boolean;
  @Prop() public delimiter: string;
  @Prop() public paste: boolean;
  @Prop() public searchEnabled: boolean;
  @Prop() public searchChoices: boolean;
  @Prop() public searchFields: Array<string> | string;
  @Prop() public searchFloor: number;
  @Prop() public searchResultLimit: number;
  @Prop() public position: "auto" | "top" | "bottom";
  @Prop() public resetScrollPosition: boolean;
  @Prop() public addItemFilterFn: ItemFilterFn;
  @Prop() public shouldSort: boolean;
  @Prop() public shouldSortItems: boolean;
  @Prop() public sortFn: SortFn;
  @Prop() public placeholder: boolean | string;
  @Prop() public placeholderValue: string;
  @Prop() public searchPlaceholderValue: string;
  @Prop() public prependValue: string;
  @Prop() public appendValue: string;
  @Prop() public renderSelectedChoices: "always" | "auto";
  @Prop() public loadingText: string;
  @Prop() public noResultsText: string | NoResultsTextFn;
  @Prop() public noChoicesText: string | NoChoicesTextFn;
  @Prop() public itemSelectText: string;
  @Prop() public addItemText: string | AddItemTextFn;
  @Prop() public maxItemText: string | MaxItemTextFn;
  @Prop() public uniqueItemText: UniqueItemText;
  @Prop() public classNames: ClassNames;
  @Prop() public fuseOptions: FuseOptions;
  @Prop() public callbackOnInit: OnInit;
  @Prop() public callbackOnCreateTemplates: OnCreateTemplates;

  /*
   * "value": consider duplicate if value is the same
   * "label": consider duplicate if label is the same
   * "all": consider duplicate if all fields are the same
   * "none": disable distinct filter (leave choices as-is)
   */
  @Prop() public distinct: "value" | "label" | "all" | "none" = "none";

  @Element() private readonly root: HTMLElement;

  private choice: Choices.default;
  private element: HTMLElement;

  @Method()
  public async highlightItem(item: HTMLElement, runEvent?: boolean) {
    this.choice.highlightItem(item, runEvent);

    return this;
  }

  @Method()
  public async unhighlightItem(item: HTMLElement) {
    this.choice.unhighlightItem(item);

    return this;
  }

  @Method()
  public async highlightAll() {
    this.choice.highlightAll();

    return this;
  }

  @Method()
  public async unhighlightAll() {
    this.choice.unhighlightAll();

    return this;
  }

  @Method()
  public async removeActiveItemsByValue(value: string) {
    this.choice.removeActiveItemsByValue(value);

    return this;
  }

  @Method()
  public async removeActiveItems(excludedId?: number) {
    this.choice.removeActiveItems(excludedId);

    return this;
  }

  @Method()
  public async removeHighlightedItems(runEvent?: boolean) {
    this.choice.removeHighlightedItems(runEvent);

    return this;
  }

  @Method()
  public async showDropdown(focusInput?: boolean) {
    this.choice.showDropdown(focusInput);

    return this;
  }

  @Method()
  public async hideDropdown(blurInput?: boolean) {
    this.choice.hideDropdown(blurInput);

    return this;
  }

  @Method()
  public async getValue(valueOnly?: boolean): Promise<string | Array<string>> {
    return this.choice.getValue(valueOnly);
  }

  @Method()
  public async setValue(args: Array<any>) {
    this.choice.setValue(args);

    return this;
  }

  @Method()
  public async setChoiceByValue(value: string | Array<string>) {
    this.choice.setChoiceByValue(value);

    return this;
  }

  @Method()
  public async setChoices(
    choices: Array<any>,
    value: string,
    label: string,
    replaceChoices?: boolean
  ) {
    this.choice.setChoices(choices, value, label, replaceChoices);

    return this;
  }

  @Method()
  public async clearChoices() {
    this.choice.setChoices([], "value", "label", true);

    return this;
  }

  @Method()
  public async clearStore() {
    this.choice.clearStore();

    return this;
  }

  @Method()
  public async clearInput() {
    this.choice.clearInput();

    return this;
  }

  @Method()
  public async enable() {
    this.choice.enable();

    return this;
  }

  @Method()
  public async disable() {
    this.choice.disable();

    return this;
  }

  @Method()
  public async ajax(fn: AjaxFn) {
    this.choice.ajax(fn);

    return this;
  }

  protected componentDidLoad() {
    this.init();
  }

  protected componentDidUpdate() {
    //this.init();
  }

  protected componentDidUnload() {
    this.destroy();
  }

  protected render(): any {
    const attributes = {
      "data-selector": "root",
      name: this.name || null
    };

    // destroy choices element to restore previous dom structure
    // so vdom can replace the element correctly
    //this.destroy();

    switch (this.type) {
      case "single":
        this.element = (
          <select {...attributes}>
            {this.value ? this.createSelectOptions(this.value) : null}
          </select>
        );
        break;
      case "multiple":
        this.element = (
          <select multiple {...attributes}>
            {this.value ? this.createSelectOptions(this.value) : null}
          </select>
        );
        break;
      case "text":
      default:
        this.element = <input type="text" value={this.value} {...attributes} />;
        break;
    }

    return this.element;
  }

  private prepareChoices(choices: Array<any> | string): Array<any> {
    const choicesResolved: Array<any> =
      (typeof choices === "string" && JSON.parse(choices)) || this.choices;

    switch (this.distinct) {
      case "value":
        return _.uniqBy(choicesResolved, c => c.value);
      case "label":
        return _.uniqBy(choicesResolved, c => c.label);
      case "all":
        return _.uniqWith(choicesResolved, _.isEqual);
      case "none":
        return choicesResolved;
      default:
        console.error(
          "PwcChoices: Distinct mode '" +
            this.distinct +
            "' is not supported. Valid modes: value | label | ref | none"
        );
        return choicesResolved;
    }
  }

  private init() {
    const props = {
      silent: this.silent,
      items: this.items,
      choices: this.prepareChoices(this.choices),
      renderChoiceLimit: this.renderChoiceLimit,
      maxItemCount: this.maxItemCount,
      addItems: this.addItems,
      removeItems: this.removeItems,
      removeItemButton: this.removeItemButton,
      editItems: this.editItems,
      duplicateItemsAllowed: this.duplicateItemsAllowed,
      delimiter: this.delimiter,
      paste: this.paste,
      searchEnabled: this.searchEnabled,
      searchChoices: this.searchChoices,
      searchFields: this.searchFields,
      searchFloor: this.searchFloor,
      searchResultLimit: this.searchResultLimit,
      position: this.position,
      resetScrollPosition: this.resetScrollPosition,
      addItemFilterFn: this.addItemFilterFn,
      shouldSort: this.shouldSort,
      shouldSortItems: this.shouldSortItems,
      sortFn: this.sortFn,
      placeholder: true,
      placeholderValue:
        this.placeholderValue ||
        (typeof this.placeholder === "string" && this.placeholder) ||
        " ",
      searchPlaceholderValue: this.searchPlaceholderValue,
      prependValue: this.prependValue,
      appendValue: this.appendValue,
      renderSelectedChoices: this.renderSelectedChoices,
      loadingText: this.loadingText,
      noResultsText: this.noResultsText,
      noChoicesText: this.noChoicesText,
      itemSelectText: this.itemSelectText,
      addItemText: this.addItemText,
      maxItemText: this.maxItemText,
      uniqueItemText: this.uniqueItemText,
      classNames: this.classNames,
      fuseOptions: this.fuseOptions,
      callbackOnInit: this.callbackOnInit,
      callbackOnCreateTemplates: this.callbackOnCreateTemplates
    };
    const settings = filterObject(props, isDefined);

    this.choice = new Choices.default(
      this.root.querySelector('[data-selector="root"]'),
      settings
    );
  }

  private destroy() {
    if (this.element) {
      this.element = null;
    }

    if (this.choice) {
      this.choice.destroy();
      this.choice = null;
    }
  }

  private createSelectOptions(
    values: string | Array<string>
  ): Array<HTMLStencilElement> {
    return getValues(values).map(value => (
      <option value={value}>{value}</option>
    ));
  }
}
