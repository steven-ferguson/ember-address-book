AddressBook.ContactsNewController = Ember.Controller.extend({
  actions: {
    createContact: function() {
      var name = this.get('newName');
      if (!name.trim()) { return; }
      var contact = this.store.createRecord('contact', {
        name: name
      });
      contact.save().then(this.transitionToRoute('contact', contact));
    }
  }
});