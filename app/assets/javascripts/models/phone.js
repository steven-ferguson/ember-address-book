AddressBook.Phone = DS.Model.extend({
  contact: DS.belongsTo('contact'),
  name: DS.attr('string')
  
});