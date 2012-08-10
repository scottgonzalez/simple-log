# node-logger

A simple logger for node.js.

## Installation

```sh
npm install git://github.com/jquery/node-logger.git
```

*Note: This module is very basic and is only intended to standardize logging
within jQuery projects, so this is not versioned or published on npm.*

## Usage

```js
var logger = require( "logger" ).init( "appname" );
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
