// For more information see: http://emberjs.com/guides/routing/

AddressBook.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.resource('contact', { path: ':contact_id' });
  });
});

AddressBook.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('contact');
  }
});

AddressBook.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.contact_id);
  }
});




