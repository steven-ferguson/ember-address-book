// For more information see: http://emberjs.com/guides/routing/

AddressBook.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
  });
});

AddressBook.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('contact');
  }
});
