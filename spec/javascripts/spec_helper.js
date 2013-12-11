//=require application
//=require adapter
//=require factories


Ember.Test.adapter = Ember.Test.MochaAdapter.create();
AddressBook.rootElement = 'body';
AddressBook.setupForTesting();
AddressBook.injectTestHelpers();

// Reset the entire app before each test.
beforeEach(function() {
  AddressBook.reset();
  injectFixtures(AddressBook);
});

// Use the fixture adapter to pick up fixtures from Textbook.Blog.FIXTURES, etc.
AddressBook.ApplicationAdapter = DS.FixtureAdapter.extend();

// Disable Konacha's resetting. We bring our own reset for Ember.
Konacha.reset = function() { };

window.testHelper = {
  lookup: function(object, object_name) {
    name = object_name || "main";
    return AddressBook.__container__.lookup(object + ":" + name);
  }
}
