AddressBook.ContactController = Ember.ObjectController.extend({
  actions: {
    removeContact: function() {
      var contact = this.get('model');
      contact.deleteRecord();
      contact.save();
    }, 

    editContact: function() {
      this.set('isEditing', true);
    }, 

    acceptChanges: function() {
      this.set('isEditing', false);
      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeContact');
      } else {
        this.get('model').save();
      }
    }
  }
});