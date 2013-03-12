$(document).ready( function() {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "take_me_home_jeeves"
    },
    
    take_me_home_jeeves: function() {
      var app_view = new window.AppView();
      app_view.render();
    }
    
  });
  
  var app_router = new AppRouter();
  Backbone.history.start();
  
});