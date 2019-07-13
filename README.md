# \<dmp-btn-toggle\>



## Install
```
    npm i --save dmp-btn-toggle
```

## Description

This component is a toggle button. It change state when is clicked
If the component has an attribute featured, and slot featured has an svg the component show a clickable icon to toggle featured-selected property.

## CSS Custom properties


| Name | Default | Description  |
|---|---|---|
| --backgroundColor  | lightblue  |   |
| --backgroundSelected  | #52b7d8  |   |
| --featuredBackground  | lightblue  |   |
| --featuredBackgroundSelected  | gold |   |
| --featuredStrokeColor  | transparent  |   |
| --featuredStrokeColorSelected  | transparent  |   |
|   |   |   |


## Properties

| Name | Description | Flow |
|---|---|---|
| value | Text in the button | IN |
| ownId | own id to use if item is in the list  | IN |
| selected | flag to check if button is on/off | IN/OUT |
| featured | flag to check show/hide featured selected option | IN |
| featuredSelected | flag to check if button featured is on/off | IN/OUT |
| disabled | flag to check if buttons is disabled/enabled | IN/OUT |

## Methods

| Name | Description |
|---|---|---|
| checkDisabled | returns component status |
| validation | Validate component |

## Events



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
