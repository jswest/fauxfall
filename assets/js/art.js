window.Art = Backbone.Model.extend({
  url: function() { return 'art?id=' + this.id; }
});
window.ArtView = Backbone.View.extend({
  class: 'art-wrapper',
  initialize: function() { _.bindAll( this, 'render' ); },
  render: function() {
  }
});