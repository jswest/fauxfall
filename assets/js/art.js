window.Art = Backbone.Model.extend({
  url: function() { return 'art?id=' + this.id; }
});
window.ArtView = Backbone.View.extend({
  
});