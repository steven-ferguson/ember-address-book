AddressBook.ContactsController = Ember.ArrayController.extend({
  actions: {  
    createContact: function() {
      var name = this.get('newName');
      if (!name.trim()) { return; }
      var contact = this.store.createRecord('contact', {
        name: name
      });
      contact.save();
      this.transitionToRoute("index", model);
    }
  }
});