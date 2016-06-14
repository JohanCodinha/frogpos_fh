import {drawView} from './views/myview.js';

var Router = Backbone.Router.extend({
	routes: {
		'signin': 'newUser',
		'login': 'login',
		'about': 'about'
	},

	newUser: function(){
		console.log("newUser");
	},
	login: function(){
		console.log('login');
		drawView();
	},
	about: function(){
	}
});

var router = new Router();
Backbone.history.start();

