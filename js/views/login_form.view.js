var loginFormView = Backbone.View.extend({

	tagName: 'body',

	template: _.template($('#login-form-template').html()),

	initialize: function(){
		console.log('form view initialize...');
		this.render();
	},

	render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

export {loginFormView};