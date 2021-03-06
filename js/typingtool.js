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
    baseUrl: "http://" + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});


require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('2bfbd1ca-b3ea-4ef7-a316-56bd3f67b553', config); //

	
	
	
	//get total #
	app.getObject('QV01','eDPHWHz');
	
	//get listboxes
	app.getObject('QV02','UhqDeNU');
	app.getObject('QV03','UdUMcJY');
	
	//get objects -- inserted here --
	app.getObject('QV04','eSmfawp');
	app.getObject('QV05','ZwzKJJ');
	app.getObject('QV06','aVdPw');
	app.getObject('QV07','jNpppz');
	app.getObject('QV08','MUVGqYH');
	app.getObject('QV09','CNumbng');
	app.getObject('QV10','HDNcGR');
	app.getObject('QV11','KuLHYSM');
	app.getObject('QV12','MEZZhN');
	app.getObject('QV13','QBLK');
	app.getObject('QV14','BhPyU');
	

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
