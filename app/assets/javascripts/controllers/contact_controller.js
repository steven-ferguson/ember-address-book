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

    addPhone: function() {
      this.set('addingPhone', true);
    },

    addNewPhone: function() {
      var contact = this.get('model');
      var phoneNumber = this.get('newPhone');
      if (!phoneNumber.trim()) { return; }
      var phone = this.store.createRecord('phone', {
        number: phoneNumber,
        contact: contact
      });
      phone.save();
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