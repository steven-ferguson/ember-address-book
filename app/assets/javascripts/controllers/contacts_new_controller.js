AddressBook.ContactsNewController = Ember.ObjectController.extend({
  actions: {
    createContact: function() {
      var self = this;
      var contact = this.get('model');
      var name = this.get('newName');
      if (name) {
        contact.set('name', name.trim());
      } else {
        contact.set('name', '');
      }
      contact.save().then(
        function () {
          self.transitionToRoute('contact', contact);
        }, 
        function (response) { 
          self.set('errors', response.message);
        }
      );
    }
  }
});