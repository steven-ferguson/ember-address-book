// For more information see: http://emberjs.com/guides/routing/

AddressBook.Router.map(function() {
  this.resource('contacts', { path: '/'});
});

AddressBook.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  }
});
