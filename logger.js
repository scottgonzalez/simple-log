if ( process.argv.indexOf( "--console" ) !== -1 ) {
	module.exports = {
		init: function() {
			return console;
		}
	};
	return;
}

var syslog = require( "node-syslog" );

module.exports = {
	init: function( name ) {
		syslog.init( name, syslog.LOG_PID, syslog.LOG_LOCAL0 );

		return {
			log: function( msg ) {
				syslog.log( syslog.LOG_INFO, msg );
			},

			warn: function( msg ) {
				syslog.log( syslog.LOG_NOTICE, msg );
			},

			error: function( msg ) {
				syslog.log( syslog.LOG_ERR, msg );
			}
		};
	}
};
