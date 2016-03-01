/*global require, alert*/
/*
 * 
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var config = {
    host: "52.5.30.219",
    prefix: "/google",
    port: 80,
    isSecure: false
};
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});


require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('2bfbd1ca-b3ea-4ef7-a316-56bd3f67b553', config); //

	
	//get objects -- inserted here --
	
	app.getObject('QV01','RVjezMV');
	app.getObject('QV02','eWyRUR');
	app.getObject('QV03','LwtTYjq');
	app.getObject('QV04','csXjXYA');
	app.getObject('QV05','BVbpZv');
	app.getObject('QV06','awfpES');
	app.getObject('QV07','MyAuBm');
	app.getObject('QV08','raUZcgG');
	app.getObject('QV09','EcpuS');
	app.getObject('QV10','ntpHbT');
	app.getObject('QV11','SupJKJ');

	//get listboxes
	app.getObject('QV01','eSmfawp');
	app.getObject('QV02','UhqDeNU');
	

	//Clear Selections button
    $('.clearButton').on('click', function(e) {
        e.preventDefault();
        app.clearAll();
    })
	
	//create cubes and lists -- inserted here --

	app.createGenericObject({
	  'kpi': {
	     qStringExpression: '=Count(distinct ID)'
	  }
	}, function(reply) {
	  //do something with reply
	  $('#QVN01').text(reply.kpi)
	})

} );
