AddressBook.ContactController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      var contact = this.get('model');
      contact.deleteRecord();
      contact.save();
      this.transitionToRoute('contacts');
    }
  }
});