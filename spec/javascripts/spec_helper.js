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
});

// Use the fixture adapter to pick up fixtures from Textbook.Blog.FIXTURES, etc.
AddressBook.ApplicationAdapter = DS.FixtureAdapter.extend();

// Disable Konacha's resetting. We bring our own reset for Ember.
Konacha.reset = function() { };




