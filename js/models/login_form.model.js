var loginFormModel = Backbone.Model.extend({
	defaults: {
		mail: '',
		password : '',
		token : '',
	}
});
export {loginFormModel};