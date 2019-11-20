![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=for-the-badge)

![WebComponent pwc-choices](https://raw.githubusercontent.com/paraboly/pwc-choices/master/assets/logo.png)

[![pwc-choices Choices.js wrapper for Stencil.js](https://img.shields.io/badge/pwc--choices-Choices.js%20wrapper%20for%20Stencil.js-lightgrey?style=for-the-badge)](https://github.com/Paraboly/pwc-choices)

[![npm version](https://img.shields.io/npm/v/@paraboly/pwc-choices.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-choices)
[![npm](https://img.shields.io/npm/dt/@paraboly/pwc-choices.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-choices)
![Platform - Platform Free Web](https://img.shields.io/badge/-Web%20%7C%20Platform%20Free-blue?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![pwc-choices](https://raw.githubusercontent.com/paraboly/pwc-choices/master/assets/Screenshots/JSLibraryBoilerplate.png)

## [Live JSFiddle Example](https://jsfiddle.net/starikcetin/L3ye08gr/)

# pwc-choices Web Component

Select component which just wraps [ChoicesJS][choicesjs] in a real [Web Component][web-component]. It has been created using [StencilJS][stenciljs], and written with [_Typescript_][typescript] and [_JSX_][jsx].

This component allows the user to select from dropdowns, to browser between multiple options, to add tags to an input, etc.

## Use cases

The purpose of this project is to create a simple Web Component wrapper from the [ChoicesJS][choicesjs] library.

All the available use cases of the original library can be perform using this Web Component.

For more information read the [library documentation][choicesjs-documentation].

## Installation

### Script tag

- Put a script tag similar to this `<script type="module" src="https://unpkg.com/@paraboly/pwc-choices@latest/dist/pwc-choices/pwc-choices.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install @paraboly/pwc-choices --save`
- Put a script tag similar to this `<script src='node_modules/@paraboly/pwc-choices/dist/pwc-choices.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install @paraboly/pwc-choices --save`
- Add an import to the npm packages `import @paraboly/pwc-choices;`
- Then you can use the element anywhere in your template, JSX, html etc

## Usage

Use it as a new HTML element in your template:

```html
<pwc-choices values="foo,bar"></pwc-choices>
```

To be able to work with the component in a form it needs a name:

```html
<form name="form">
  <pwc-choices name="select" values="foo,bar"></pwc-choices>
</form>
```

### Advanced usage

Some of this component properties must be set via JavaScript (non primitive types). As well as properties, the component provides public methods and events (see the [library documentation][choicesjs-documentation]).

```html
<pwc-choices type="single"></pwc-choices>

<script>
  var element = document.querySelector("pwc-choices");

  element.choices = [
    {
      value: "",
      label: "Pick an item...",
      placeholder: true
    },
    {
      value: "foo",
      label: "Foo"
    },
    {
      value: "bar",
      label: "Bar"
    },
    {
      value: "qux",
      label: "Qux"
    }
  ];

  element.disable();
</script>
```

### Configuration

- `type`: the type of selector to render, defaults to `text`. Options: `text`, `single`, `multiple`.
- `items`: a list of preselected values for `text` type select. It must be set via JavaScript.
- `choices`: a list of available values for `single` and `multiple` type selects. It must be set via JavaScript.

Additionally, more options can be set, check the [documentation][choicesjs-documentation] for further details.

### Browser support

Chrome (and all Chrome based browsers), Safari, Firefox and Edge (IE11 is also supported).

### Documentation

Generate documentation with [_typedoc_][typedoc]: `npm run doc`

Documentation found in `docs` folder.

## Authors

This library is a fork of the [choicesjs-stencil][choicesjs-stencil] library.

### Modifications:

starikcetin, tarik.cetin@paraboly.com | cetinsamedtarik@gmail.com

## License

Pwc-Choices is available under the MIT license. See the [LICENSE](LICENSE) file for more info.

[choicesjs-stencil]: https://github.com/adidas/choicesjs-stencil
[choicesjs]: https://github.com/jshjohnson/Choices
[choicesjs-documentation]: https://github.com/jshjohnson/Choices/tree/master
[jest]: https://jestjs.io/
[jsx]: https://jsx.github.io/
[stenciljs]: https://stenciljs.com
[typedoc]: http://typedoc.org/
[typescript]: http://www.typescriptlang.org/
[web-component]: https://www.webcomponents.org/
