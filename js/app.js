import {loginFormView} from './views/login_form.view.js';
import {loginFormModel} from './models/login_form.model.js';

var loginForm = new loginFormView({ model: new loginFormModel });

var Router = Backbone.Router.extend({
	routes: {
		'signin': 'signin',
		'login': 'login',
		'about': 'about'
	},

	signin: function(){
		console.log("newUser");
		loginForm.$el.hide();
	},

	login: function(){
		console.log('login');
		loginForm.$el.show();
	},

	about: function(){
		console.log(loginForm.model.get('token'));
	}
});

var router = new Router();
Backbone.history.start();
