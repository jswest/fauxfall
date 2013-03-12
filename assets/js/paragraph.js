window.Paragraph = Backbone.Model.extend({
  url: function() { return 'paragraph?id=' + this.id; }
});
window.ParagraphView = Backbone.View.extend({
  tagName: 'p',
  initialize: function() { _.bindAll( this, 'render' ); },
  render: function() {
    $('.inner-content').append( $(this.el).html( this.model.toJSON()[0] ) );
  }
});