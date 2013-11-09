AddressBook.ContactNewPhoneController = Ember.ObjectController.extend({
  needs: 'contact',


  actions: {
    save: function() {
      var phone = this.get('model');
      var contact = this.get('controllers.contact').get('model');
      contact.get('phones').pushObject(phone);
      var number = this.get('newNumber');
      phone.set('number', number);
      phone.save();
    }
  }, 

  transitionAfterSave: function() {
    if (this.get('model.id')) {
      this.transitionToRoute('contact', this.get('model').get('contact'));
    }
  }.observes('model.id')
});