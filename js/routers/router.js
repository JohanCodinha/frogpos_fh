import {loginFormView} from '../views/login_form.view.js';
import {userModel} from '../models/login_form.model.js';

var loginForm = new loginFormView({ model: new userModel });

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
	},
	pos: function(){
		loginForm.$el.hide();
		
	},
});

export {Router};

