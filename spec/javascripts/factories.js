//=require ember-data-factory-1.0.0

Factory.define('contact', {
  name: "SamIAm"
});

AddressBook.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create()
});

AddressBook.Contact.FIXTURES = [

];
