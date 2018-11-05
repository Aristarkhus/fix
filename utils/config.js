class Config{

	constructor(app){
		// mengatur format template menjadi html
		app.set('view engine', 'html');

		//directori template
		app.set('views', (__dirname + '/../views'));

		//File
		app.use(require('express').static(require('path').join('client')));

	}
}
module.exports = Config;
