//=require ember-data-factory-1.0.0

Factory.define('contact', {
  name: "SamIAm"
});

AddressBook.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create()
});

injectFixtures = function(app) {
  app.Contact.FIXTURES = [];  
};

