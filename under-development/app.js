var app = app || {};

app.Content = Backbone.Model.extend({

	urlRoot : "./content.json",

	defaults : {
		isLoading : true,
		aboutMe : {}
	},

	hasData : function () {
		this.save({
			isLoading : false
		});
	},

	initialize : function () {
		console.log("initialize");
		console.log(this);
	}

});

var content = new app.Content();

content.fetch({

	success : function (response) {
		console.log("success");
		console.log(response)
	},

	error : function (error) {
		console.log("error");
		console.log(error);
	}
});