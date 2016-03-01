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
    prefix: "/google/",
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
	
	app.getObject('QV03','aVdPw');
	app.getObject('QV04','ZwzKJJ');
	app.getObject('QV05','eSmfawp');
	//app.getObject('QV06','csXjXYA');
	//app.getObject('QV07','BVbpZv');
	//app.getObject('QV08','awfpES');
	//app.getObject('QV09','MyAuBm');
	//app.getObject('QV10','raUZcgG');
	//app.getObject('QV11','EcpuS');
	//app.getObject('QV12','ntpHbT');
	//app.getObject('QV13','SupJKJ');

	//get listboxes
	app.getObject('QV01','UhqDeNU');
	app.getObject('QV02','UdUMcJY');
	

	//Clear Selections button
    $('.clearButton').on('click', function(e) {
        e.preventDefault();
        app.clearAll();
    })
	
	//create cubes and lists -- inserted here --
