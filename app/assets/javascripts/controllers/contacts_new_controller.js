AddressBook.ContactsNewController = Ember.ObjectController.extend({
  actions: {
    createContact: function() {
      var name = this.get('newName');
      if (!name.trim()) { return; }
      this.get('model').set('name', name);
      this.get('model').save();
    }
  },

  transitionAfterSave: function() {
    if (this.get('model.id')) {
      this.transitionToRoute('contact', this.get('model'));
    }
  }.observes('model.id')
});