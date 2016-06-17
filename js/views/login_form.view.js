import {formTemplate, loggedInTemplate} from '../templates/login.template.html.js';

var loginFormView = Backbone.View.extend({

	el: '#app',

	formTemplate: _.template( formTemplate ),
	loggedInTemplate: _.template( loggedInTemplate ),

	events : {
		"click #submit" : "submit"
	},

	initialize: function(){
		console.log('form view initialized...');
		this.render();
		console.log(JSON.stringify(this.model));
		_.bindAll(this, 'submit');
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		console.log('view render trigered');
		if (this.model.get('token') !== ''){
			this.$el.html(this.loggedInTemplate(this.model.attributes));
		} else {
			this.$el.html(this.formTemplate(this.model.attributes));		}
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
    $.post( 'http://localhost:3000/authenticate', formData ).done( function(data)
    {
    	console.log(data);
    	// store the token into the form model
			tmpThis.model.set({
				name: data.name,
				mail: data.mail,
				business: data.business,
				token: data.token
			});
  	});
  }
});

export {loginFormView};