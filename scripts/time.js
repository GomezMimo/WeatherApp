var RefreshingTime = Backbone.View.extend({
	initialize: function(){
		this.model.on('change', function(){
			this.render();
		}, this);
	},
	render: function(){
		this.$el.html(this.model.get('time'));
	}
})

var modelTime = new Backbone.Model({
	time: new Date().toString()
});

var viewTime = new RefreshingTime({
	model: modelTime, 
	el: '#time'
});
viewTime.render();


function intervalTime(){	
	modelTime.set({time: new Date().toString()});
}

setInterval(intervalTime, 1000);