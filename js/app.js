import {loginFormView} from './views/login_form.view.js';
import {loginFormModel} from './models/login_form.model.js';


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
		var loginForm = new loginFormView({ model: loginFormModel });
		console.log('++');
	},
	about: function(){
	}
});

var router = new Router();
Backbone.history.start();
