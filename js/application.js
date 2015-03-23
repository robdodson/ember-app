window.App = Ember.Application.create();

App.Router.map(function() {
  this.route('favorites');
  this.route('tacos');
});

App.FavoritesRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        name: 'Foo'
      },
      {
        name: 'Bar'
      },
      {
        name: 'Baz'
      }
    ];
  }
});

App.TacosRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        filling: 'Carnitas'
      },
      {
        filling: 'Lengua'
      },
      {
        filling: 'Moar Carnitas'
      }
    ];
  }
});
