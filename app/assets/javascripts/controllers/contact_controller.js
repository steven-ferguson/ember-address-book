AddressBook.ContactController = Ember.ObjectController.extend({
  actions: {
    removeContact: function() {
      var contact = this.get('model');
      contact.deleteRecord();
      contact.save();
    }
  }
});