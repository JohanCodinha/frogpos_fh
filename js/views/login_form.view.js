import {template as loginTemplate} from '../templates/login.template.html.js';

var loginFormView = Backbone.View.extend({

	el: '#app',

	template: _.template( loginTemplate ),

	events : {
		"click #submit" : "submit"
	},

	initialize: function(){
		console.log('form view initialized...');
		this.render();
		console.log(JSON.stringify(this.model));
		_.bindAll(this, 'submit');
		},

	render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  submit: function(e){
  	e.preventDefault();
  	var tmpThis = this;
  	console.log(tmpThis);
  	var formData = {};

  	// check every input field and asign value to formData object
    $( '#login-form' ).children( 'input' ).each( function( i, el ) {
	    if( $( el ).val() !== '' )
	    {
	      formData[ el.id ] = $( el ).val();
	    } }
	  );

    // Post request to login, retreive a token back.
    $.post('http://localhost:3000/authenticate', formData ).done( function(data)
    {
    	// store the token into the form model
			tmpThis.model.set('token', data.token);
  	});
  }
});

export {loginFormView};