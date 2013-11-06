AddressBook.ContactsController = Ember.ArrayController.extend({
  actions: {
    createContact: function() {
      var name = this.get('newContactName');
      if (!name.trim()) { return; }
      var contact = this.store.createRecord('contact', {
        name: name
      });
      this.set('newContactName', '');
      contact.save();
    }
  }
});