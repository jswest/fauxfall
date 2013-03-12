window.AppView = Backbone.View.extend({
  className: 'page',
  initialize: function() { _.bindAll( this, 'render' ); },
  render: function() {
    var template = _.template( $('#app-template').html(), {} );
    $('.content').html( template );
    $('header#primary-header').height( $(window).height() ).fadeIn( 1500, function() {
      $(window).on( 'resize', function() {
        $('header#primary-header').height( $(window).height() );
      });
      var faux_collection = [];
      for( var i = 0; i < 10; i++ ) {
        faux_collection.push( new window.Paragraph( { id: i } ) );
      }
      var index = 0;
      var recursive_fetch = function() {
        faux_collection[index].fetch({
          success: function() {
            pv = new window.ParagraphView( { model: faux_collection[index] } );
            pv.render();
            index++;
            if( index < faux_collection.length ) {
              recursive_fetch();
            }
          }
        });
      }
      recursive_fetch();
    });
  }
});