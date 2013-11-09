AddressBook.ContactController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    updateContact: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },

    delete: function() {
      var contact = this.get('model');
      contact.deleteRecord();
      contact.save();
      this.transitionToRoute('contacts');
    },

    addPhone: function() {
      this.transitionToRoute('contact.newPhone');
    }
  }
});