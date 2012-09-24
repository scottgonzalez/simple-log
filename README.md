# simple-log

A simple logger for node.js, which logs to syslog using the popular console API.

## Installation

```sh
npm install simple-log
```

## Usage

```js
var logger = require( "simple-log" ).init( "appname" );
logger.log( "hello" );
```

The logger will log to syslog by default. If the main script is executed with
`--console` then the logger will log to the console, allowing for easier
testing during development.

## API

The logger supports three methods:

* `logger.log( msg )`
* `logger.warn( msg )`
* `logger.error( msg )`

Each method supports the full `console.log()`/`util.format()` API.
