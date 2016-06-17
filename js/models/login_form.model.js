var userModel = Backbone.Model.extend({
	defaults: {
		mail: '',
		name: '',
		business: '',
		token : ''
	}
});
export {userModel};