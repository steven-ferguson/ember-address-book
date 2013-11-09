AddressBook.Phone = DS.Model.extend({
  number: DS.attr('string'),
  name: DS.attr('string'),
  contact: DS.belongsTo('Contact')
});